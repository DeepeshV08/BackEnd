/**
 * Server ko start karna
 * databse se connect karna
 * pswrd mongo atlas = fnGP5zLRCKrAuofh
 */
const dotenv = require("dotenv");
const app = require('./src/app')
dotenv.config(); //  sabse pehle

const connectToDB = require("./src/config/database");

connectToDB();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})