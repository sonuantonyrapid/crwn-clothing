export const addItemToCart = (items,itemData,cartQuantity,cartPriceTotal) => {

    let updatedItems = [];
    let itemId = '';
    let totalItemPrice = 0;

    if(items.length > 0){

        const find = items.find((item,id)=>{

            itemId = id;

            return item.id === itemData.id;
    
        });

        if(!find){

            updatedItems = [...items,{...itemData,quantity:1,totalPrice:itemData.price}];
            cartQuantity += 1;
            totalItemPrice += itemData.price;
            
        }
        else{

            const item = {...items[itemId]};
    
            const quantity = item.quantity+1;
            const totalPrice = item.price*quantity;
    
            const updatedItem = {
                ...item,
                quantity:quantity,
                totalPrice:totalPrice
            }         
    
            items[itemId] = updatedItem;
    
            updatedItems = [...items];

            cartQuantity += 1;
            totalItemPrice += item.price;

        }
        
    }
    else{

        updatedItems = [{...itemData,quantity:1,totalPrice:itemData.price}];

        cartQuantity += 1;

        totalItemPrice += itemData.price;


    }



    return {

        cartItems: updatedItems,
        cartQuantity: cartQuantity,
        cartPriceTotal:totalItemPrice+cartPriceTotal

    };

   

}

export const reduceItem = (itemId,items,cartTotalQuantity,cartTotalPrice)=>{

    // let updatedItems = [];
    let arrayId = '';
    // let totalItemPrice = 0;

    if(items.length > 0){

        const find = items.find((item,id)=>{

            arrayId = id;

            return item.id === itemId;
    
        });

        if(!find){

            alert('Item not found.');

            return {

                reduceCartItems: items,
                reduceCartQuantity: cartTotalQuantity,
                reduceCartPriceTotal:cartTotalPrice
        
            };
            
        }
        else{

            const item = {...items[arrayId]};

            let updatedcartItems = '';
            let updatedcartQuantity = 0;
            let updatedcartPriceTotal = 0;

            if(item.quantity > 1){

                const quantity = item.quantity-1;
                const totalPrice = item.price*quantity;
        
                const updatedItem = {
                    ...item,
                    quantity:quantity,
                    totalPrice:totalPrice
                }    
        
                items[arrayId] = updatedItem;
        
                updatedcartItems = [...items];
    
                updatedcartQuantity = cartTotalQuantity-1;
                updatedcartPriceTotal = cartTotalPrice-updatedItem.price;
    

            }
            else{

                const removeItem = removeCart(itemId,items,cartTotalQuantity,cartTotalPrice);

                updatedcartItems = removeItem.updatedcartItems;
                updatedcartQuantity = removeItem.updatedcartQuantity;
                updatedcartPriceTotal = removeItem.updatedcartPriceTotal;

            }

            return {

                reduceCartItems: updatedcartItems,
                reduceCartQuantity: updatedcartQuantity,
                reduceCartPriceTotal:updatedcartPriceTotal
        
            };
    
           
        }
        
    }
    else{

        return {

            reduceCartItems: items,
            reduceCartQuantity: totalQuantity,
            reduceCartPriceTotal:totalPrice
    
        };

    }


}

export const removeCart = (itemId,items,totalQuantity,totalPrice)=>{

    if(itemId){

        let updatedQuantity = totalQuantity;
        let updatedPrice = totalPrice;

        const updatedItems = items.filter(item=>{

            if(item.id === itemId){

                updatedQuantity = updatedQuantity-item.quantity;
                updatedPrice = updatedPrice-(item.price*item.quantity);

            }

            return item.id !== itemId;

        });

        return {

            updatedcartItems: updatedItems,
            updatedcartQuantity: updatedQuantity,
            updatedcartPriceTotal:updatedPrice
    
        };


    }
    else{

        return {

            cartItems: items,
            cartQuantity: totalQuantity,
            cartPriceTotal:totalPrice
    
        };

    }


}