// 39A7TcpA1uZtDS7t - pswrd

const app = require('./src/app.js');
const connectToDB = require('./src/config/database.js');
app.listen(3000 , () => {
    console.log("Server is running at port 3000");
})