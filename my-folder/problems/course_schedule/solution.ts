function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let adjacencies = new Map()
    let visited = new Set()
    let path = new Set()

    for(let edge of prerequisites) {
        if(!adjacencies.get(edge[1])) {
            adjacencies.set(edge[1], [edge[0]])
        } else {
            adjacencies.get(edge[1]).push(edge[0])
        }
    }

    function findCycle(start: number): boolean {
        if(path.has(start)) return true
        if(visited.has(start)) return false

        visited.add(start)
        path.add(start)
        
        const neighbors = adjacencies.get(start) || []

        for(let neighbor of neighbors) {
            if(findCycle(neighbor)) return true
        }

        path.delete(start)
        return false
    }

    for(let i = 0; i < numCourses; i++) {
        if(findCycle(i)) return false
    }

    return true
};