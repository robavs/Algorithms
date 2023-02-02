// generalni algoritam koji sortira nenegativne brojeve
// N je duzina niza a K je najveci element u nizu tako da se ipak moze reci da zavisi od k
//pogodno je za nizove koji nemaju veliku oscilaciju vrednosti izmedju najmanjeg i najveceg elementa
// Best : O(N + K)
// Average : O(N + K)
// Worst : O(N + K)
// Space O(N + K)
// Stable
const countingSort = A => {
    const C = Array(Math.max(...A) + 1).fill(0) // count niz
    const B = [] // izlazni niz

    for(let i = 0; i < A.length; i++)
        C[A[i]] += 1
        
    for(let i = 1; i < C.length; i++)
        C[i] += C[i - 1]

    for(let i = A.length - 1; i >= 0; i--){
        B[C[A[i]] - 1] = A[i]
        C[A[i]]--
    }
    return B
}
//Modifikacija se vrsi tako da se pronadje najmanji element i on postavi na nultom indeksu tako sto ga siftujes
//za najamnji element +Math.abs(min) ili -min
const countingSortMod = A => {
    const min = Math.min(...A)
    const max = Math.max(...A)
    const shift = Math.abs(min)
    const C = Array(max - min + 1).fill(0)
    const B = []
    
    for(let i = 0; i < A.length; i++)
        C[A[i] + shift]++
    
    for(let i = 1; i < C.length; i++)
        C[i] += C[i - 1]
    
    for(let i = A.length - 1; i >= 0; i--){
        B[C[A[i] + shift] - 1] = A[i]
        C[A[i] + shift]--
    }
    return B
}
