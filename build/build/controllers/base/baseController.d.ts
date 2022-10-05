export const __esModule: boolean;
export function create(model: any): ({ body }: {
    body: any;
}, res: any, _next: any) => Promise<void>;
export function read(model: any): ({ params: { id } }: {
    params: {
        id: any;
    };
}, res: any, _next: any) => Promise<void>;
export function readAll(model: any): ({ query }: {
    query: any;
}, res: any, _next: any) => Promise<void>;
export function update(model: any): ({ params: { id }, body }: {
    params: {
        id: any;
    };
    body: any;
}, res: any, _next: any) => Promise<void>;
export function remove(model: any): ({ params: { id } }: {
    params: {
        id: any;
    };
}, res: any, _next: any) => Promise<void>;
