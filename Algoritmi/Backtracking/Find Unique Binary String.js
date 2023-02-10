// Dobra fora kod ovih zadataka koji traze samo jedno resenje jeste da imas boolean promenljivu koja se setuje
// na true cim pronadjes prvo resenje i onda nema potrebe da ides dalje niz search tree cime se smanjuje vreme izvrsenje
const findDifferentBinaryString = nums => {
    const set = new Set(nums)
    let res
    let flag = 0
    const dfs = (index, string) => {
        if(flag == 0){
            if(index == nums[0].length){
                if(!set.has(string)){
                    res = string    
                    flag = 1
                }
                return 
            }
            dfs(index + 1, string + "0")
            dfs(index + 1, string + "1")
        }
    }   
    dfs(0, "")
    return res
};
