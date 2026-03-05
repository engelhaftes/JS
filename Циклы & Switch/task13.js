const arr = [10, 20, 30];
console.log('for...of (значения):');
for (const val of arr) console.log(val); 

console.log('for...in (ключи/индексы):');
for (const key in arr) console.log(key, arr[key]);
