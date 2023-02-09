export function RandomNumber(totalDigit) {
    const number = Math.floor(Math.random() * totalDigit + 1);

    return number;
}