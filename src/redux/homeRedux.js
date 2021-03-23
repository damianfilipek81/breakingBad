
export const getBreakingBadData = data => data.characters.filter(char => char.category == 'Breaking Bad');
export const getBetterCallSaulData = data => data.characters.filter(char=> char.category == 'Better Call Saul' || char.category.includes('Better Call Saul'));


