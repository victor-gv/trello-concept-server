/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
export const __esModule: boolean;
export default BoardModel;
declare const BoardModel: mongoose_1.Model<{
    tasks: {
        default: mongoose_1.Types.DocumentArray<any> | any[];
        type?: {
            _id?: any;
            id?: {
                [x: number]: unknown;
                [Symbol.iterator]?: {};
                [Symbol.toStringTag]?: unknown;
                indexOf?: {};
                lastIndexOf?: {};
                slice?: {};
                length?: unknown;
                includes?: {};
                at?: {};
                equals?: {};
                set?: {};
                toJSON?: {};
                toString: {};
                valueOf: {};
                toLocaleString: {};
                reverse?: {};
                sort?: {};
                fill?: {};
                copyWithin?: {};
                join?: {};
                every?: {};
                some?: {};
                forEach?: {};
                map?: {};
                filter?: {};
                reduce?: {};
                reduceRight?: {};
                find?: {};
                findIndex?: {};
                entries?: {};
                keys?: {};
                values?: {};
                byteLength?: unknown;
                compare?: {};
                buffer?: {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    byteLength?: unknown;
                } | {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    [Symbol.species]?: any;
                    byteLength?: unknown;
                };
                write?: {};
                copy?: {};
                subarray?: {};
                writeBigInt64BE?: {};
                writeBigInt64LE?: {};
                writeBigUInt64BE?: {};
                writeBigUint64BE?: {};
                writeBigUInt64LE?: {};
                writeBigUint64LE?: {};
                writeUIntLE?: {};
                writeUintLE?: {};
                writeUIntBE?: {};
                writeUintBE?: {};
                writeIntLE?: {};
                writeIntBE?: {};
                readBigUInt64BE?: {};
                readBigUint64BE?: {};
                readBigUInt64LE?: {};
                readBigUint64LE?: {};
                readBigInt64BE?: {};
                readBigInt64LE?: {};
                readUIntLE?: {};
                readUintLE?: {};
                readUIntBE?: {};
                readUintBE?: {};
                readIntLE?: {};
                readIntBE?: {};
                readUInt8?: {};
                readUint8?: {};
                readUInt16LE?: {};
                readUint16LE?: {};
                readUInt16BE?: {};
                readUint16BE?: {};
                readUInt32LE?: {};
                readUint32LE?: {};
                readUInt32BE?: {};
                readUint32BE?: {};
                readInt8?: {};
                readInt16LE?: {};
                readInt16BE?: {};
                readInt32LE?: {};
                readInt32BE?: {};
                readFloatLE?: {};
                readFloatBE?: {};
                readDoubleLE?: {};
                readDoubleBE?: {};
                swap16?: {};
                swap32?: {};
                swap64?: {};
                writeUInt8?: {};
                writeUint8?: {};
                writeUInt16LE?: {};
                writeUint16LE?: {};
                writeUInt16BE?: {};
                writeUint16BE?: {};
                writeUInt32LE?: {};
                writeUint32LE?: {};
                writeUInt32BE?: {};
                writeUint32BE?: {};
                writeInt8?: {};
                writeInt16LE?: {};
                writeInt16BE?: {};
                writeInt32LE?: {};
                writeInt32BE?: {};
                writeFloatLE?: {};
                writeFloatBE?: {};
                writeDoubleLE?: {};
                writeDoubleBE?: {};
                BYTES_PER_ELEMENT?: unknown;
                byteOffset?: unknown;
            };
            toHexString?: {};
            equals?: {};
            toJSON?: {};
            toString: {};
            _bsontype?: mongoose_1.Types.ObjectId;
            generationTime?: unknown;
            getTimestamp?: {};
            inspect?: {};
        };
        ref?: {};
    }[];
    name?: unknown;
}, {}, {}, {}, mongoose_1.Schema<any, mongoose_1.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    tasks: {
        default: mongoose_1.Types.DocumentArray<any> | any[];
        type?: mongoose_1.Types.ObjectId;
        ref?: unknown;
    }[];
}>>;
import mongoose_1 = require("mongoose");
