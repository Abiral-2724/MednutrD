const express = require('express') ; 
const { register, login, logout } = require('../controllers/user.controller');
const auth = require('../utils/middleware');

const router = express.Router() ;

 router.route('/register').post(register) ;
 router.route('/login').post(login);
 router.route('/logout').post(auth, logout);

module.exports = router ;