function topKFrequent(nums: number[], k: number): number[] {
    let occurs = new Map()

    for(let i = 0; i < nums.length; i++) {
        occurs.set(nums[i], (occurs.get(nums[i]) || 0) + 1)
    }

    const resp = [...occurs.entries()].sort((a, b) => b[1] - a[1]).map(el => el[0]).slice(0,k)

    return resp
}
