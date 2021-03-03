export const addItemToCart = (items,itemData) => {

    let updatedItems = [];
    let itemId = '';

    if(items.length > 0){

        const find = items.find((item,id)=>{

            itemId = id;

            return item.id === itemData.id;
    
        });

        if(!find){

            updatedItems = [...items,{...itemData,quantity:1,totalPrice:itemData.price}];
            
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

        }
        
    }
    else{

        updatedItems = [{...itemData,quantity:1,totalPrice:itemData.price}];


    }



    return updatedItems;

   

}