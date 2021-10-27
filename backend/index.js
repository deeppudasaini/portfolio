
const express= require('express');
const app= express();
const experience=require('./routes/experience');
const education=require('./routes/education');
const skill=require('./routes/skill');
const introduction=require('./routes/introduction');
const connectDb= require('./db/connect.js');
// const notFound= require('./middlewares/404notfound');
require('dotenv').config();
/**
 * Middleware
 */
app.use(express.json());
// app.use(notFound);
app.use('/api/experiences',experience);
app.use('/api/educations',education);
app.use('/api/skills',skill);

const port=5000;
const start=async()=>{
    try{
        
        await connectDb(`mongodb+srv://deep:${process.env.DB_PASSWORD}@cluster0.xic80.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        app.listen(port,()=>{
            console.log(`Server started on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
};
start();

