"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const logger = tslib_1.__importStar(require("loglevel"));
dotenv_1.default.config();
const ENV = process.env.NODE_ENV || "development";
logger.enableAll();
const CONFIG = {
    production: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
    development: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
    test: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
};
exports.default = CONFIG[ENV];
//# sourceMappingURL=config.js.map