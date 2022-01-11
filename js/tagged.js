// tagged template literals to noop
const tn = (s, ...e) => s.map((a, i) => a + String(e[i] || '')).join('')
