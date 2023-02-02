// Radi se countingSort za svaku cifru pocevsi od poslednje
// Potrebno mu je O(n) da izvrsi ali je zahtevan u pogledu memorije
// Iskreno ne bih umeo trenutno sam da ga iskodiram al stavio sam ga cisto onako
const countingSort = (nums, pos) => {
    const C = Array(10).fill(0),
          B = []
    for(let i = 0; i < nums.length; i++)
        C[~~(nums[i] / pos) % 10]++

    for(let i = 1; i < 10; i++)
        C[i] += C[i - 1]
        
    for(let i = nums.length - 1; i >= 0; i--){
        B[C[~~(nums[i] / pos) % 10] - 1] = nums[i]
        C[~~(nums[i] / pos) % 10]--
    }
    for(let i = 0; i < nums.length; i++)
        nums[i] = B[i]
}
const digit = nums => {
    let max = nums[0]
    for(let i = 1; i < nums.length; i++)
        if(nums[i] > max)
            max = nums[i]
    return Number(String(max).length)
}

const radixsort = nums => {
    const d = digit(nums)
    for(let i = 0; i < d; i++)
        countingSort(nums, 10 ** i)
    return nums
}
