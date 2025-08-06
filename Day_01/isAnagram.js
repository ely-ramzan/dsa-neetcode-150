// test cases:
const s = "anagram";
const t = "nagaram";
// const s = "rat";
// const t = "cat";


// function: SC = O(1), TC = O(n)
function isAnagram (s,t) {
    s = s.toLowerCase().trim();
    t = t.toLowerCase().trim();

    if(s.length !== t.length){
        return false;
    }
    
    const obj = {};

    for (let i of s) {
        if(!obj[i]){
            obj[i] = 1;
            continue;
        }
        obj[i]++;  
    }
    
    for (let i of t) {
        if(!obj[i]){
            return false;
        }
        obj[i] --;
        if(obj[i] < 0){
            return false
        }
    }

    return true;
}

console.log(isAnagram(s,t));
console.log();
 