{

    //

    

    function processValue(value: string | number): number{
        if(typeof value === "string"){
            return value.length
        }
        else{
            return value *2 ;
        }

    }
    const stringValue = "hello";
    const numberValue = 100;

    console.log(processValue(stringValue));
    console.log(processValue(numberValue));




    //

}