function SmartDate(date) {

	this._workDate = new Date(date);										// Variable for date created

	this.add = function(value, symbol) {									// Function for adding days or months added	
		if(symbol == "d")													// Checking if user wants to add days
		{
			this._workDate.setDate(this._workDate.getDate() + value);		// Adds days
			return this._workDate;											// Returns value of date with new day
		}
		else if(symbol == "m")												// Checking if user wants to add months
		{
			this._workDate.setMonth(this._workDate.getMonth() + value);		// Adds months
			return this._workDate;											// Returns new date with added months
		}
	}

	this.substract = function(hours) {										// Function for subtraction
		if(hours > 0)														// Checks if amount of hours more than 0
		{	
			this._workDate.setHours(this._workDate.getHours() - hours);		// Takes these hours
			return this._workDate;											// Returns new value of date with taken hours
		}
		else 
		{
			return this._workDate.getDate() - this._workDate.getDate();		// Or subtract itself
		}

	}
	this.toDate = function() {												// Function for returning value of date
		return this._workDate;												// Returns current value of date
	}
}
var a = new SmartDate("2008,7,7");
alert(a.toDate());