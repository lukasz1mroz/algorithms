/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + '(');
    if (r < l) go(l, r + 1, s + ')');
  };

  go(0, 0, '');
  return res;
};
