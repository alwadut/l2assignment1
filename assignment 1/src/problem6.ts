{
    //

    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length === 0){
            return null;
        }
        return products.reduce((maxProduct,currentProduct)=>{
            return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
        })
      }



      const products = [
        { name: "Pen", price: 60 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      const mostExpensiveProduct = getMostExpensiveProduct(products);
      console.log(mostExpensiveProduct);  
     









    //
}