const DateTimeFormat = require('../index');
let dateTimeFormat = new DateTimeFormat({
	datetime:new Date(),
	showAPM:true
});
console.log(dateTimeFormat.getDate('YYY年MM月DD日 H-mi:ss 星期W '))