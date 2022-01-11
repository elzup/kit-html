const taggedNoop = (strs, ...exps) =>
  strs.reduce((a, c, i) => a + c + exps[i] || '', '')
