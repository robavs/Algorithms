//Primenjuje se House Rober dva puta pocevsi od index i = 2 i i = 3
const rob = nums => {
    if(nums.length <= 2)
        return Math.max(...nums)

    const arr = nums.slice()
    const n = nums.length - 1
        
    for(let i = 2; i < arr.length - 1; i++)
        arr[i] += Math.max(arr[i-2], arr[i-3] || 0)

    for(let i = 3; i < nums.length; i++)
        nums[i] += Math.max(nums[i-2], i - 3 != 0 ? nums[i - 3] : 0)

    return Math.max(nums[n], arr[n - 1], arr[n - 2])
}