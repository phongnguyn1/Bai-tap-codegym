function isPrime(num) {
    if (num < 2) {
        return false;
    }else if (num > 2) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }else {
        return true;
    }
}
let totalPrimeSum = 0;
for (let i = 2; i < 500; i++) {
    if (isPrime(i)) {
        totalPrimeSum += i;
    }
}