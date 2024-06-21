const express=require('express')
const app=express()
const cors = require('cors')
const port=3000;
app.use(express.json())
app.use(cors());
const loginRouter=require('./route/login')
const signupRouter=require('./route/signup')    
const reviewRoutes = require('./route/reviews');

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/api/reviews', reviewRoutes);


app.get('/',(req,res)=>{
    res.send('Hello World') ;
})
// fetch('/api/reviews', {
//     method: 'POST',
//     body: JSON.stringify({ breweryId: id, review: newReview, rating: newRating }),
//     headers: { 'Content-Type': 'application/json' }
//   }).then(response => response.json()).then(data => {
//     setReviews(data.reviews); // Assuming the server returns the updated list of reviews
//   });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


