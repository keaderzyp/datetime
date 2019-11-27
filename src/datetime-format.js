const regObj = {
	year : [`YYYY`,`YYY`,`YY`,`Y`],
	month : [`MM`,`M`],
	date : [`DD`,`D`],
	hour : [`HH24`,`HH12`,`HH`,`H24`,`H12`,`H`],
	minute : [`mm`,`mi`,`m`],
	second : [`ss`,`s`],
	week : [`WW`,`W`],
	APM:[`APM`]
};
class DateTimeFormat{
	constructor(options) {
		this.checkOptions(options)
	}
	/**
	 * @param {Json} options 
	 * datetime
	 * format
	 * showAPM
	 */
	checkOptions(options){
		if(options){
			this.options = {
				datetime:options.datetime||new Date(),
				format:options.format||`YYYY-MM-DD HH24:mm:ss`,
			};
		}else{
			this.options = {
				datetime:new Date(),
				format:`YYYY-MM-DD HH24:mm:ss`,
			};
		}
	}
	getDateObject(){
		let datetime;
		if(this.options.datetime instanceof Date){
			datetime = this.options.datetime;
		}else if(this.options.datetime instanceof Number){
			datetime = new Date(this.datetime);
		}
		let hour12 = datetime.getHours()>12?datetime.getHours()-12:datetime.getHours();
		return  {
			year:datetime.getFullYear(),
			year2:datetime.getFullYear().toString().substring(2),
			month:datetime.getMonth()+1,
			month2:((datetime.getMonth()+1)+'').length>1?((datetime.getMonth()+1)+''):('0'+((datetime.getMonth()+1)+'')),
			date:datetime.getDate(),
			date2:datetime.getDate().toString().length>1?datetime.getDate().toString():('0'+datetime.getDate().toString()),
			week:datetime.getDay(),
			week2:datetime.getDay().toString().length>1?datetime.getDay().toString():('0'+datetime.getDay().toString()),
			hour:datetime.getHours(),
			hour12:hour12,
			hour2:datetime.getHours().toString().length>1?datetime.getHours().toString():('0'+datetime.getHours().toString()),
			hour122:hour12.toString().length>1?hour12.toString():('0'+hour12.toString()),
			minute:datetime.getMinutes(),
			minute2:datetime.getMinutes().toString().length>1?datetime.getMinutes().toString():('0'+datetime.getMinutes().toString()),
			second:datetime.getSeconds(),
			second2:datetime.getSeconds().toString().length>1?datetime.getSeconds().toString():('0'+datetime.getSeconds().toString()),
			APM:datetime.getHours()>=12?'PM':'AM',
			time:datetime.getTime(),
			dateObject:datetime
		}
	}
	getDate(formatString){
		return this.formatDate(formatString);
	}
	formatDate(formatString){
		if(formatString){
			this.options.format = formatString;
		}
		let date = this.getDateObject();
		this.formatDateTime = this.options.format;
		for(let key in regObj){
			for(let item of regObj[key]){
				let reg = new RegExp(item,'g');
				if(this.options.format.match(reg)){
					if(item=='HH12'||item=='H12'){
						this.formatDateTime = this.formatDateTime.replace(reg,date[key+(item.length==4?'122':'12')])
					}else{
						this.formatDateTime = this.formatDateTime.replace(reg,date[key+(item.length==2?'2':'')])
					}
					break;
				}
			}
		}
		return this.formatDateTime;
	}
}
try{
	window.DateTimeFormat = DateTimeFormat;
}catch(e){
	//TODO handle the exception
	
}
module.exports = DateTimeFormat;