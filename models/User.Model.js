import { DataTypes, Model } from 'sequelize'
import { sequelize} from '../config/db.js'

export class User extends Model {}
  User.init({
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users"
})