const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/backen_restorentapp')

const connectDB= async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/backen_restorentapp');
    const orderdetailSchema = new mongoose.Schema({});
    const orderdetail = mongoose.model('orderdetail', orderdetailSchema);
    const data = await orderdetail.find();
    console.warn(data);
}
connectDB();