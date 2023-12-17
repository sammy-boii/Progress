let colors = ['orange', 'yellow', 'blue', 'white'];
let randomIndex = Math.floor(Math.random() * colors.lenght);
let randomColor = colors[randomIndex];
switch (randomColor) {
    case 'orange':
        console.log('it is orange');
        break;
    case 'blue':
        console.log('it is blue');
    case 'yellow':
        console.log('it is orange');
        break;
    case 'white':
        console.log('it is orange');
        break;
    case 'orange':
        console.log('it is orange');
        break;
    default:
        console.log('no color found');
}

// if there were no break it would always execute the last case

// Same using if statement

let Colors = ['orange', 'yellow', 'blue', 'white'];
let RandomIndex = Math.floor(Math.random() * Colors.length);
let RandomColor = colors[randomIndex];

if (RandomColor === 'orange') {
    console.log('It is orange');
}
else if (RandomColor === 'blue') {
    console.log('It is blue');
} else if (RandomColor === 'yellow') {
    console.log('It is yellow');
} else if (RandomColor === 'white') {
    console.log('It is white');
}
else {
    console.log('No color found');
}

/*
Math.random() generates random number BETWEEN 0 (inclusive) and 1 (exclusive) so it can be 0.0000133 0.9992341
that multiply is way to cleaver bruh cuz highest number u can get is 0.9999*4 which results in 3 and max index is 3
Math.floor basically rounds down... 
1.23 => 1
0.91 => 0
4.69 => 4
2.22 => 2

break skips prematurely terminates the whole loop. So even if there are more iterations left, it says SIKE!!
continue skips the current loop and skips over to the next one

*/