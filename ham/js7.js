function timkitu (charToFind) {
    let count = 0;
    let array= ["0","1","2","3","4","5","6"]
    for (let i = 0; i < array.length; i++) {
        if (array[i] === charToFind) {
            count++;
        }
    }

    return count > 0 ? count : -1;
}
console.log( timkitu ("1"))
