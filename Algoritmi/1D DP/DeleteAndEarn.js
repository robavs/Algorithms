// zadatak je bas lak ali nisam se setio ideje 
// da sve iste vrendosti saberes u jedno polje
// i da posle radis House robber
const deleteAndEarn = nums => {
    const arr = Array(10001).fill(0)
    for(let i = 0; i < nums.length; i++)
        arr[nums[i]] += nums[i]
    
    for(let i = 2; i < arr.length; i++)
        arr[i] += Math.max(arr[i - 2], arr[i - 3] || 0)
    return Math.max(arr[10000], arr[9999])
}
