function SmartDate(day, hour, month) {
	this.setDate(day);
	this.setHours(hour);
	this.setMonth(month);
}

SmartDate.prototype.add = function(day, symbol) {
	if(symbol == "d")
	{
		t2 = this.getTime + 15;
		return parseInt(t2/(24*3600*1000));
	}
	else if(symbol == "m")
	{
		var dY = this.getFullYear();
		var dM = this.getMonth();
		return (dM+12*dY)+(2+12*dY);
	}
}

SmartDate.prototype.substract = function() {

}

SmartDate.prototype.toDate = function() {
	var obj = {
		day: day,
		hour: hour,
		month: month
	};
	return obj;
}