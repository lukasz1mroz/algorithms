function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [[p,q]]
    while(stack.length) {
        const [p,q] = stack.pop()
        if (!p && !q) continue;
        if (!p || !q || p.val !== q.val) return false;            
        stack.push([p.right, q.right], [p.left, q.left])
    }
    return true
};