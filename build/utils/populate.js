"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (field) => function (next) {
    console.log('entro');
    this.populate(field);
    next();
};
//# sourceMappingURL=populate.js.map