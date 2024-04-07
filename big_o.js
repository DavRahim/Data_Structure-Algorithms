
// const sumAll = (n) => {
//     let total = 0;
//     for (let i = 0; i <= n; i++) {
//         total += i
//     }
//     return total
// }

const sumAll = (n) => {
    return n * (n + 1) / 2
}

// console.log(sumAll(5));

const multipleArray = (n) => {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(i, j);

        }

    }
}

multipleArray(3)

