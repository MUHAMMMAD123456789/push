// let users = ['javoxir', 'munir' , 'jago', 'Jahonbek', 'shohruh']

// console.log(
//     Math.round(Math.random() * 5)
// );




// let users = ['muhammadali', 'javoxir', 'munir' , 'jago', 'Jahonbek', 'shohruh']

// let idx = Math.round(Math.random() * 5)

// console.log(
//     users[idx] + "goodboy"
// );


// let users = ['muhammadali', 'javoxir', 'munir' , 'jago', 'Jahonbek', 'shohruh'];

// let name = prompt("Напиши имя кого хочешь удалить")

// let idx = users.indexOf(name)

// users.splice(idx,1)






let arr = prompt("Which name should I remove?").toLowerCase().trim()

let arrOne = ['muhammadali', 'javoxir', 'munir' , 'jago', 'jahonbek', 'shohruh'];


let index = arrOne.indexOf(arr)

if(index != -1) {
    arrOne.splice(index , 1)
} else {
    alert('not found')
}

console.log(arrOne);











