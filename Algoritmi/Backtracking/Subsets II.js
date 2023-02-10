// Video sam sa interneta ali glavna ideja jeste da kad imas duplikate u jednom
// subsetu ne ukljucujes nijedan duplikat a u drugom ukljucujes sve duplikate
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
