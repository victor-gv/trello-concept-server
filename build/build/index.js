"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = tslib_1.__importDefault(require("./server"));
const config_1 = tslib_1.__importDefault(require("./config/config"));
const connect_1 = tslib_1.__importDefault(require("./db/connect"));
(0, connect_1.default)().then(async function onsServerInit() {
    config_1.default.logger.info('DB connected');
    server_1.default.listen(config_1.default.app.PORT, () => {
        config_1.default.logger.info(`Server running at http://localhost:${config_1.default.app.PORT}`);
    });
});
//# sourceMappingURL=index.js.map