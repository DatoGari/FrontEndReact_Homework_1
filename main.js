// task 1

const users = [{name: 'Temo', age: 25}, 
            {name: 'Lasha', age: 21},
            {name: 'Ana', age: 28}]


function youngestUser (users) {
    let age = 999
    let name = ""
    for (let user of users) {
        if (user.age < age){
            age = user.age
            name = user.name
        }
    }
    return name
}

console.log(youngestUser(users))
