/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
   //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  '## 东东农场：
f0c316e600554256bde4ac44860c0e0c@53a939c2a7534c438e8af81eb0ab4f82@9ec4c04175e44d5a9277b3369b8962bd@79dbf880007f406fab565e505ebe04c5@ca9187e8bf03400b8ed05e358e0ed899@3fe7f2c7801c42209024b9ca4ffe9022@f31cafcbdcdf4942878f7b5e30255f38@5bf7e52a61dc48be82e72332667b38df@fa27da8a356644a99d5d8df1a1bc96c2@4e7c62f166d448629a794a1545c54562@b6a11b415f774250b47bb7cb02b9e957@a7da5fa44b544f7dad79cbe864f6fd5e@6c482d1189ad409bb6a5d6bfb1f20cae@1b1ea71eb5eb434f9890780bc74c624a@94e34aa6098c47b489fbe724f0ada1d7@3234d622d13b490a82d68f08058b1d31@8d758f4c82d54352a7a57456384fc518@d2add22834b44cc1b10ee2fe7bb88a5c@c0d11f349d0f4b388400cceefd9f01ab@5de2807428484627bba6fd1435281098@297669d4fcb74a5587f95154a2e3fa51@0476fff2aeab4fb99ce20206d4df1bc8@626769adf9064934b489423891df037d',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  '## 东东农场：
f0c316e600554256bde4ac44860c0e0c@53a939c2a7534c438e8af81eb0ab4f82@9ec4c04175e44d5a9277b3369b8962bd@79dbf880007f406fab565e505ebe04c5@ca9187e8bf03400b8ed05e358e0ed899@3fe7f2c7801c42209024b9ca4ffe9022@f31cafcbdcdf4942878f7b5e30255f38@5bf7e52a61dc48be82e72332667b38df@fa27da8a356644a99d5d8df1a1bc96c2@4e7c62f166d448629a794a1545c54562@b6a11b415f774250b47bb7cb02b9e957@a7da5fa44b544f7dad79cbe864f6fd5e@6c482d1189ad409bb6a5d6bfb1f20cae@1b1ea71eb5eb434f9890780bc74c624a@94e34aa6098c47b489fbe724f0ada1d7@3234d622d13b490a82d68f08058b1d31@8d758f4c82d54352a7a57456384fc518@d2add22834b44cc1b10ee2fe7bb88a5c@c0d11f349d0f4b388400cceefd9f01ab@5de2807428484627bba6fd1435281098@297669d4fcb74a5587f95154a2e3fa51@0476fff2aeab4fb99ce20206d4df1bc8@626769adf9064934b489423891df037d',
]
// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
