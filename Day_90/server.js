const app = require('./src/app');

const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect('mongodb+srv://Deepesh:u2V7SkhZ41H3cftk@cluster0.nppfkrr.mongodb.net/day-6')
    .then(()=>{
        console.log('connected to database');
    })
}
connectToDatabase();

app.listen(3000, () => {
    console.log('Server is runnig at post 3000'); 
})