//Return the number of total permutations of the provided string that don't have repeated 
//consecutive letters. Assume that all characters in the provided string are each unique.

//For example, aab should return 2 because it has 6 total permutations 
//(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str){
    let permutations = [];
    let permutation = [];
    let used = [];
    let count = 0;
    let strArr = str.split('');
    permute(strArr, used, permutation, permutations, count);
    return permutations.length;
}

function permute(strArr, used, permutation, permutations, count){
    if (count === strArr.length){
        let str = permutation.join('');
        if (str.match(/(.)\1/g) === null){
            permutations.push(str);
        }
        return;
    }
    for (let i = 0; i < strArr.length; i++){
        if (!used[i]){
            used[i] = true;
            permutation.push(strArr[i]);
            permute(strArr, used, permutation, permutations, count + 1);
            used[i] = false;
            permutation.pop();
        }
    }
}

console.log(permAlone("aab"))