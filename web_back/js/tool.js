// 文件保存网站配置信息
// 为防止冲突,命名全部大写 ,用下划线辨别作用
var BASE_URL = 'http://localhost:8000/';    //  通过变量保存网站基地址

var LOGIN = BASE_URL + 'admin/login';       //  登录接口地址 
var LOGOUT = BASE_URL + 'admin/logout';     //  退出接口地址
var GETUSER = BASE_URL + 'admin/getuser';   //  获取用户基础信息接口地址
var USERINFO = BASE_URL + 'admin/userinfo_get';    // 获取用户详细信息接口地址
var EDITINFO = BASE_URL + 'admin/userinfo_edit';   // 编辑用户信息接口地址
var GETCATE = BASE_URL + 'admin/category_search';   // 编辑用户信息接口地址
var ADDCATE = BASE_URL + 'admin/category_add';   // 编辑用户信息接口地址
var EDITCATE = BASE_URL + 'admin/category_edit';   // 编辑用户信息接口地址
var DELCATE = BASE_URL + 'admin/category_delete';   // 编辑用户信息接口地址
