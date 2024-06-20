const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Sahilgupta123:Sahilgupta766@cluster0.wft8uwg.mongodb.net/Brewery').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const User=mongoose.model('User',UserSchema);
module.exports={User};