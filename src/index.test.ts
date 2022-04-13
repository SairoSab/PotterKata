import { PotterBooksOffers } from "./index"

const ONE_BOOK_PRICE = 8
const TWO_DIFFERENT_BOOKS_DISCCOUNT = 0.95

describe("Potter", () => {
  it("returns price from a single book", () => {
    const expected = ONE_BOOK_PRICE;

    let purchase = {"bookA": 1}

    const result = new PotterBooksOffers(purchase);

    expect(result.totalPrice).toEqual(expected);
  })

  it("returns offer price of two different books", () => {
    const expected = ONE_BOOK_PRICE*2*TWO_DIFFERENT_BOOKS_DISCCOUNT;

    let purchase = {"bookA": 1,"bookB": 1}

    const result = new PotterBooksOffers(purchase);

    expect(result.totalPrice).toEqual(expected);
  })
})
