export class Product {

    public favorite: boolean = false;

    constructor(
        public code: string,
        public name: string,
        public price: number){

    }

    aNullProduct(){
        this.code = "";
        this.name = "";
        this.price = 0.0;
        this.favorite = false;
    }

}
