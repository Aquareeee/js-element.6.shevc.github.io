function getMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}

function getMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxValue;
}

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const числа = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const минимум = getMin(числа);
const максимум = getMax(числа);
const сумма = getSum(числа);

console.log('Минимальное значение:', минимум);
console.log('Максимальное значение:', максимум);
console.log('Сумма элементов:', сумма);