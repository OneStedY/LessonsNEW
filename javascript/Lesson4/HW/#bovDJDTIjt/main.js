function foobar(users){
    for (const user of users){
        document.write(`
       <div> ${user.id} ${user.name} ${user.age} </div>
        `)
    }
}
foobar([
    {id: 1, name: `guest1`, age: 13},
    {id: 2, name: `guest2`, age: 12},
    {id: 3, name: `guest3`, age: 11},
    {id: 4, name: `guest4`, age: 24},
    {id: 5, name: `guest5`, age: 34},
    {id: 6, name: `guest6`, age: 12}
])