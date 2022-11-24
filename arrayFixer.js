// This work aims to simplify arrays without using indexOf() method.

function arrayFixer(arr){

    var nums = [];

    arr.forEach(function (number) {
        nums.includes(number) === false && nums.push(number);
    });

    var sortedNums = nums.sort(function(a, b){return a - b;});

    console.log(sortedNums);
}