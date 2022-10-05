"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAll = exports.remove = exports.update = exports.read = exports.create = void 0;
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("../../utils/cloudinary"));
const create = (model) => async (req, res, _next) => {
    const body = { ...req.body };
    try {
        const doc = await model.create(body);
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: error.message });
    }
};
exports.create = create;
const read = (model) => async ({ params: { id: _id } }, res, _next) => {
    try {
        const doc = await model.findOne({ _id }).lean().exec();
        if (!doc)
            return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ ok: false, msg: error.message });
    }
};
exports.read = read;
const readAll = (model) => async ({ query }, res, _next) => {
    const filter = query;
    try {
        const doc = await model
            .find({ ...filter })
            .lean()
            .exec();
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Elements cannot be found" });
    }
};
exports.readAll = readAll;
const urlProfilePictureCloudinary = async (imageInfo, body) => {
    const cloudInfo = await cloudinary_1.default.uploader.upload(imageInfo, {
        upload_preset: "photos",
    }, function (_error, result) {
        body["profilePicture"] = result.secure_url;
        return body;
    });
    return cloudInfo;
};
const update = (model) => async (req, res, _next) => {
    const { id: _id } = req.params;
    const body = { ...req.body };
    try {
        const fileImage = req.body?.profilePicture;
        if (fileImage != undefined && fileImage != "") {
            const dataBody = await urlProfilePictureCloudinary(req.body?.profilePicture, body);
            body["profilePicture"] = dataBody.secure_url;
        }
        const doc = await model
            .findOneAndUpdate({ _id }, { ...body }, { new: true })
            .lean()
            .exec();
        if (!doc)
            return res.status(400).send({ ok: false, msg: "Cannot update a document that not exist" });
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be updated" });
    }
};
exports.update = update;
const remove = (model) => async ({ params: { id } }, res, _next) => {
    try {
        const doc = await model.findByIdAndDelete(id);
        if (!doc)
            return res.status(400).send({ ok: false, msg: `Cannot delete a that does not exist` });
        res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be deleted" });
    }
};
exports.remove = remove;
//# sourceMappingURL=baseController.js.map