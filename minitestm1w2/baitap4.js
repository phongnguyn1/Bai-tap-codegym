function findSnt (array) {
    let daysonguyento=[] ;
    array.forEach((num)=> {
        let b=0;
        for (let i = 0; i <=num ; i++) {
            if (num%i==0);{
                b++
            }
        }
        if (b===2)
            daysonguyento.push (num)

    })
    console.log(daysonguyento);
}
function Tongsonguyento(limit) {
    let sum = 0;
    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

const limit = 500;
const result = Tongsonguyento(limit);

console.log(`Tong so nguyen to den 500 la" ${limit}: ${result}`);