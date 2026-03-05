const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let x;
do {
    readline.question('Введи число >10: ', (input) => {
        x = parseInt(input);
        if (x <= 10) console.log('Попробуй снова');
        else {
            console.log('Успех: ' + x);
            readline.close();
        }
    });
} while (x <= 10); 
