/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  'aet6q4e5alypjreeykgsecot3a@4npkonnsy7xi2d6sdofyjc75n7xt33ib6cvhcqa@u5lnx42k5ifivayoq5ooxt6ck4g7ayyor3jl2si@wlqdkn6wuvruj33ftjztcao254mmc2adzz3ofoi@f5pavyxxlph5pwppnl2b7gospwfsbbcskq6haca@mlrdw3aw26j3w3elix5n7e4eh3awtd3wjuupada@olmijoxgmjuty2sg2plgxsq6rtpl3crqtwwf2gi@bajjwuayotvosmi4s4kyqdocl4wwvdmn5ve3r5y@cj44dzjk5jml5p5jw7detmrkleniancbhxyjdti@u72q4vdn3zes2om5pgkggpeciavpxdv2su6trly@wcddlube7jb6mcfzvu3rvf6kegjofzxlt3x5yya@mlrdw3aw26j3x6244lmukbbvael3uekukpxmt7a@olmijoxgmjutzd536z6nepud7rkilgin6oqiwzy@qfynjx7wcwskby4bhns2ykpdkx5tlpfgq3hk2va@e7lhibzb3zek2ufj2h7u7vobwpe6deinytz375y@w7p5s73wnmvwzoxb5kecg2gfyo4yunfqzy5kfpa@4npkonnsy7xi2uojyo23b3bzogf7u2nheaauiuq@mlrdw3aw26j3wyuoksn45wg3nl3xjv3lsevqtsq@olmijoxgmjutyk5guxssnvz7iys7iekcjzspufy@c6jlzdwwqrf4ovuisjgu5w77ky3h7wlwy7o5jii@dklrs6jtjc3zyw6w5x6bsfidty3h7wlwy7o5jii@fn5sjpg5zdejmdbrpiwbdnnjsgpunf4izhg7qxy
',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  'aet6q4e5alypjreeykgsecot3a@4npkonnsy7xi2d6sdofyjc75n7xt33ib6cvhcqa@u5lnx42k5ifivayoq5ooxt6ck4g7ayyor3jl2si@wlqdkn6wuvruj33ftjztcao254mmc2adzz3ofoi@f5pavyxxlph5pwppnl2b7gospwfsbbcskq6haca@mlrdw3aw26j3w3elix5n7e4eh3awtd3wjuupada@olmijoxgmjuty2sg2plgxsq6rtpl3crqtwwf2gi@bajjwuayotvosmi4s4kyqdocl4wwvdmn5ve3r5y@cj44dzjk5jml5p5jw7detmrkleniancbhxyjdti@u72q4vdn3zes2om5pgkggpeciavpxdv2su6trly@wcddlube7jb6mcfzvu3rvf6kegjofzxlt3x5yya@mlrdw3aw26j3x6244lmukbbvael3uekukpxmt7a@olmijoxgmjutzd536z6nepud7rkilgin6oqiwzy@qfynjx7wcwskby4bhns2ykpdkx5tlpfgq3hk2va@e7lhibzb3zek2ufj2h7u7vobwpe6deinytz375y@w7p5s73wnmvwzoxb5kecg2gfyo4yunfqzy5kfpa@4npkonnsy7xi2uojyo23b3bzogf7u2nheaauiuq@mlrdw3aw26j3wyuoksn45wg3nl3xjv3lsevqtsq@olmijoxgmjutyk5guxssnvz7iys7iekcjzspufy@c6jlzdwwqrf4ovuisjgu5w77ky3h7wlwy7o5jii@dklrs6jtjc3zyw6w5x6bsfidty3h7wlwy7o5jii@fn5sjpg5zdejmdbrpiwbdnnjsgpunf4izhg7qxy
',
]
// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
