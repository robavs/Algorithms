// Donekle kapiram quickSort ali nisam ga jos usvojio sa 100% razumevanjem
const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// Na kraju svakog particionisanja dobijamo da je poslednji element naso svoju pravu poziciju
// jer smo particionisali tako da su levi elementi manji od pivota a desni veci
const partition = (arr, l, h) => {
    //za pivot uzimamo poslednji element
    let pivot = arr[h]
    let i = l - 1
 
    for (let j = l; j < h; j++) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, h)
    return i + 1
}
const quickSort = (arr, l = 0, h = arr.length - 1) => {
    if (l < h) {
        let p = partition(arr, l, h)
        console.log(p, arr)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, h)
    }
    return arr
}
// Best: O(n * lg(n))
// Average: O(n * lg(n))
// Worst: O(n ^ 2)
// Unstable
