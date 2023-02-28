// Inicijalno nijedan nisam umeo da uradim za sume koje nisu sortirane osim 4 sum jer je ista fora ko za 3
const twoSum = (nums, target) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) return [hash[nums[i]], i]
        hash[target - nums[i]] = i
    }
}

const twoSumSorted = (nums, target) => {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum === target) return [l + 1, r + 1]
        else if (sum > target) r--
        else l++
    }
};

// Glavna fora jeste da za svaki broj iz opsega 0 do nums.length - 2 radis two sum i da siftujes pointere kako bi izbegao duplikate
const threeSum = nums => {
    nums.sort((a, b) => a - b)
    const res = []

    for (let i = 0; i < nums.length - 2; i++) {
        const sum = 0 - nums[i]
        let l = i + 1
        let r = nums.length - 1

        if (i > 0 && nums[i] == nums[i - 1]) continue
        // Two sum
        while (l < r) {
            if (nums[l] + nums[r] == sum) {
                res.push([nums[i], nums[l], nums[r]])
                // pomeramo pointere jer postoji eventualno vise
                // resenja za dati broj nums[i]
                while (l < r && nums[l] == nums[l + 1]) l++
                while (l < r && nums[r] == nums[r - 1]) r--
                l++
                r--
            }
            else if (nums[l] + nums[r] > sum)
                r--
            else l++
        }
    }
    return res
}

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)

    const min = [Infinity, Infinity]

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1

        let sum = target - nums[i]
        while (l < r) {
            let num = nums[l] + nums[r]
            if (Math.abs(num - sum) < min[0]) {
                min[0] = Math.abs(num - sum)
                min[1] = nums[i] + nums[l] + nums[r]
            }
            if (sum == num)
                return target
            if (sum < num)
                r--
            else l++
        }
    }
    return min[1]
}
const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b)
    const res = []

    for (let i = 0; i < nums.length - 3; i++) {
        // Three Sum
        if (i > 0 && nums[i] == nums[i - 1])
            continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue

            const sum = target - nums[i] - nums[j]
            let l = j + 1
            let r = nums.length - 1
            // Two sum
            while (l < r) {
                if (nums[l] + nums[r] == sum) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while (l < r && nums[l] == nums[l + 1])
                        l++
                    while (l < r && nums[r] == nums[r - 1])
                        r--
                    l++
                    r--
                }
                else if (nums[l] + nums[r] > sum)
                    r--
                else l++
            }
        }
    }
    return res
};
