export type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
  };
  
  export type CartType = {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  };
  
  export type Carts = {
    carts: CartType[];
    total: number;
    skip: number;
    limit: number;
  };