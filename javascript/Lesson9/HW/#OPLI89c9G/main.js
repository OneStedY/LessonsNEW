const arr = [`Main`,`Products`,`About us`,`Contacts`]
const ulList = document.createElement(`ul`);
ulList.classList.add(`menu`);
document.body.appendChild(ulList);
for (const item of arr) {
    const li = document.createElement(`li`);
    li.innerText = item;
    ulList.appendChild(li);
}