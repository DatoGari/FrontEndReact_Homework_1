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

const user = {
    id: "01024019658",
    firstName: "David",
    lastName: "Gharibashvili",
    age: 55
}

// task 2

function duplicateUser(user){
    const newUser = {}
    for (let u in user){
        newUser[u] = user[u]
    }
    return newUser
}

console.log(duplicateUser(user))

// task 3

let user1 = 0
let user2 = 0

while (user1 !== 3 && user2 !== 3){
    user1 = Math.floor(Math.random() * 6) + 1
    user2 = Math.floor(Math.random() * 6) + 1
}

if (user1 == 3) {
    console.log ("user1 is the winner")
} else {
    console.log ("user2 is the winner")
}

