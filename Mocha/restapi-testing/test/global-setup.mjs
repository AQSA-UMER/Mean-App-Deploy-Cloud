// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import Item from '../app.mjs'; // this import your item model


export async function mochaGlobalSetup(){
    console.log("Global Setup: connecting to database - global setup");
    // use environment variable for mongoDB connection URI
    const mongoUri = process.env.MONGO_URL || 'mongodb://localhost:27017/testDB'

    // Connect to MongoDB [here add line 11-23]
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Clear the database and seed initial data
    console.log("Seeding database with initial data...");
    await Item.deleteMany(); // Clear existing data
    await Item.insertMany([
        { name: "Item 1" },
        { name: "Item 2" },
    ]);

    //global state or shared state
    global.globalData = {count:0};
}

export async function mochaGlobalTeardown(){
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();
}