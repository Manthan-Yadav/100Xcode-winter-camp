import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(process.env.db_url)
    console.log("db connect succesfully")
  } 
  catch (error) {
    console.log(error);
  }
}

export default connectToDb