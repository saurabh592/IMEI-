 const express = require('express');
 const router = express.Router();
 //const {sumDig,isValidIMEI} = require('./check');

 router.get("/",(req,res)=>{
   
     res.render('home');
     
 })
 router.post('/',(req,res)=>{
     console.log(req.body)
     number = req.body.number;

	let n = number;

	if (isValidIMEI(n)){
	 	console.log("Valid IMEI Code");
         res.send("<h1> Valid IMEI Code</h1>")    
    }
	 else{
	 	console.log("Invalid IMEI Code");
         res.send("<h1> Invalid IMEI Code</h1>")    
     }

 })
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

 

 module.exports = router;