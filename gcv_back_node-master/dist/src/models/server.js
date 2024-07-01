"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.apiPaths = {};
        this.app = express_1.default();
        this.port = process.env.PORT || '8080';
        this.dbConnection();
        this.middlewares();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.pool = connection_1.default();
            }
            catch (error) {
                throw new Error("Error in dbConnection() file models/server: " + error);
            }
        });
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    listen() {
        try {
            this.app.listen(this.port, () => {
                console.log("Server running in port: " + this.port);
            });
        }
        catch (error) {
            throw new Error("Error in listen() file models/server" + error);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map