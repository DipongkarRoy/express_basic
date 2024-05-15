
import { error } from "console";
import express, { NextFunction, Request, Response } from "express"

const app = express()
const port = 3000

app.use(express.json());
app.use(express.text())

//route express js :
const useRouter = express.Router()
app.use('/api/v1/user', useRouter)
app.use('/api/v1/course' ,useRouter)
useRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user)
  res.json({
    success: true,
    masssage: 'data send me done',
    data: user
  })
})

useRouter.post("/course-info" ,(req:Request,res:Response)=>{
  const course = req.body
  console.log(course);
  res.json({
    success:true ,
    massage:'server data send me dear',
    data:course
  })
})

app.get("/:id/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello World web developer programing hero love u dipongkar!')
})
app.get("/", (req: Request, res: Response) => {
  console.log(req.query.name);
  res.send('Hello World web developer programing hero love u dipongkar!')
})

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send('amr sonar bangla')
})


app.get("/", async(req:Request,res:Response ,next:NextFunction)=>{
 try{
  res.send(someOne)
 }catch(error){
  next(error)
 }
 
 })

app.all("*",(req:Request ,res:Response)=>{
  res.status(400).json({
    success:false ,
    massage:'Router not found data'
  })
})

//global error handler :
app.use((error:any ,req:Request,res:Response,next:NextFunction)=>{
  if(error){
    res.status(400).json({
      success:false ,
      massage:'error handle data'
    })
  }
})


export default app