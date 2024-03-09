/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if (bank.indexOf(endGene) === -1) return -1;

    const geneBankSet = new Set(bank);
    const mutationQueue = [[startGene, 0]];
    const geneLength = 8;
    const genes = ['A', 'C', 'G', 'T'];

    while (mutationQueue.length) {
        let [currentGene, mutations] = mutationQueue.shift();
        if (currentGene === endGene) return mutations;

        for (let i = 0; i < geneLength; i++) {
            for (let gene of genes) {
                let mutatedGene = currentGene.slice(0, i) + gene + currentGene.slice(i + 1);
                if (geneBankSet.has(mutatedGene)) {
                    mutationQueue.push([mutatedGene, mutations + 1]);
                    geneBankSet.delete(mutatedGene);
                }
            }
        }
    }

    return -1;
};

// Comments
    // Input: 2 strings representing genes, 1 array of string representing bank of genes mutations
    // Considerations: 
        // Bank length is max 10
        // Genes are 8 chars length and built from A C G T
        // Mutations are only 1 letter changes, and only these in bank are valid
    // Output: number representing min number of mutations from start to end gene

    // Create mask array containing 0s and searched differences
    // Create steps counter
    // Iterate through mutations 
        // If at searched index, add 0 to mask and increase steps
        // Else, skip
    // If mask has all zeros, return steps, else -1
