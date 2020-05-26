 # p-datetime
一款日期格式化工具

> 引入介绍（Introduction）

p-datetime主要用于日期格式化

```javascript
npm i p-datetime
```
    
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<script src="../lib/datetime-format.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			let d = new DateTimeFormat();
			console.log(d.getDate(`YY-MM-DD APM HH12:m:s W `))
		</script>
	</body>
</html>
```  
```javascript
  import DateTimeFormat from 'p-datetime';
  let d = new DateTimeFormat({
	  datetime:new Date('2018-01-01'),
  });
  d.getDate(`YYYY-MM-DD HH12:mm:ss APM `)
  
  let d1 = new DateTimeFormat({
	  datetime:new Date(),
	  format:`YYYY-MM-DD HH12:mm:ss APM `
  });
  d1.getDate();
  let d2 = new DateTimeFormat();
  d1.getDate();
```

> 参数说明（Parameter description）

Introduction of constructor
| prop |  type|required|default|
|--|--|--|--|
| datetime |  Date||Number|false|new Date()|
| format |  String|false| YYYY-MM-DD HH:mm:ss |

Introduction of format
| prop |  type| info |
|--|--|--|
| YYYY |  String | year |
| YY |  String | year |
| MM |  String | month |
| M |  String | month |
| DD |  String | date |
| D |  String | date |
| HH |  String | hour |
| HH24 |  String | hour |
| HH12 |  String | hour |
| H |  String | hour |
| H24 |  String | hour |
| H12 |  String | hour |
| mm |  String | minute |
| mi |  String | minute |
| m |  String | minute |
| ss |  String | second |
| s |  String | second |
| WW |  String | week |
| W |  String | week |
| APM |  String | AP/PM |
