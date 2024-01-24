const PRODUCTS = [
  {
    title: "Ofertas",
    data: Array.from({ length: 3 }, (_, index) => String(index)),
  },
  {
    title: "Petiscos",
    data: Array.from({ length: 10 }, (_, index) => String(index)),
  },
  {
    title: "Pratos",
    data: Array.from({ length: 10 }, (_, index) => String(index)),
  },
  {
    title: "Sobremesas",
    data: Array.from({ length: 7 }, (_, index) => String(index)),
  },
  {
    title: "Bebidas",
    data: Array.from({ length: 5 }, (_, index) => String(index)),
  },
]

const CATEGORIES = PRODUCTS.map((item) => item.title)

export { PRODUCTS, CATEGORIES }
