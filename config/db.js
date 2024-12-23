import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequelize","root","alihasanjutt331228",{
     host:"localhost",
     dialect: "mysql"
 })
 const dbConnect = async()=>{

    try {
     await sequelize.authenticate()
        console.log("DB Connection has been established successfully");
        
    } catch (error) {
        console.log("Unable to connect to database",error);
        
    }
}
export { sequelize, dbConnect };
