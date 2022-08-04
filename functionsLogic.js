/* Logic of inbuilt functions */
function mapLogic(numbers, callBackFunction) {
    var mappedNumbers = [];

    for (const index in numbers) {
        mappedNumbers.push(callBackFunction(numbers[index]));
    }

    return mappedNumbers;
}

function filterLogic(numbers, callBackFunction) {
    var filteredNumbers = [];

    numbers.forEach(number => {
        if(callBackFunction(number))
            filteredNumbers.push(number);
    });

    return filteredNumbers;
}

function reduceLogic(numbers, callBackFunction) {
    var initialValue = 0, finalValue;

    numbers.forEach(number => {
        finalValue = callBackFunction(initialValue, number);
        initialValue = finalValue;
    });

    return finalValue;
}

function forEachLogic(numbers, callBackFunction) {
    var initialValue = 0, resultValue;

    for(var index = 0; index < numbers.length; index++) {
        resultValue = callBackFunction(initialValue, numbers[index]);
        initialValue = resultValue;
    }

    return resultValue;
}


/* Initialization and Declaration */
var numbers = [2, 14, 30, 89, 25];

function squareOfNumber(number) {
    return number * number;
}

function isNumberGreaterThan20(number) {
    if(number > 20)
        return true;
    
    return false;
}

function findSumOfNumbersUsingReduce(sum, number) {
    return sum + number;
}

function findSumOfNumbersUsingForEach(sum, number) {
    return sum + number;
}


/* Execution */
var mappedNumbers = mapLogic(numbers, squareOfNumber);
console.log("After mapping       ===> ", mappedNumbers);

var filteredNumbers = filterLogic(numbers, isNumberGreaterThan20);
console.log("After filtering     ===> ", filteredNumbers);

var reducedSumOfArray = reduceLogic(numbers, findSumOfNumbersUsingReduce);
console.log("After reducing      ===> ", reducedSumOfArray);

var sumOfArrayUsingForEach = forEachLogic(numbers, findSumOfNumbersUsingForEach);
console.log("After using forEach ===> ", sumOfArrayUsingForEach);