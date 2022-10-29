const dbConnect = require('./mongodb')

const update = async () => {
    const db= await dbConnect();
    const result = await db.updateMany(
        {name:'m-40'},{$set:{price:3000}},
        {name:'i-14'},{$set:{price:3000}},
        {name:'n-73'},{$set:{price:3000}},
        {name:'mi-12'},{$set:{price:3000}}
    );
}
update();