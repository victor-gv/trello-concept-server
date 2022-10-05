"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAll = exports.remove = exports.update = exports.read = exports.create = void 0;
const create = (model) => async ({ body }, res, _next) => {
    try {
        const doc = await model.create(body);
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be created" });
    }
};
exports.create = create;
const read = (model) => async ({ params: { id: _id } }, res, _next) => {
    try {
        const doc = await model.findOne({ _id }).lean().exec();
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
const update = (model) => async ({ params: { id }, body }, res, _next) => {
    try {
        const doc = await model
            .findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
            .lean()
            .exec();
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
        res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be deleted" });
    }
};
exports.remove = remove;
//# sourceMappingURL=baseController.js.map