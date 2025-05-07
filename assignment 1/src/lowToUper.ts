{

    //



    
    type Uppercase ={
        input:string;
        toUpper?:boolean;
    };

    // const uppercase : Uppercase ={
    //     input:"HELLO",
    //     toUpper:false,
    // };
   
    function formatString(input: string, toUpper?: boolean){
        if(toUpper === false){
            console.log(input.toLowerCase());
            
        }
      else{
            
        console.log(input.toUpperCase());
        }
       
    }

     formatString("Hello",true);
     formatString("Hello",false);
     formatString("4444a",true);
     formatString("SOB KISU MATHAR UPRE DIYA JAY",false);
    
    









//

}