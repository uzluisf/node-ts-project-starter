import { add } from "./math";

describe("add", () => {
    it("returns addition of two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});
