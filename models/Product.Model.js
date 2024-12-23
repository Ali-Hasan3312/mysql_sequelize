import { DataTypes, Model } from 'sequelize'
import { sequelize} from '../config/db.js'

export class Product extends Model {}
Product.init({
    productName: {
        type:DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "Product",
    tableName: "products"
})