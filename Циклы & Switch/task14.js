const str = "hello world";
let count = 0;
for (const ch of str) {
    if ("aeiou".includes(ch.toLowerCase())) count++;
}
console.log(count); 
