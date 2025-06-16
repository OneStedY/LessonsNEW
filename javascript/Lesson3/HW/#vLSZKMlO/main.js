let listOfItems = [`html`, `css`, `javascript`, `mysql`, `mongodb`, `react`, `angular`, `node.js`];
for (const item of listOfItems){
    document.write(
    `
    <ul>

    <li> ${item} </li>
    

    </ul>
    
    `
    );
}