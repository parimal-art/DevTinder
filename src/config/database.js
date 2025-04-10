const mongoose = require("mongoose");
const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://parimalmaity852:79bNKRAMaSBbRGFI@namastenodenew.vdmhzuw.mongodb.net/DevTinder"
    );
}

module.exports= connectDB;

