if (true) { 
    console.log("I'm in:","I'm in");
}
if (false) { 
    console.log("I'm not in:","I'm not in");
}
if ('text') {
     console.log('Yes:','Yes')
    };
if (null) {
    console.log('Yes:','Yes');
}  else {
    console.log('Else:','Else');
}

const age = 18;
console.log('age = 18');
if (age < 16) {
    console.log('Too young:','Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready:','Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready:','Ready');
} else {
    console.log('Else:','Else');
}

const amount = 16;
console.log('amount = 16');
const result = amount > 17 ? 'full' : 'empty';
console.log("result = amount > 17 ? 'full' : 'empty':","result = amount > 17 ? 'full' : 'empty'");