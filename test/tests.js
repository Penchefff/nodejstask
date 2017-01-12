var request			= require('request')
var assert			= require('assert')
var javascripttask	= require('../server/index.js')
var base_url		= 'http://localhost:8080/api/employees/all'
var api_url			= 'http://localhost:8080/api/employees/'


describe("Javascript app test", function() {
	describe("GET /", function() {
		
		it("returns status code 200", function() {
			request.get(base_url, function(error, response, body) {
				assert.equal(200, response.statusCode);
				done();
			});
			
		});
		
		it("returns full list", function(done) {
			request.get(base_url, function(error, response, body) {
				var body_json = JSON.parse(body);
				
				assert.equal(30, body_json.length);
				
				assert.equal(16,			body_json[15].id);
				assert.equal('male',		body_json[15].gender);
				assert.equal('Dr.',			body_json[15].title);
				assert.equal('Harley',		body_json[15].firstname);
				assert.equal('Andrews',		body_json[15].surname);
				assert.equal('18/02/1987',	body_json[15].birthdate);
				assert.equal(28,			body_json[15].age);
				assert.equal(73900,			body_json[15].salary);
				assert.equal(50187.7,		body_json[15].takehome);
				assert.equal(18963,			body_json[15].incometax);
				assert.equal(4749.3,		body_json[15].nationains);
				
				done();
			});
		});
		
		it("returns one person by firstname and surname", function(done) {
			request.get(api_url + '?firstname=TOm&surname=roberts', function(error, response, body) {
				var body_json = JSON.parse(body);
				
				assert.equal(1,				body_json.id);
				assert.equal('male',		body_json.gender);
				assert.equal('Mr.',			body_json.title);
				assert.equal('Tom',			body_json.firstname);
				assert.equal('Roberts',		body_json.surname);
				assert.equal('21/04/1986',	body_json.birthdate);
				assert.equal(29,			body_json.age);
				assert.equal(59783,			body_json.salary);
				assert.equal(41999.84,		body_json.takehome);
				assert.equal(13316.2,		body_json.incometax);
				assert.equal(4466.96,		body_json.nationains);
				done();
			});
		});
		
		it("returns two persons by firstname only", function(done) {
			request.get(api_url + '?firstname=TOm', function(error, response, body) {
				var body_json = JSON.parse(body);
				assert.equal(2,				body_json.length);
				assert.equal(1,				body_json[0].id);
				assert.equal('male',		body_json[0].gender);
				assert.equal('Mr.',			body_json[0].title);
				assert.equal('Tom',			body_json[0].firstname);
				assert.equal('Roberts',		body_json[0].surname);
				assert.equal('21/04/1986',	body_json[0].birthdate);
				assert.equal(29,			body_json[0].age);
				assert.equal(59783,			body_json[0].salary);
				assert.equal(41999.84,		body_json[0].takehome);
				assert.equal(13316.2,		body_json[0].incometax);
				assert.equal(4466.96,		body_json[0].nationains);
				assert.equal(7,				body_json[1].id);
				assert.equal('male',		body_json[1].gender);
				assert.equal('Mr.',			body_json[1].title);
				assert.equal('Tom',			body_json[1].firstname);
				assert.equal('Carey',		body_json[1].surname);
				assert.equal('03/06/1994',	body_json[1].birthdate);
				assert.equal(21,			body_json[1].age);
				assert.equal(75316,			body_json[1].salary);
				assert.equal(51008.98,		body_json[1].takehome);
				assert.equal(19529.4,		body_json[1].incometax);
				assert.equal(4777.62,		body_json[1].nationains);
				
				done();
			});
		});
		
		it("returns one persons by surname only", function(done) {
			request.get(api_url + '?surname=Bryan', function(error, response, body) {
				var body_json = JSON.parse(body);
				assert.equal(1,				body_json.length);
				assert.equal(24,			body_json[0].id);
				assert.equal('female',		body_json[0].gender);
				assert.equal('Mrs.',		body_json[0].title);
				assert.equal('Rosie',		body_json[0].firstname);
				assert.equal('Bryan',		body_json[0].surname);
				assert.equal('04/02/1968',	body_json[0].birthdate);
				assert.equal(47,			body_json[0].age);
				assert.equal(34702,			body_json[0].salary);
				assert.equal(26684.56,		body_json[0].takehome);
				assert.equal(4820.4,		body_json[0].incometax);
				assert.equal(3197.04,		body_json[0].nationains);
				
				done();
			});
		});
		
		it("test no pramas api", function(done) {
			request.get(api_url, function(error, response, body) {
				assert.equal("please provide complete search terms", body);
				javascripttask.closeServer();
				done();
			});
		});
	});
});



