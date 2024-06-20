const express=require('express')
const app=express()
const port=3000;
app.use(express.json())
const loginRouter=require('./route/login')
const signupRouter=require('./route/signup')    


app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.get('/',(req,res)=>{
    res.send('Hello World') ;
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})