// 保存用户操作有关的请求功能
var user = {
    // 设置 login方法, 用来进行登录请求操作
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN,
            data: {
                // 第一个user_name 是data属性值
                // 第二个data.user_name 是html中的data实参的user_name属性的值
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    // 设置logout方法,用来进行退出操作
    logout: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }

        })
    },
    // 添加getUser方法,用于获取用户基础信息
    getUser: function (options) {
        $.ajax({
            url: GETUSER,
            success: function (res) {

                if (res.code === 200) {
                    options.success(res);
                    // 注意:需要填入实参res,否则在html中无法使用这个函数
                }
            }
        })
    },
    // 添加userInfo 方法,用于获取用户详细信息
    userInfo: function (options) {
        $.ajax({
            url: USERINFO,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },

    // 添加editInfo 方法,用于编辑用户信息
    editInfo: function (options) {


        $.ajax({
            type: 'POST',
            url: EDITINFO,
            data: options.data.fd,
            // 注意点2: 使用FormData发送ajax,必须添加两个属性
            contentType: false,    // 不需要jQuery设置内容类型
            processData: false,   // 不需要jQuery进行内容处理
            success: function (res) {
                options.success(res);
            }
        })

    }
}
