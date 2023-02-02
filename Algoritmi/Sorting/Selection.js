const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i])
                minIndex = j
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
// Best : O(n ^ 2)
// Average : O(n ^ 2)
// Worst : O(n ^ 2)
// Space O(1)
// Unstable