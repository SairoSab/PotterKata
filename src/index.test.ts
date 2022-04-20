import { PotterBooksOffers } from "./index"

const ONE_BOOK_PRICE = 8
const TWO_DIFFERENT_BOOKS_DISCCOUNT = 0.95

describe("Potter", () => {
  it("returns price from a single book", () => {

    let purchase = {"bookA": 1}

    const totalPrice = new PotterBooksOffers(purchase)
    const calculatedPrice = totalPrice.getCalculatedPrice()

    expect(calculatedPrice).toEqual(ONE_BOOK_PRICE)
  })

  it("returns offer price of two different books", () => {
    
    const expectedPrice = ONE_BOOK_PRICE*2*TWO_DIFFERENT_BOOKS_DISCCOUNT

    let purchase = {"bookA": 1,"bookB": 1}

    const totalPrice = new PotterBooksOffers(purchase)
    const calculatedPrice = totalPrice.getCalculatedPrice()

    expect(calculatedPrice).toEqual(expectedPrice)
  })  

  it("returns offer price of two books of the same kind", () => {
    
    const expectedPrice = ONE_BOOK_PRICE*2

    let purchase = {"bookB": 2}

    const totalPrice = new PotterBooksOffers(purchase)
    const calculatedPrice = totalPrice.getCalculatedPrice()

    expect(calculatedPrice).toEqual(expectedPrice)
  })  

  
})
