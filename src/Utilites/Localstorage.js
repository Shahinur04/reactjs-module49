// use localstorage to manage  cart data
const localDb=id=>{
    const  quantity=localStorage.getItem(id)
    if (quantity) {
        // console.log("yes")
        // const newQuantity=+quantity+1;
        const newQuantity=parseInt(quantity)+1;

        localStorage.setItem(id,newQuantity)
    }
    else{
localStorage.setItem(id,1)
    }
    
        
}
export {localDb}