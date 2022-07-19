import { reverseString } from "./reversestring";

test('string', () => {
    let result = reverseString("he")
    expect(result).toBe("eh")
})
