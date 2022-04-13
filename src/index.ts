import { isThisTypeNode } from "typescript"

const ONE_BOOK_PRICE = 8
const TWO_DIFFERENT_BOOKS_DISCCOUNT = 0.95

export class PotterBooksOffers{
  purchase: any
  totalPrice: number

  constructor(purchase: any){
    
    this.purchase = purchase
    this.totalPrice = this.calculatePurchase()
  }

  calculatePurchase(): number{
    
    var total: number = 0

    if (this.purchase.bookA === 1 && this.purchase.bookB === 1){
      return ONE_BOOK_PRICE*2*TWO_DIFFERENT_BOOKS_DISCCOUNT
    }

    if (this.purchase.bookA === 1){
      total = ONE_BOOK_PRICE
    }
    
    return total
  }
};
