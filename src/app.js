
const express =  require ("express");
const connectDB = require("./config/database");
const app = express();
const user =  require("./models/user");

app.post("/signup" , async (req, res) =>
{
   const user = new userActivation({
      firstName:"kshitij",
      lsstName:"sharma",
      emailId:"kshitijsharma99@gmail.com", 
      password:"kshitij@18",
   });
   try {
   await user.isActive();
   res.send("user Added successfully!");
       }
    catch (err){
      res.status(400).send("error saving the user :" + err.message);
    }   

});


connectDB()
.then(() => {
    console.log(" Database connected established...");
    app.listen("3000",()=> {

      console.log("kshitij is successfully listning on port 3000...");
  
});  

})
.catch((err) => {
    console.error("Database cannot be connected!!");
});



















 