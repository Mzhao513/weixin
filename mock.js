// 使用 Mock,梳理需求
/*eslint-disable  */
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // 用户信息
    'users|3': [
      {
        'id|+1': 1,
        'name': '',
        'phone|+1': '17665202221',
        'pwd': '123123',
        'friends': ["15607122331", "17665202222", "15607122332"],
        'wxnum|+1': '17665202221',
        'imgs': '',
        'chat': {}
      }
      /*
      数据结构：
      {
        id,
        手机号，
        用户名，
        密码，
        微信号,
        头像,
        好友，
      }
      {
        id: 1,
        phone: 18600805498,
        name: "关羽",
        pwd: 134344,
        friends: [],
      }
      */
    ]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err)
   }
   console.log("数据写入成功！")
});