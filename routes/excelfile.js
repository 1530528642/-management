const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
router.prefix('/files')
router.get('/getexcel', (req, res)=> {
    const nodeExcel = require("excel-export");//首先，引入excel模块：
    var conf ={};//创建一个写入格式map，其中cols(表头)，rows(每一行的数据);
    var cols =['学号','姓名','年龄','性别','班级编号'];//手动创建表头中的内容
    conf.cols =[];//在conf中添加cols
    
    for(var i=0;i<cols.length;i++){
        var tits ={};//创建表头数据所对应的类型,其中包括 caption内容 type类型
        tits.caption = cols[i];//添加内容
        tits.type='string'//添加对应类型，这类型对应数据库中的类型，入number，data但一般导出的都是转换为string类型的
        conf.cols.push(tits);//将每一个表头加入cols中
    }
            var data = [
                {'id':'2312','name':'张三','age':'22','sex':'男','banji':'高三1班'},
                {'id':'2312','name':'张三','age':'22','sex':'男','banji':'高三2班'},
                {'id':'2312','name':'张三','age':'22','sex':'男','banji':'高三3班'}
            ]
            var tows = ['id','name','age','sex','banji'];//创建一个和表头对应且名称与数据库字段对应数据，便于循环取出数据
            var datas =[];//用于承载数据库中的数据
            for(var i=0;i<data.length;i++) {//循环数据库得到的数据，因为取出的数据格式为
                                                        //[{'id':2312,'name':'张三','age':'22','sex':'男','banji':'高三一班'},{…………},{…………}]
                var tow =[];//用来装载每次得到的数据
                for(var j=0;j<tows.length; j++){//内循环取出每个
                        tow.push(data[i][tows[j]]);//或者tow.push((data[i].tows[j]).toString());两种形式都是相同的
                }
                datas.push(tow);//将每一个{ }中的数据添加到承载中
            }
            conf.rows = datas;//将所有行加入tows中
            console.log(conf, '----------')
            var result = nodeExcel.execute(conf);//将所有数据写入nodeExcel中
            const datass = new Buffer.from(result,'binary');
            req.set('Content-Type', 'application/vnd.openxmlformats');
            req.set("Content-Disposition", "attachment; filename=" + "user.xlsx");
            req.body = datass
})

module.exports = router
