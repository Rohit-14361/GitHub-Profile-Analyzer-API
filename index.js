const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();

const profileRoutes=require('./src/routes/profile.route');

app.use("/api/profiles", profileRoutes);


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listening to the PORT ${PORT}`)
})