"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
//route express js :
const useRouter = express_1.default.Router();
app.use('/api/v1/user', useRouter);
app.use('/api/v1/course', useRouter);
useRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        masssage: 'data send me done',
        data: user
    });
});
useRouter.post("/course-info", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        massage: 'server data send me dear',
        data: course
    });
});
app.get("/:id/:subId", (req, res) => {
    console.log(req.params);
    res.send('Hello World web developer programing hero love u dipongkar!');
});
app.get("/", (req, res) => {
    console.log(req.query.name);
    res.send('Hello World web developer programing hero love u dipongkar!');
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send('amr sonar bangla');
});
exports.default = app;
