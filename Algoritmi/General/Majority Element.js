// Algoritam za majority element je jednostavan i kaze da treba da imas counter i candidate
// i ukoliko je broj isti uvecavas counter a ukoliko se counter resetuje stavljas novi kandidat
const majorityElement = nums => {
    let counter = 0
    let candidate
    for(let i = 0; i < nums.length; i++){
        if(counter === 0){
            candidate = nums[i]
        }
        if(candidate == nums[i])
            counter++
        else counter--
    }
    return candidate
};
// Za odredjivanje vise kandidata napravis onoliko varijabli za counter i candidata koliko se majority
// elemenata traze i postupak se isto vrsi kao za majority element 1 samo sto kasnije treba da proveris
// frekvecnije tih kandidata
const majorityElementII = nums => {
    const res = []
    let can1 = -1
    let can2 = -2 // vazno je da na pocetku budu razliciti can1 i can2
    let counter1 = 0
    let counter2 = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == can1)
            counter1++
        else if(nums[i] == can2)
            counter2++
        else if(counter1 == 0){
            can1 = nums[i]
            counter1 = 1
        }
        else if(counter2 == 0){
            can2 = nums[i]
            counter2 = 1
        }
        else{
            counter1--
            counter2--
        }
    }
    counter1 = 0, counter2 = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == can1) counter1++
        else if(nums[i] == can2) counter2++
    }
    if(counter1 > ~~(nums.length / 3))
        res.push(can1)
    if(counter2 > ~~(nums.length / 3))
        res.push(can2)
    return res
};
