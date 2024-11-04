import mongoose from 'mongoose';

// root hook
before(async()=>{
    console.log("Global Setup: connecting to database - global setup");
    await mongoose.connect('mongodb://localhost:27017/testDB');

    //global state or shared state
    // global.globalData = {count:0}
})

after(async()=>{
    await mongoose.disconnect();
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();
})