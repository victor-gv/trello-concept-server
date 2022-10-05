declare type ConfigOptions = {
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
        url: string | undefined;
    };
};
export declare type GenericConfig = {
    [key: string]: ConfigOptions;
    production: ConfigOptions;
    test: ConfigOptions;
    development: ConfigOptions;
};
export {};
