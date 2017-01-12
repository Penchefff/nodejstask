var express	= require('express');
var app		= express();

var data = [
			{ id: 1,  gender: 'male',	title: 'Mr.',	firstname: 'Tom',		surname: 'Roberts',		birthdate: '21/04/1986', age: 29, salary: 59783.00, takehome: 41999.84, incometax: 13316.20,	nationains: 4466.96 },
			{ id: 2,  gender: 'male',	title: 'Mr.',	firstname: 'Louis',		surname: 'Singh',		birthdate: '16/04/1979', age: 36, salary: 50739.00, takehome: 36754.32, incometax: 9698.60,		nationains: 4286.08 },
			{ id: 3,  gender: 'male',	title: 'Mr.',	firstname: 'Mohammed',	surname: 'John',		birthdate: '18/05/1992', age: 23, salary: 26389.00, takehome: 21032.00, incometax: 3157.80,		nationains: 2199.48 },
			{ id: 4,  gender: 'male',	title: 'Mr.',	firstname: 'Owen',		surname: 'Humphreys',	birthdate: '15/05/1972', age: 43, salary: 31336.00, takehome: 24395.68, incometax: 4147.20,		nationains: 2793.12 },
			{ id: 5,  gender: 'female',	title: 'Ms.',	firstname: 'Holly',		surname: 'Gregory',		birthdate: '31/01/1993', age: 22, salary: 60176.00, takehome: 42227.78, incometax: 13473.40,	nationains: 4474.82 },
			{ id: 6,  gender: 'female',	title: 'Mrs.',	firstname: 'Skye',		surname: 'Lawrence',	birthdate: '22/06/1979', age: 36, salary: 42552.00, takehome: 32005.86, incometax: 6423.80,		nationains: 4122.34 },
			{ id: 7,  gender: 'male',	title: 'Mr.',	firstname: 'Tom',		surname: 'Carey',		birthdate: '03/06/1994', age: 21, salary: 75316.00, takehome: 51008.98, incometax: 19529.40,	nationains: 4777.62 },
			{ id: 8,  gender: 'female',	title: 'Mrs.',	firstname: 'Katherine',	surname: 'Goddard',		birthdate: '20/07/1970', age: 45, salary: 16203.00, takehome: 14105.24, incometax: 1120.60,		nationains: 977.16 },
			{ id: 9,  gender: 'female',	title: 'Dr.',	firstname: 'Rachel',	surname: 'Lambert',		birthdate: '16/09/1987', age: 28, salary: 17542.00, takehome: 15015.76, incometax: 1388.40,		nationains: 1137.84 },
			{ id: 10, gender: 'male',	title: 'Mr.',	firstname: 'Daniel',	surname: 'Abbott',		birthdate: '08/12/1972', age: 43, salary: 31100.00, takehome: 24235.20, incometax: 4100.00,		nationains: 2764.80 },
			{ id: 11, gender: 'male',	title: 'Mr.',	firstname: 'Harley',	surname: 'Hobbs',		birthdate: '26/01/1988', age: 27, salary: 37086.00, takehome: 28305.68, incometax: 5297.20,		nationains: 3483.12 },
			{ id: 12, gender: 'female',	title: 'Ms.',	firstname: 'Abby',		surname: 'Hopkins',		birthdate: '02/07/1976', age: 39, salary: 82443.00, takehome: 55142.64, incometax: 22380.20,	nationains: 4920.16 },
			{ id: 13, gender: 'female',	title: 'Mrs.',	firstname: 'Evie',		surname: 'Horton',		birthdate: '08/01/1995', age: 21, salary: 86390.00, takehome: 57431.90, incometax: 23959.00,	nationains: 4999.10 },
			{ id: 14, gender: 'male',	title: 'Mr.',	firstname: 'Hayden',	surname: 'Turnbull',	birthdate: '15/05/1966', age: 49, salary: 22432.00, takehome: 18340.96, incometax: 2366.40,		nationains: 1724.64 },
			{ id: 15, gender: 'female',	title: 'Ms.',	firstname: 'Grace',		surname: 'Glover',		birthdate: '25/10/1996', age: 19, salary: 78828.00, takehome: 53045.94, incometax: 20934.20,	nationains: 4847.86 },
			{ id: 16, gender: 'male',	title: 'Dr.',	firstname: 'Harley',	surname: 'Andrews',		birthdate: '18/02/1987', age: 28, salary: 73900.00, takehome: 50187.70, incometax: 18963.00,	nationains: 4749.30 },
			{ id: 17, gender: 'female',	title: 'Ms.',	firstname: 'Victoria',	surname: 'Norris',		birthdate: '09/03/1975', age: 40, salary: 71432.00, takehome: 48756.26, incometax: 17975.80,	nationains: 4699.94 },
			{ id: 18, gender: 'female',	title: 'Ms.',	firstname: 'Amelia',	surname: 'Sullivan',	birthdate: '24/12/1964', age: 51, salary: 25067.00, takehome: 20132.76, incometax: 2893.40,		nationains: 2040.84 },
			{ id: 19, gender: 'female',	title: 'Mrs.',	firstname: 'Isabel',	surname: 'Dyer',		birthdate: '03/06/1996', age: 19, salary: 27904.00, takehome: 22061.92, incometax: 3460.80,		nationains: 2381.28 },
			{ id: 20, gender: 'male',	title: 'Mr.',	firstname: 'Liam',		surname: 'Gibbons',		birthdate: '12/03/1971', age: 44, salary: 76120.00, takehome: 51475.30, incometax: 19851.00,	nationains: 4793.70 },
			{ id: 21, gender: 'male',	title: 'Mr.',	firstname: 'Elliot',	surname: 'Herbert',		birthdate: '03/04/1991', age: 24, salary: 40092.00, takehome: 30349.76, incometax: 5898.40,		nationains: 3843.84 },
			{ id: 22, gender: 'male',	title: 'Mr.',	firstname: 'Gabriel',	surname: 'Sheppard',	birthdate: '14/07/1987', age: 28, salary: 50725.00, takehome: 36746.20, incometax: 9693.00,		nationains: 4285.80 },
			{ id: 23, gender: 'female',	title: 'Ms.',	firstname: 'Francesca',	surname: 'Patel',		birthdate: '12/10/1990', age: 25, salary: 25986.00, takehome: 20757.68, incometax: 3077.20,		nationains: 2151.12 },
			{ id: 24, gender: 'female',	title: 'Mrs.',	firstname: 'Rosie',		surname: 'Bryan',		birthdate: '04/02/1968', age: 47, salary: 34702.00, takehome: 26684.56, incometax: 4820.40,		nationains: 3197.04 },
			{ id: 25, gender: 'female',	title: 'Ms.',	firstname: 'Maddison',	surname: 'Bull',		birthdate: '29/10/1979', age: 36, salary: 66131.00, takehome: 45681.68, incometax: 15855.40,	nationains: 4593.92 },
			{ id: 26, gender: 'male',	title: 'Mr.',	firstname: 'Louis',		surname: 'Ford',		birthdate: '02/11/1967', age: 48, salary: 55963.00, takehome: 39784.24, incometax: 11788.20,	nationains: 4390.56 },
			{ id: 27, gender: 'male',	title: 'Dr.',	firstname: 'Logan',		surname: 'Ball',		birthdate: '14/12/1981', age: 34, salary: 78716.00, takehome: 52980.98, incometax: 20889.40,	nationains: 4845.62 },
			{ id: 28, gender: 'female',	title: 'Ms.',	firstname: 'Maya',		surname: 'Hancock',		birthdate: '30/12/1967', age: 48, salary: 35345.00, takehome: 27121.80, incometax: 4949.00,		nationains: 3274.20 },
			{ id: 29, gender: 'female',	title: 'Mrs.',	firstname: 'Niamh',		surname: 'Gibbs',		birthdate: '29/07/1987', age: 28, salary: 44479.00, takehome: 33123.52, incometax: 7194.60,		nationains: 4160.88 },
			{ id: 30, gender: 'male',	title: 'Mr.',	firstname: 'Morgan',	surname: 'Taylor',		birthdate: '16/09/1993', age: 22, salary: 63299.00, takehome: 44039.12, incometax: 14722.60,	nationains: 4537.28 }
		]

app.get('/', function(req, res)
{
	var firstname	= req.query.firstname
	var surname		= req.query.surname
	
	if(firstname && !surname)
	{
		res.send(data.filter(function(i) { return i.firstname.toLowerCase() == firstname.toLowerCase() }))
	}
	else if(surname && !firstname)
	{
		res.send(data.filter(function(i) { return i.surname.toLowerCase() == surname.toLowerCase() }))
	}
	else if(firstname && surname)
	{
		res.send(data.filter(function(i) { return (i.firstname.toLowerCase() == firstname.toLowerCase() && i.surname.toLowerCase() == surname.toLowerCase()) })[0])
		// res.send(data.filter((i) => (i.firstname.toLowerCase() == firstname.toLowerCase() && i.surname.toLowerCase() == surname.toLowerCase()))[0])
	}
	else
	{
		res.send('please provide complete search terms')
	}

});

app.get('/all', function(req, res)
{
	res.send(data);
});


module.exports = app;