// Code your solutions in this file


function writeCards(name, event) {
    const newArray = []
    for (let i = 0; i < name.length; i++) {
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}







function countDown() {
    let countDowns = 10;
    while (countDowns <= 10 && countDowns >= 0) {
      console.log(countDowns--);
    }
}