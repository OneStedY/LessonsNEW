function User(id, name, surname , email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let users = [
    new User(`1`, `name1`, `surname1`, `email1`, `12345`),
    new User(`2`, `name1`, `surname1`, `email1`, `12345`),
    new User(`3`, `name1`, `surname1`, `email1`, `12345`),
    new User(`4`, `name1`, `surname1`, `email1`, `12345`),
    new User(`5`, `name1`, `surname1`, `email1`, `12345`),
    new User(`6`, `name1`, `surname1`, `email1`, `12345`),
    new User(`7`, `name1`, `surname1`, `email1`, `12345`),
    new User(`8`, `name1`, `surname1`, `email1`, `12345`),
    new User(`9`, `name1`, `surname1`, `email1`, `12345`),
    new User(`10`, `name1`, `surname1`, `email1`, `12345`)
];
function filterFunc(user) {
    return user.id%2 === 0;
}
const filterUsers = users.filter(filterFunc)
console.log(filterUsers)