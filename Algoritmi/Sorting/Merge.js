const merge = (arr, l, m, r) => {
    const sorted = []
    let i = 0
    let p1 = l
    let p2 = m + 1

    while(p1 <= m && p2 <= r){
        if(arr[p1] < arr[p2]){
            sorted[i++] = arr[p1]
            p1++
        }
        else {
            sorted[i++] = arr[p2]
            p2++
        }
    }
    while(p1 <= m)
        sorted[i++] = arr[p1++]
    
    while(p2 <= r)
        sorted[i++] = arr[p2++]

    for(let q = 0; q < sorted.length; q++)
        arr[l++] = sorted[q]
    return arr
}

const mergeSort = (arr, l = 0, r = arr.length - 1) => {
    if(l < r){
        const m = l + ~~((r - l) / 2)
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
    }
    return arr
}
// Best : O(n * lg(n))
// Average : O(n * lg(n))
// Worst : O(n * lg(n))
// Space O(n)
// Stable