function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}]),
    new Client(2, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}, {title: `product3`, price: 43211}]),
    new Client(3, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}, {title: `product3`, price: 43211}, {title: `product4`, price: 43211}, {title: `product5`, price: 43211}]),
    new Client(4, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}]),
    new Client(5, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345}]),
    new Client(6, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}, {title: `product3`, price: 43211}]),
    new Client(7, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}]),
    new Client(8, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}, {title: `product3`, price: 43211}, {title: `product4`, price: 43211}]),
    new Client(9, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}]),
    new Client(10, `name1`, `surname1`, `email1@gmail.com`, +380966666666, [{title: `product1`, price: 12345},{title: `product2`, price: 43211}, {title: `product2`, price: 43211}]),


];
console.log(clients)