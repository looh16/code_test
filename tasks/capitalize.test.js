import { capitalizeString } from "./capitalize";

test('string', () => {
    let result = capitalizeString("capitalize")
    expect(result).toBe("Capitalize")
})
