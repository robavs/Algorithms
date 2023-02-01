const climbStairs = n => {
    let a = 1, b = 2
    for(let i = 2; i < n; i++)
            [a, b] = [b, a + b]
    return n == 1 ? a : b
};