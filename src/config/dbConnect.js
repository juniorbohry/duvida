
import mongoose from "mongoose"

mongoose.connect("mongodb+srv://JuniorAlura:123321@junioralura.jmhxk.mongodb.net/JuniorAlura-Node");

let db = mongoose.connection;

export default db;