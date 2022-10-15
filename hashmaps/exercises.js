function GroupAnagrams(strs){
    let sortedStr = strs.map(word => word.split('').sort().join(''));
    let hash = {};

    for(let i = 0; i < strs.length; i++){
        if(!hash[sortedStr[i]]){
            hash[sortedStr[i]] = [strs[i]]
            console.log(hash[sortedStr[i]])
        }else{
            hash[sortedStr[i]].push(strs[i])
        }
    }
    return hash;
}

GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
//output [["bat"],["tan","nat"],["eat","tea","ate"]]



function FindIntersection(arr1, arr2){
    //assume the length of the arrays is the same
    
    let largeArray;
    let smallArray;
    let hashTable = {};
    let result = [];

    if(arr1.length > arr2.length){
        largeArray = arr1;
        smallArray = arr2;
    }else{
        largeArray = arr2;
        smallArray = arr1;
    }

    //store all the items from largeArray inside the hashTable
    for(let i = 0; i < largeArray.length; i++){
        hashTable[largeArray[i]] = true;
    }


    //loop through each item in smallArray and return the items present in the hashTable
    for(let j =0; j < smallArray.length; j++){
        if(hashTable[smallArray[j]]){
            result.push(smallArray[j])
        }else{
            continue
        }
    }

    return result;
}

FindIntersection([1, 2, 3, 4, 5, 9, 6, 7, 11], [0, 2, 4, 6, 8])
//output [2,4,6]


//find duplicate
function FindDuplicate(strs){
    let hashTable = {};
    let arr = []

    for(let i = 0; i < strs.length; i++){
        if(hashTable[strs[i]]){
            arr.push(strs[i]);
        }else {
            hashTable[strs[i]] = true; 
            console.log(hashTable)
        }
       
    }
    return arr[0];
}

FindDuplicate(["a","b","c","d", "c", "a"])



//find missing letter
function FindMissingLetter(strs){
   let hashTable = {};
    let joinedstring = strs.split(" ").join("");

    for (let i = 0; i < joinedstring.length; i++) {
        hashTable[joinedstring[i]] = true
    }

    let alphabets = "abcdefghijklmnopqrstuvwzyx"

    for(let i =0; i < alphabets.length; i++){
        if(!hashTable[alphabets[i]]){
            return alphabets[i]
        }
    }
}

FindMissingLetter("the quick brown box jumps over a lazy dog")


//find non-duplicate
function NonDuplicated(str){
    let hashTable = {};

    for (let i = 0; i < str.length; i++) {
        if(hashTable[str[i]]){
            hashTable[str[i]]++;
            console.log(hashTable)
        }else{
            hashTable[str[i]] = 1;
        }
    }

    for (let j = 0; j < str.length; j++) {
        if(hashTable[str[j]] === 1){
            return str[j]
        }
    }
}

NonDuplicated("minimum")