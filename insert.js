const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result= await db.insertMany(
    [
        {name:'vivo-1',brand:'vivo',price: 110000,category: 'mobile'}
        // {name:'bb-11',brand:'blackberry-pi',price: 160000,category: 'mobile'},
        // {name:'bc-12',brand:'blackberry-pr',price: 150000,category: 'mobile'},
        // {name:'bd-12',brand:'blackberry-pq',price: 200000,category: 'mobile'},
    ]
    );
}
insert()