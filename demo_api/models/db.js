const mongoose = require('mongoose');
//connect
mongoose.connect('mongodb+srv://abc:Abc_123@cluster0.7zypxfq.mongodb.net/database_agile')
.catch((err) => {
    console.log("loi ket noi csdl");
    console.log('err');
});
module.exports = {mongoose}
