const longestPalindrome = s => {
    let max = s[0]

    for(let i = 1; i < s.length; i++){
        if(s[i-1] == s[i+1]){
            let newString = count(i-1, i + 1, s)
            if(newString.length > max.length)
                max = newString
        }
        if(s[i] == s[i-1]){
            let newString = count(i-2, i + 1, s)
            if(newString.length > max.length)
                max = newString
        }
    }
    return max
};
//glavna fora za palindrome (video sam na internetu)
const count = (l, r, string) => {
    while(l >= 0 && r <= string.length - 1 && string[l] == string[r]){
        r++
        l--
    }
    let res = string.slice(l + 1, r)
    return res
}