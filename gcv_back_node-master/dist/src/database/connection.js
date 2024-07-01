"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const poolConnection = () => {
    return new pg_1.Pool({
        host: 'localhost',
        user: 'bguqfzkx_gcvuser',
        password: 'gcvuser@123',
        database: 'bguqfzkx_GcvDatabase',
    });
};
exports.default = poolConnection;
//# sourceMappingURL=connection.js.map