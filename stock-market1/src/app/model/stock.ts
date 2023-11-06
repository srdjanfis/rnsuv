export class Stock {
    public favourite: boolean = false;

    constructor(public name: string,
                public code: string,
                public price: number,
                public previousPrice: number){

                }
                
    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }

    isLargeChange(): boolean{
        return Math.abs((this.price/this.previousPrice)-1) > 0.1;
    }
}
