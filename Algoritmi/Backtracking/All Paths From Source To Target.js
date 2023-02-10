// Moje resenje
const allPathsSourceTarget = graph => {
    const queue = [[0, [0]]]
    const matrix = []
    const n = graph.length - 1
    while(queue.length){
        const size = queue.length

        for(let i = 0; i < size; i++){
            const [node, path] = queue.shift()
            
            const list = graph[node]

            for(let j = 0; j < list.length; j++){
                if(list[j] == n){
                    matrix.push([...path, list[j]])
                    continue
                }
                queue.push([list[j], [...path, list[j]]])
            }
        }
    }
    return matrix
}
// Ovo resenje je zapravo sa dfs i nije moje
const allPaths = graph => {
    const s = 0;
    const t = graph.length - 1;
    const answer = [];
    const dfs = (node, path) => {
        if (path[path.length - 1] === t) {
            answer.push([...path]);
            return;
        }
        for (const cur of graph[node]) {
            path.push(cur);
            dfs(cur, path);
            path.pop();
        }
    }
    dfs(0, [0]);
    return answer;
};
