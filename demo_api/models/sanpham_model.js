const {model} = require('mongoose');
var db = require('./db');
//định nghĩa cấu trúc model
const spSchema = new db.mongoose.Schema(
    //truyền vào đối tượng định nghĩa cấu trúc
    {
        tenSp : {type: String, required : true}, // required : true : dữ liệu bắt buộc nhập
        giaSp : {type: Number, required : true},
        image : {type: String, required : false},
        id_theloai :  {type : db.mongoose.Schema.Types.ObjectId, ref : 'roleSpModel'},
    },
    {
        collection: "sanpham"
    }
);

// định nghĩa model
let spModel = db.mongoose.model('spModel', spSchema);

//thể loại
const roleSpSchema = new db.mongoose.Schema(
    {
        tentheloai : {type : String, required : true},
    },
    {
        collection : "theloai"
    }
);

let roleSpModel = db.mongoose.model('roleSpModel', roleSpSchema);


module.exports = {spModel, roleSpModel}