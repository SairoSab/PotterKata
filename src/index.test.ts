import { PotterBooksOffers } from "./index"

describe("Potter", () => {
  it("returns price from a single book", () => {
    const expected = 8;

    const result = PotterBooksOffers();

    expect(result).toEqual(expected);
  })
})
