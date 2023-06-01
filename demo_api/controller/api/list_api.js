

var model = require('../../models/sanpham_model');

exports.listUser = async (req, res, next) => {

    msg = 'danh sách User'

    try {
        let list = await model.spModel.find();

    //   return  res.status(200).json({msg: 'lấy địa chỉ thành công', data: list});
    return  res.status(200).json(list);
    } catch (error) {
        return res.status(204).json({msg: 'không có dữ liệu' + error.message});
    }

    // res.status(200).json({msg});
};