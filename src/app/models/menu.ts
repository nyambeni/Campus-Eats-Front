
export class Menu{
    id: number;
    name: string;
    price: number;
    imagePath: string;
    ingredients: string;
    description: string;
    qty: number;
    


    //create constructor

    constructor( id: number , name: string , price: number , imagePath: string , 
        ingredients: string , description: string, qty: number){
        this.id = id
        this.name = name 
        this.price = price
        this.imagePath = imagePath 
        this.ingredients = ingredients
        this.description = description 
        this.qty = qty 
    

    }
}