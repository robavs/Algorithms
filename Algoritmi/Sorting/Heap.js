//Kth Largest Element In An Array
//K Closest Points To Origin

//ovo spusta element na donju poziciju
const heapfy = (arr, len, i) => {
    let max = i
    let l = 2 * i + 1
    let r = 2 * i + 2
    if(l < len && arr[l] > arr[max])
        max = l
    if(r < len && arr[r] > arr[max])
        max = r
    if(max != i){
        let temp = arr[i]
        arr[i] = arr[max]
        arr[max] = temp
        heapfy(arr, len, max)
    }
    return arr
}

const heapSort = arr => {
    //Build Max-Heap
    for(let i = ~~(arr.length / 2); i >= 0; i--)
        heapfy(arr, arr.length, i)
    
    //I onda ovde samo postavljas prvi element Heap-a za poslednji i redukujes velicinu heapa
    //da ne bi poredilo sa poslednjim elmentom zato sto sortiramo od pozadi
    for(let i = arr.length - 1; i > 0; i--){
        let temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapfy(arr, i, 0)
    }
    return arr
}
// Best : O(n * lg(n))
// Average : O(n * lg(n))
// Worst : O(n * lg(n))
// Space O(1)
// Unstable