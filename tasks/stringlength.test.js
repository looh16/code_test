import { stringLength } from "./stringlength";

test('string', () => {
    let result = stringLength("First Test")
    expect(result).toBe(10)
})
