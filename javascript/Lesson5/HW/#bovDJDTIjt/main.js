const displayUsers = users => {
    users.forEach(u => {
        document.body.innerHTML += `<div>ID: ${u.id}, Name: ${u.name}, Age: ${u.age}</div>`;
    });
};
displayUsers([
    { id: 1, name: "olya", age: 25 },
    { id: 2, name: "ivan", age: 30 }
]);