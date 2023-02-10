// mislim da sam ovaj sam resio
const maxLength = arr => {

  const isUnique = string => new Set(string).size === string.length

  let max = 0

  const dfs = (string = "", index = 0) => {
        if(index > arr.length) return

        if(isUnique(string))
          max = Math.max(string.length, max)

        else return

        for(let i = index; i < arr.length; i++)
            dfs(string + arr[i], i + 1)
        return max
  }    
  return dfs()
};
