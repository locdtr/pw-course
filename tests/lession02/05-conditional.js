const { match } = require("assert");

function getRandomNhietDo(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const nhietDo = getRandomNhietDo(15,30);

if (nhietDo < 25)
    console.log("Troi lanh");

if (nhietDo > 25)
    console.log("Troi nong")
console.log(nhietDo);