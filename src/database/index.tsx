import mongoose from "mongoose";

const connectToDB = async() =>{
    const connectionURL = "mongodb+srv://samyakj0507:LA52YIxmUtJYtPhd@cluster0.yw2rdmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(connectionURL).then(()=> console.log("job board database connection is successful")).catch(e=>console.log('error'))

}

export default connectToDB;