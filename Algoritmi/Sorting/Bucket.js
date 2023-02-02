//Top K Frequent Elements
const bucketSort = arr => {
    const n = arr.length
    const bucket = Array(n).fill(0).map(() => [])
    
    for(let i = 0; i < n; i++){
        let index = ~~(arr[i]) * n
        bucket[index].push(arr[i])
    }

    for(let i = 0; i < n; i++)
        insertionSort(bucket[i])

    let index = 0
    for(let i = 0; i < n; i++)
        for(let j = 0; j < bucket[i].length; i++)
            arr[index++] = bucket[i][j]
    
    return arr
}

function insertionSort(arr){
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
//Koirsti se kad imamo uniformnu raspodelu elemenata
// n - broj elemenata, k - broj bucketsa
// Time O(n + k) 
// Space O(n + k)
// Stable