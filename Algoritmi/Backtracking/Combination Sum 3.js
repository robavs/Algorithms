const combinationSum3 = (k, n) => {
    let res = []
    const subsets = (index, path, sum) => {
        if(sum > n || index > 9)
            return;
        if(path.length == k){
            if(sum == n)
                res.push(path.slice())
            return 
        }
        subsets(index + 1, [...path, index + 1], sum + index + 1)
        subsets(index + 1, path, sum)
        return res
    }    
    return subsets(0, [], 0)
};
