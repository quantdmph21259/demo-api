var express = require('express');
var router = express.Router();
var list_api = require('../controller/api/list_api');

// url : get /api/users ==> lấy danh sách
router.get('/listSp', list_api.listUser);

// router.post('/users', user_api.addUser);

// // url put : api.users/edit/123456xxx
// router.put('/users/:idUser', user_api.editUser);

module.exports = router;