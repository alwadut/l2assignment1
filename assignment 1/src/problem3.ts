{
    //

    type GenericArray <T> = Array<T>

// const array1 : GenericArray<string> = ["2","4"];
// const array5 : GenericArray<string> = ["3","6"];
// const array2 : GenericArray<number> = [2,3];
// const array3 : GenericArray<boolean> = [true,false];




function concatenateArrays<T>(...arrays: T[][]): T[]{
   return arrays.flat();
};
// const array1 = [1,2,3];
// const array2 = [1,3,4];
// const array3 = [3,7,5];

const result =  concatenateArrays([1, 2], [3, 4], [5]);
console.log(result);





    //
}