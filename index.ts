import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3003;

app.get('/api/ping',(_req,res)=>{
    res.send('Hello patient');
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});