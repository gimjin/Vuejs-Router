// 初始化假数据方法
// $cd Cruise
// $node data.config.js

var fs = require('fs') // 文件模块
var path = require('path') // 系统路径模块
var beautify = require('js-beautify').js // 美化JSON

//创建data对象
var data = {
  agents: []
}

var page = 0
var count = 8 // 单个json文件中agent数量

//通过for循环追加数据
for (var i = 0; i <= 1024; i++) {
  var obj = {
    "id": i,
    "url": "bjstdmngbgr" + i + ".thoughtworks.com",
    "type": i % 2 == 0 ? "physical" : "virtual",
    "state": i % 3 == 0 ? "building" : "idle",
    "server": "192.168." + Math.floor(Math.random() * 255 + 1) + "." + Math.floor(Math.random() * 255 + 1),
    "path": "/var/lib/cruise-agent",
    "resources": [
      "ubuntu", "firefox3"
    ]
  }
  // 动态修改resources
  i % 3 == 0 ? obj.resources.push("mysql", "core-duo") : obj.resources.push("core-duo")
  // 对象放入数组
  data.agents.push(obj)
  // 创建需模拟的request
  if (i % count == 0 && i != 0) {
    // 创建文件
    createJSONFile(data, page)
    page++
    // 文件创建后数组清空
    data.agents = []
  }
}

function createJSONFile(data, page) {
  //把data对象转换为json格式字符串
  var content = JSON.stringify(data)
  // 字符串美化
  var beautifulContent = beautify(content)
  //指定创建目录及文件名称，__dirname为执行当前js文件的目录
  var file = path.join(__dirname + '/static/json/', 'request-page=' + page + '.json')
  //写入文件
  fs.writeFile(file, beautifulContent, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log('Succeed: ' + file)
  });
}
