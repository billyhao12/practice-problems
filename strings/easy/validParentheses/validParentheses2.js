const validParentheses = str => {
    if (str.length % 2 !== 0) return false;

    // how do we keep track of each set of parentheses?
    // the latest open parenthesis must close first before the earlier open parentheses
    const validChars = ['(', ')', '{', '}', '[', ']'];
    const openParentheses = [];
    const key = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < str.length; i++) {
        if (!validChars.includes(str[i])) return false;

        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            openParentheses.push(str[i]);
        } else if (str[i] === key[openParentheses[openParentheses.length - 1]]) {
            openParentheses.pop();
        } else {
            return false;
        }
    }

    if (openParentheses.length > 0) {
        return false;
    } else {
        return true;
    }
}

console.log(validParentheses("()")); // true
console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("(]")); // false
console.log(validParentheses("([)]")); // false
console.log(validParentheses("{[]}")); // true
