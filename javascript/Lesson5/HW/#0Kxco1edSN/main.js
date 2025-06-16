const createUlWithManyLi = (text, count) => {
    let li = '';
    for (let i = 0; i < count; i++) li += `<li>${text}</li>`;
    document.body.innerHTML += `<ul>${li}</ul>`;
};
createUlWithManyLi("text", 12);