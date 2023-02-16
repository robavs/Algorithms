// Ovo je zvanicno resenje sa leetcoda, ja sam uradio zadatak ali vrlo neefikasno (13 % time && 9% memory)
// i fora je sto sam ja radio sa zagradama i onda se search tree prosiruje a glavna caka je da kazes koje opcije imas
// a + b, a - b, b - a, a * b i evenetualno a / b i b / a i onda je resenje mnogo efikasnije

// All possible operations we can perform on two numbers.
let generatePossibleResults = (a, b) => {
    let res = [ a + b, a - b, b - a, a * b ];
    if (a) {
        res.push(b / a);
    }
    if (b) {
        res.push(a / b);
    }
    return res;
}

// Check if using current list we can react result 24.
let checkIfResultReached = list => {
    if (list.length == 1) {
        // Base Case: We have only one number left, check if it is approximately 24.
        return Math.abs(list[0] - 24.0) <= 0.1;
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            // Create a new list with the remaining numbers and the new result.
            let newList = [];
            for (let k = 0; k < list.length; k++) {
                if (k != i && k != j) {
                    newList.push(list[k]);
                }
            }
            
            // For any two numbers in our list,
            // we perform every operation one by one.
            let results = generatePossibleResults(list[i], list[j]);
            for (let resIdx = 0; resIdx < results.length; ++resIdx) {
                // Push the new result in the list
                newList.push(results[resIdx]);
                
                // Check if using this new list we can obtain the result 24.
                if (checkIfResultReached(newList)) {
                    return true;
                }
                
                // Backtrack: remove the result from the list.
                newList.pop();
            }
        }
    }
    return false;
};

let judgePoint24 = cards => checkIfResultReached(cards);


// Moje resenje :(
const judgePoint24 = (nums, target = 24) => {
    let [num1, num2, num3, num4] = nums
    const used = [0, 0, 0, 0]
    const obj = {
        "(": [...nums, "("],
        ")": [")", "+", "-", "*", "/"],
        "+": [...nums, "("],
        "-": [...nums, "("],
        "*": [...nums, "("],
        "/": [...nums, "("],
        [num1]: ["+", "-", "*", "/", ")"],
        [num2]: ["+", "-", "*", "/", ")"],
        [num3]: ["+", "-", "*", "/", ")"],
        [num4]: ["+", "-", "*", "/", ")"]
    }
    let f = false
    const backtrack = (index, path, char, open, closed, numbers) => {
        if (!f) {
            const arr = obj[char]
            if (index > 11 || open > 2) return
            if (open == closed && (Number.isInteger(char) || char == ")") && numbers == 4) {
                let res = eval(path)
                if (res == target || res == 23.99999999999999)
                    f = true
                return
            }
            else if (numbers == 4 && open == closed) return;
            for (let i = 0; i < arr.length && !f; i++) {
                if (Number.isInteger(arr[i])) {
                    if (!used[i]) {
                        used[i] = 1
                        backtrack(index + 1, path + arr[i], String(arr[i]), open, closed, numbers + 1)
                        used[i] = 0
                    }
                }
                else {
                    if (arr[i] == "(" && open >= closed && open <= 2) {
                        backtrack(index + 1, path + arr[i], String(arr[i]), open + 1, closed, numbers)
                    }

                    else if (arr[i] == ")" && closed < open) {
                        backtrack(index + 1, path + arr[i], String(arr[i]), open, closed + 1, numbers)
                    }

                    else if (arr[i] == "+" || arr[i] == "-" ||
                        arr[i] == "/" || arr[i] == "*") {
                        backtrack(index + 1, path + arr[i], String(arr[i]), open, closed, numbers)
                    }
                }
            }
        }
    }
    backtrack(0, "(", "(", 1, 0, 0)
    return f
};
