
	// Function for finding and returning
	// sum of digits of a number
	function sumDig(n)
	{
		let a = 0;
		while (n > 0)
		{
			a = a + n % 10;
			n = parseInt(n / 10, 10);
		}
		return a;
	}

	function isValidIMEI(n)
	{
        let number = n;
		// Converting the number into
		// String for finding length
		let s = n.toString();
		let len = s.length;

		if (len != 15)
			return false;

		let sum = 0;
		for(let i = len; i >= 1; i--)
		{
		let d = (n % 10);

		// Doubling every alternate digit
		if (i % 2 == 0)
			d = 2 * d;

		// Finding sum of the digits
		sum += sumDig(d);
		n = parseInt(n / 10, 10);
		}
        
          

		return (sum % 10 == 0,number);
	}


	// 15 digits cannot be stored
	// in 'int' data type
	let n = 490154203237518;

	if (isValidIMEI(n))
	 	console.log("Valid IMEI Code");
	 else
	 	console.log("Invalid IMEI Code");


module.exports={sumDig,isValidIMEI}