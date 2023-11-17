type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

// Now, imagine there's a new product type called ShippableProduct, that combines the properties of both Product and Shipping. Try to create this new type using the knowledge you just learned.

type ShippableProduct = Product & Shipping;

// ====


interface ShippableProduct1 extends Product, Shipping {};