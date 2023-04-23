import { getShoppingCart } from "../Utilities/fakedb";

  
 const CustomCartLoader = async () => { 
     const loadproducts = await fetch('/jobs.json'); 
     const product = await loadproducts.json(); 
     const storedCart = getShoppingCart() ; 
     const savedCart = []; 
                                                        
     for (const id in storedCart) { 
                                                      
         const addedproduct = product.find(prod => prod.id == id); 
         if (addedproduct) {  
             savedCart.push(addedproduct); 
         } 
     }  
     return savedCart;  
 }
  
 export default CustomCartLoader;