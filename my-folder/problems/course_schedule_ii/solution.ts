function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const adjacencies = new Map();
    const ordered = [];
    const path = new Set();
    const visited = new Set();

    for (let pair of prerequisites) {
        if(!adjacencies.has(pair[1])) {
            adjacencies.set(pair[1], [pair[0]]);
        } else {
            adjacencies.get(pair[1]).push(pair[0]);
        }
    }

    function traverse(start: any): boolean {
        if(path.has(start)) return false;
        if(visited.has(start)) return true;

        path.add(start);
        visited.add(start);

        let courses = adjacencies.get(start) || [];
        for (let course of courses) {
            if (!traverse(course)) return false;
        }

        ordered.push(start);
        path.delete(start);
        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        if (!traverse(i)) return [];
    }

    return ordered.reverse();
};