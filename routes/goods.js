const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
router.prefix('/goods')
router.post('/isimg', userOperation.copmeImg)

module.exports = router


// const conf = {};
    // // 定义sheet名称 注意事项定义的不能为中文，否则导出会是个空文件
    // conf.name = "sheet";
    //     //下面是示例，数据根据查表自己创建
    // // 定义列的名称以及数据类型
    // conf.cols = [{
    //     caption:'姓名',
    //     type:'string'
    // },{
    //     caption:'性别',
    //     type:'string'
    // }, {
    //     caption:'年龄',
    //     type:'number'
    //     }
    // ];
    
    // // 定义row的数据
    // conf.rows = [['小名','男',24],['小红','女','20'],['小军','未知','33']];
    // const result = nodeExcel.execute(conf);
    // const data =new Buffer(result,'binary');
    //  ctx.set('Content-Type', 'application/vnd.openxmlformats');
    // ctx.set("Content-Disposition", "attachment; filename=" + "user.xlsx");
    //  ctx.body = data