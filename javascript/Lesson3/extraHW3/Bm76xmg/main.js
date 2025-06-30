let arr = [
    "hello",
    42,
    true,
    null,
    undefined,
    {name: "Anna"},
    [1, 2, 3],
    function() { return "I'm a function"; },
    false,
    3.14
];

for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    console.log(arrElement)
}
