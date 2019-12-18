// 保存文章相关的功能操作

var article = {
    getCate: function (options) {
        $.ajax({
            url: GETCATE,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    addCate: function (options) {
        $('#modal_add').on('click', function () {

            // 2.4 如果验证成功,则发送请求,添加进结构
            $.ajax({
                type: 'POST',
                url: ADDCATE,
                data: options.data.info,      //  serialize方法 是将表单中内容变成名=值&名=值...的格式
                success: function (res) {
                    if (res.code === 200) {
                        options.success();
                    } else {
                        if (res.code === 400) {
                            alert('名称或别称重复')
                        }
                        else {
                            options.false();
                        }

                    }
                }
            })
        })
    },
    editCate: function (options) {
        $.ajax({
            type: 'POST',
            url: EDITCATE,
            data: options.data.info,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.false();
                }
            }
        })
    },
    delCate: function (options) {
        $.ajax({
            type: 'POST',
            url: DELCATE,
            data: options.data.id,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }
}