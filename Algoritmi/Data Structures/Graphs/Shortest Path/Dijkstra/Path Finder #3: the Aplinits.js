// sa codewars-a
function pathFinder(area){
  const n = area.split("\n").length
  
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const isValid = (i, j) => i >= 0 && j >= 0 && i < n && j < n
  area = area.split("\n").map(e => [...e].map(Number))
  
  const dist = Array(n).fill(0).map(() => Array(n).fill(Infinity))
  dist[0][0] = 0
  
  const queue = [[0, 0]]
  
  while(queue.length){
    const [a, b] = queue.shift()
    
    for(let i = 0; i < moves.length; i++){
      const x = a + moves[i][0]
      const y = b + moves[i][1]
      if(isValid(x, y)){
        if(dist[x][y] > dist[a][b] + Math.abs(area[a][b] - area[x][y])){
          dist[x][y] = dist[a][b] + Math.abs(area[a][b] - area[x][y])
          queue.push([x, y])
        }
      }
    }
  }
  return dist[n - 1][n - 1]
}
