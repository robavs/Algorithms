// Problemi Best Time To Buy And Sell Stock se mogu posmatrati i kao 2D DP i kao 3D DP
// jer incijalno zavise i od indexa i od toga da li kupujemo ili prodajemo u datom trenutku i 
// od broja transkacija koje smo izvrsili do trenutnog momenta 
// kao 2D probleme ih posmatrajmo kad zapravmo ubacimo medju state da i posle prodate i posle kupljene 
// akcije uvecavamo broj transkacija a finalni slucaj je num == 2 * k
// Za Best Time To Buy And Sell Stock IV sam postavio resenje kao 2D DP
const maxProfit = prices => {
    const dp = Array(prices.length).fill(0).map(() => Array(2).fill(0).map(() => Array(2).fill(-1)))
    const dfs = (index, buyed, num) => {
        if(index == prices.length || num == 2)
            return 0
            
        if(dp[index][buyed][num] != -1)
            return dp[index][buyed][num]
        
        let res 
        
        if(buyed == 0){
            res = Math.max(
                -prices[index] + dfs(index + 1, 1, num),
                dfs(index + 1, 0, num)
            )
        }
        else {
            res = Math.max(
                prices[index] + dfs(index + 1, 0, num + 1),
                dfs(index + 1, 1, num)
            )
        }
        return dp[index][buyed][num] = res
    }
    return dfs(0, 0, 0)
};
