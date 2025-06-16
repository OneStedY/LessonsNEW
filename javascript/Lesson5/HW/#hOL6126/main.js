const createUlWithLi = text => {
    document.body.innerHTML += `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
};
createUlWithLi(`test`)