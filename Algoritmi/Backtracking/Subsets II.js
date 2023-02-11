// Video sam sa interneta ali glavna ideja je da cim naidjes
// na duplikat moras da shiftujes index dok imas iste elemente
const subsetsWithDup = nums => {
    nums.sort((a, b) => a - b)
    const res = []

    const backtrack = (index, path) => {
        if(index == nums.length)
            return res.push(path.slice())
        
        backtrack(index + 1, [...path, nums[index]])
        while(index + 1 < nums.length && nums[index] == nums[index + 1])
            index++
        backtrack(index + 1, path)
    }
    backtrack(0, [])
    return res
};
