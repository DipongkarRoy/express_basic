"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(someOne);
    }
    catch (error) {
        next(error);
    }
}));
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        massage: 'Router not found data'
    });
});
//global error handler :
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            massage: 'error handle data'
        });
    }
});
exports.default = app;
