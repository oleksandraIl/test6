const { faker } = require('@faker-js/faker');

let arr = Array.from (Array(10))
arr = arr.map((i) => faker.person.firstName())

console.table(arr)

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.table(bubbleSort(arr));
