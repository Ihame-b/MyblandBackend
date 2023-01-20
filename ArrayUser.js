let users= [{name: 'ihame1', nationality: 'rwanda', gender: 'male'},{name: 'ihame2', nationality: 'rwanda', gender: 'male'}]

const add = (userObj) =>{
    users.push(userObj)
    return `user ${userObj.firstName ?? userObj.name} has been added`;
}

const getOne =(id) =>{
    const user =typeof id != "string"
    ? users[id]
    :users.find(one => one.name == id)
}

const getAll = () =>{
    users.forEach((user, i) => console.log(`\nuser ${i}: ${user.firstName ?? user.name}`))
    return users
}

const deleteOne = (name) => {
    const index = users.findIndex(one => one.firstName == name);
    users.splice(index, 1);
    return `user with id ${index} deleted`
}

const deleteAll = () => users.splice(0);

const update =(id, updateObj) =>{
    let target =users[id];
    Object.assign(target, updateObj)
    `user with is ${id} updated`
}

// console.log(add({name: 'ihame', nationality: 'rwanda', gender: 'male'}))
console.log(getOne(0))
console.log(getAll(0))
