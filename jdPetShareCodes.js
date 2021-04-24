/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  'MTAxODc2NTEzMTAwMDAwMDAyODUyMTAwNw==@MTAxODcxMjg4ODAwMDAwMDAwMDIzMzg5OQ==@MTAxODc2NTEzNDAwMDAwMDAwMDI5MjAyMw==@MTE1NDQ5MzYwMDAwMDAwMzU3MjE5MTk=@MTAxODc2NTEzMzAwMDAwMDAyODUyMTAwNQ==@MTAxODc2NTEzMDAwMDAwMDAwMDI5MjIyNw==@MTAxODc2NTEzMjAwMDAwMDAwNzA0NTE3MQ==@MTAxODc2NTEzOTAwMDAwMDAyODU0ODY4Nw==@MTE1NDUwMTI0MDAwMDAwMDQyOTYxMTcx@MTE1NDAxNzgwMDAwMDAwMzYzMTcxOTc=@MTE1NDQ5OTIwMDAwMDAwNDQ0NjQzMTc=@MTAxODc2NTEzMjAwMDAwMDAzMTMzMjkxNw==@MTAxODc2NTEzNTAwMDAwMDAyODg1NTE1OQ==@MTE1NDQ5MzYwMDAwMDAwNDM0NzY2OTU=@MTAxODc2NTEzMzAwMDAwMDAwMTI4Mjg1Nw==@MTE1NDQ5OTIwMDAwMDAwNDMwOTM2OTE=@MTAxODc2NTEzMTAwMDAwMDAyODIzNzQwMQ==@MTEzMzI0OTE0NTAwMDAwMDA0NDgwNjU3Nw==@MTAxODc2NTEzNTAwMDAwMDAyODg2NzI1Nw==@MTEzNzcwMTQ4MDAwMDAwMDQ3OTE0ODgz@MTEyNTEyNTE1MDAwMDAwMDA0NzkxNDUyMw=="
',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  'MTAxODc2NTEzMTAwMDAwMDAyODUyMTAwNw==@MTAxODcxMjg4ODAwMDAwMDAwMDIzMzg5OQ==@MTAxODc2NTEzNDAwMDAwMDAwMDI5MjAyMw==@MTE1NDQ5MzYwMDAwMDAwMzU3MjE5MTk=@MTAxODc2NTEzMzAwMDAwMDAyODUyMTAwNQ==@MTAxODc2NTEzMDAwMDAwMDAwMDI5MjIyNw==@MTAxODc2NTEzMjAwMDAwMDAwNzA0NTE3MQ==@MTAxODc2NTEzOTAwMDAwMDAyODU0ODY4Nw==@MTE1NDUwMTI0MDAwMDAwMDQyOTYxMTcx@MTE1NDAxNzgwMDAwMDAwMzYzMTcxOTc=@MTE1NDQ5OTIwMDAwMDAwNDQ0NjQzMTc=@MTAxODc2NTEzMjAwMDAwMDAzMTMzMjkxNw==@MTAxODc2NTEzNTAwMDAwMDAyODg1NTE1OQ==@MTE1NDQ5MzYwMDAwMDAwNDM0NzY2OTU=@MTAxODc2NTEzMzAwMDAwMDAwMTI4Mjg1Nw==@MTE1NDQ5OTIwMDAwMDAwNDMwOTM2OTE=@MTAxODc2NTEzMTAwMDAwMDAyODIzNzQwMQ==@MTEzMzI0OTE0NTAwMDAwMDA0NDgwNjU3Nw==@MTAxODc2NTEzNTAwMDAwMDAyODg2NzI1Nw==@MTEzNzcwMTQ4MDAwMDAwMDQ3OTE0ODgz@MTEyNTEyNTE1MDAwMDAwMDA0NzkxNDUyMw=="
',
]
// 判断github action里面是否有东东萌宠互助码
if (process.env.PETSHARECODES) {
  if (process.env.PETSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东萌宠互助码选择的是用&隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('&');
  } else if (process.env.PETSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东萌宠互助码选择的是用换行隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('\n');
  } else {
    PetShareCodes = process.env.PETSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PetShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PetShareCode' + index] = PetShareCodes[i];
}
