declare const _default: {
    app: {
        PORT: string | number;
        PRIVATE_KEY: string;
    };
    logger: {
        warn: (message: string) => void;
        info: (message: string) => void;
        error: (message: string) => void;
        trace: (message: string) => void;
        debug: (message: string) => void;
    };
    db: {
        url: string;
    };
};
export default _default;
