// 27% time i 95% memory
// medjutim efikasniji način da se uradi ovaj zadatak jeste da nakon sto prodješ svaku reč, umesto da prolaziš svaki put
// kroz celu listu reči, ti prodjes kroz duzinu te reči i uradiš substituciji za svaki moguci karakter (for petlja od 0 do 26, zameniš
// odogvarajućim karakterom i proveriš da li se ta nova reč nalazi u listi reči i ako se nalazi dodaš je u red i iz seta izbrises tu reč)

const ladderLength = (beginWord, endWord, wordList) => {
    const visited = Array(wordList.length).fill(false)
    const queue = [beginWord]
    let depth = 1

    while(queue.length){
        const size = queue.length
        for(let i = 0; i < size; i++){
            const top = queue.shift()
            if(top == endWord) return depth
            for(let j = 0; j < wordList.length; j++){
                const word = wordList[j]
                if(visited[j]) continue
                let diff = 0
                for(let k = 0; k < word.length; k++)
                    if(top[k] != word[k]) 
                        diff++
                if(diff == 1){
                    queue.push(word)
                    visited[j] = true
                }
            }
        }
        depth++
    }
    return 0
};
