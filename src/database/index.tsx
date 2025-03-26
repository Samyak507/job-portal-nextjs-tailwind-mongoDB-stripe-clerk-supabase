// import mongoose from "mongoose";

// const connectToDB = async() =>{
//     const connectionURL = "mongodb+srv://samyakj0507:LA52YIxmUtJYtPhd@cluster0.yw2rdmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//     mongoose.connect(connectionURL).then(()=> console.log("job board database connection is successful")).catch(e=>console.log('error'))

// }

// export default connectToDB;


import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://samyakj0507:LA52YIxmUtJYtPhd@cluster0.yw2rdmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("✅ Already connected to MongoDB");
        return;
    }

    try {
        console.log("🌐 Connecting to MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("✅ Job board database connection is successful");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Database connection failed");
    }
};

export default connectToDB;




//LA52YIxmUtJYtPhd