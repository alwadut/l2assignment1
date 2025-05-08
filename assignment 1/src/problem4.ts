{
    //
    class Vehical {
       private Make:string
       private Year:number
       



        constructor (make:string,year:number){
            this.Make =make;
            this.Year=year;
           
        }
        getInfo():string{
            return`Make:${this.Make},Year ${this.Year}`;
        }

    }

    class Car extends Vehical{
        Model:string;
        

        constructor(  make:string, year:number,model:string){
            super(make,year);
            this.Model = model;
        }
        getModel():string{
            return `Model :${this.Model}`
        }
    }

    const myCar = new Car ("toyota",2000,"Corolla")
    console.log(myCar.getInfo());
    console.log(myCar.getModel());

  

    //
}