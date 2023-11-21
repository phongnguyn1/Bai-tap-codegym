function timkitu(charToFind) {
    let count = 0;
array= [0,1,2,3,4,5,6]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === charToFind) {
            count++;
        }
    }

    return count > 0 ? count : -1;
}
