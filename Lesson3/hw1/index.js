const defaultUserName = 'anonymus';
console.log("defaultUserName = 'anonymus'");
const anotherUser = null;
console.log('anotherUser = null');
console.log('activeUser = anotherUser || defaultUserName:',activeUser = anotherUser || defaultUserName);

const isAdmin = false;
console.log('isAdmin = false');
const userName = 'Jone';
console.log("userName = 'Jone'");
const isLoggedin = Boolean(userName);
console.log("isLoggedin = Boolean(userName)");
console.log('hasAccess = isAdmin || isLoggedin:',hasAccess = isAdmin || isLoggedin);

const message = 'text';
console.log("message = 'text'");
const anotherMessage = 'text as well';
console.log("anotherMessage = 'text as well'");
console.log("isTruthy = message <= anotherMessage:",isTruthy = message <= anotherMessage);

console.log('isFalsy = ! isLoggedin:', isFalsy = ! isLoggedin);

console.log("isNotTrue = typeof message === 'number' :",isNotTrue = typeof message === 'number');
 
console.log("isTrue = typeof message !== 'boolean':",isTrue = typeof message !== 'boolean');