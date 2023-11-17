interface Product4 {
  id: number;
  name: string;
  price: number;
  description: string;
}

// And a array of product objects:

const products: Product4[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

// Try implementing the updateProduct function based on the provided requirements.

function updateProduct(
  productId: number,
  updatedValues: Partial<Product4>
): void {
  const target = products.filter((prod) => prod.id === productId)[0];
  if (target !== undefined) {
    products[products.indexOf(target)] = {...target, ...updatedValues};
  } else {
    return console.log("product not found");
  }
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});