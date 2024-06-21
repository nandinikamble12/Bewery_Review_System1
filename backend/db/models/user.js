const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://nandinikamble7498:admin123@cluster0.h7lcwdd.mongodb.net/Brewery').then(() => {
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
