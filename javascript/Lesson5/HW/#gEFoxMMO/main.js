const buildListFromPrimitives = arr => {
    let li = '';
    arr.forEach(item => li += `<li>${item}</li>`);
    document.body.innerHTML += `<ul>${li}</ul>`;
};
buildListFromPrimitives([1, "text", true]);