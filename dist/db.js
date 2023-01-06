"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
async function connect() {
    const DB_CONNECTION = "mongodb+srv://krishnendudakshi:SvPAWghO2zmBLL1X@testcluster.mcb49vu.mongodb.net/Aagman?retryWrites=true&w=majority";
    try {
        mongoose_1.default
            .connect(DB_CONNECTION)
            .then(() => console.log("Database is connected"))
            .catch((e) => console.log(e));
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}
exports.default = connect;
