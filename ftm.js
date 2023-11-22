function metersToFeet(meters) {
    let feetPerMeter = 3.28084;
    return meters * feetPerMeter;
}

let lengthInM = 5;
let lengthInFt = metersToFeet(lengthInM);

console.log(`${lengthInM} so met la ${lengthInFt} feet.`);