export type ProductCategory = string

export type Product = {
  id         : number
  title      : string
  description: string
  image      : string
  category   : ProductCategory
  price      : number
  rating     : {
    rate : number
    count: number
  }
}

export type Products = Product[]
