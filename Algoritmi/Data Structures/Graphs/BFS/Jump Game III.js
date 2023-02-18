const canReach = (arr, start) => {
    if(arr[start] == 0)
        return true
    const queue = [start]
    const visited = Array(arr.length).fill(0)
    visited[start] = 1

    while(queue.length){
        const size = queue.length
        for(let i = 0; i < size; i++){
            const pos = queue.shift()
            const right = pos + arr[pos]
            const left = pos - arr[pos]
            if(right < arr.length && !visited[right]){
                if(arr[right] == 0)
                    return true
                queue.push(right)
                visited[right] = 1
            }
            if(left >= 0 && !visited[left]){
                if(arr[left] == 0)
                    return true
                queue.push(left)
                visited[left] = 1
            }
        }
    }
    return false
};
