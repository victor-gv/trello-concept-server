"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("cloudinary"));
const cloudinaryAuth = cloudinary_1.default.v2;
cloudinaryAuth.config({
    cloud_name: 'juancarlos',
    api_key: '741934352396129',
    api_secret: 'zJh5VEmeEJEtdsLeuaL5_BrMvj4'
});
exports.default = cloudinaryAuth;
//# sourceMappingURL=cloudinary.js.map