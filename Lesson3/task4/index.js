console.log('false || true:',false || true);
console.log('false || true || false:', false || true || false);
console.log('false || false || false:',false || false || false);

console.log('false && true:', false && true);
console.log('false && true && false:',false && true && false);
console.log('true && true && true:',true && true && true);

console.log("'text' || false:",'text' || false);
console.log("true || 'text':",true || 'text');
console.log("undefined || null || 0 || '' || null:",undefined || null || 0 || '' || null);

const customAmount = null;
const defaultAmount = 17;
console.log('customAmount = null');
console.log('defaultAmount = 17');
console.log('amount = customAmount || defaultAmount')
console.log('customAmount || defaultAmount:',customAmount || defaultAmount);

console.log("'text && false':",'text' && false);
console.log("true && 'text':",true && 'text');
console.log("undefined && null && 0 && '' && null:",undefined && null && 0 && '' && null);

console.log('!true:',!true);
console.log('!false:',!false);
console.log("!'text':",!'text');
console.log("!!'text':",!!'text');