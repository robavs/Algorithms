const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++){
        const key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}
// Best : O(n)
// Average : O(n ^ 2)
// Worst : O(n ^ 2)
// Space O(1)
// Stable
// Pogodan je da se koristi za nizove male velicine (do 30 elemenata) koji su parcijalno sortirani