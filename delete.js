const dbConnect=require('./mongodb')

const deleteData = async () => {
    const data = await dbConnect();
    let result = await data.deleteOne({name:'mi-12'})
    console.log(result);

    if(result.acknowledged){
        console.log('data deleted')
    }
} 
deleteData()