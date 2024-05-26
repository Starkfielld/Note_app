"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', noteRoutes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
mongoose_1.default.connect('mongodb+srv://paulo:1234@cluster0.mrx0sgj.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    dbName: 'Cluster0',
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
