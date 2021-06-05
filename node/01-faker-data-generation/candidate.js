var fakerbr = require('faker-br');
var faker = require('faker')
var fs = require('fs')

let data = []
let count = 0
while (count < 120000) {
  let cpf = fakerbr.br.cpf()
  let name = faker.name.firstName()
  name,
  // email,
  // cpf,
  // phone,
  // gender,
  // birthday,
  // country,
  // city,
  // neighborhood,
  // street,
  // homeNumber,
  // complement,
  // zipCode,
  // latitude,
  // longitude
  // skills,


  data.push({
    name,
    // email,
    // cpf,
    // phone,
    // gender,
    // birthday,
    // country,
    // city,
    // neighborhood,
    // street,
    // homeNumber,
    // complement,
    // zipCode,
    // latitude,
    // longitude
    // skills,
  })
  count ++
}

fs.writeFile('user.json', JSON.stringify(data), (err) => {
  if (err) {
      throw err;
  }
  console.log("JSON data is saved.");
});