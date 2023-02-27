const countSubstrings = s => {
    let res = 0
    
    for(let i = 0; i < s.length; i++)
        res += count(s, i - 1, i + 1)
    
    for(let i = 1; i < s.length; i++)
        if(s[i] == s[i-1])
            res += count(s, i - 2, i + 1)
    return res
}
// ovo je zapravo jaka fora koju sam video na internetu
function count(str,l,r){
    let res = 1
    while(l >= 0 && r <= str.length - 1 && str[l] == str[r]){
        res++
        l--
        r++
    }
    return res
}