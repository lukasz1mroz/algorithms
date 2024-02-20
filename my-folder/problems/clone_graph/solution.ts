/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
   let output = {}

    return cloneGraphHelper(node)
    
    function cloneGraphHelper(node: Node): Node {
        if (!node) return node
        if(!output[node.val]) {
            output[node.val] = new Node(node.val)
            output[node.val].neighbors = node.neighbors.map(cloneGraphHelper)
        }
        return output[node.val]
    };
};


