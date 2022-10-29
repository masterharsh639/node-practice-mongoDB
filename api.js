const express=require('express')
const dbConnect=require('./mongodb')
const app=express();
const momgodb=require('mongodb')
app.use(express.json())

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data=await data.find().toArray();
    res.send(data)
});


app.post('/',async (req,res)=>{
    let data = await dbConnect();
    let result= await data.insertOne(req.body)
    res.send(result)
})

app.put('/:name',async (req,res)=>{
    let data= await dbConnect();
    let result = await data.updateOne({name:req.body.name} , {$set:req.body})
    res.send(result)
})

app.delete('/:id',async (req,res) => {
    let data= await dbConnect();
    let result= await data.deleteOne({_id:new momgodb.ObjectId(req.params.id)})
    console.log("datadeleted");
    res.send(req.params.id)
})
app.listen(4000)