function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let graph = {}

    for(let i = 0; i < equations.length; i++) {
        let [numerator, denominator] = equations[i]
        let val = values[i]

        if(!graph[numerator]) graph[numerator] = {}
        if(!graph[denominator]) graph[denominator] = {}

        graph[numerator][denominator] = val 
        graph[denominator][numerator] = 1/val 
    }

    function evalQuery(numerator: string, denominator: string, visited: Set<any>): number {
        if(!(numerator in graph) || !(denominator in graph)) return -1.0
        if(numerator === denominator) return 1.0

        visited.add(numerator)
        let neighbors = graph[numerator]

        for(let neighbor in neighbors) {
            if(!visited.has(neighbor)){
                let result = evalQuery(neighbor, denominator, visited)
                if(result !== -1.0) {
                    return neighbors[neighbor] * result
                }
            }
        }
        return -1.0
    }

    let results = []

    for(let query of queries) {
        let [numerator, denominator] = query
        let visited = new Set()
        let result = evalQuery(numerator, denominator, visited)
        results.push(result)
    }
    return results
};