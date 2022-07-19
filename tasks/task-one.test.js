import { countStringCharacters } from "./task-one";

test('string', () => {
    let result = countStringCharacters("First Test")
    expect(result).toBe(10)
})
