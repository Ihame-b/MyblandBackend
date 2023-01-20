
//// using file
const { appendFile, createReadStream, readFile } = require('fs');
const readline = require('readline')
let users = 
[{"name":"Alpha","nationality":"DRC","gender":"male"},
{"name":"Simon Peter","nationality":"DRC","gender":"male"},
{"name":"Abdoul Khaliq","nationality":"DRC","gender":"male"}];



const add = (userObj) => {
//   users.push(userObj);
  appendFile('./users.txt', `\n${JSON.stringify(userObj)}`, (e) => {
    if (e) console.log(e);
    return console.log(`user ${userObj.name ?? userObj.firstName} added`);
  })
  return `User ${userObj.firstName ?? userObj.name} has been added`;
}

const getOne = (id) => {
  // const user = typeof id != "string"
  //   ? users[id]
  //   : users.find(one => one.name == id);
  const interface = readline.createInterface(
    { input: createReadStream('./users.txt') }
  )
  let lineNumber = 0;
  const user = interface.on('line', (line) => {
    if (lineNumber < id) lineNumber++
    else  return JSON.stringify(line);
  })
  return `user ${user} found`

}

const getAll = () => {
  const allUsers = readFile('./users.txt', 'utf8', (err, text) => {
    if (err) console.log(err);
    console.log(text);;
  })
  return allUsers;
}

const deleteOne = (name) => {
  const index = users.findIndex(one => one.firstName == name);
  users.splice(index, 1);
  return `user with id ${index} deleted`
}

const deleteAll = () => users.splice(0);

const update = (id, updateObj) => {
  let target = users[id];
  Object.assign(target, updateObj);
  `user with id ${id} updated`;
}

console.log(add( { name: 'Abdoul Khaliq2', nationality: 'DRC', gender: 'male' }));
console.log(add({ name: 'Abdoul Khaliq1', nationality: 'DRC', gender: 'male' }));

console.log(getOne(2));

console.log(getAll(0));

module.exports = {register: add, getOne, every: getAll, deleteAll, deleteOne, update}