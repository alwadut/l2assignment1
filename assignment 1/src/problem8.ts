{
    //

    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Number must be non-negative"));
                } else {
                    resolve(n * n);
                }
            }, 1000); 
        });
    }
    
    // Example usage
    squareAsync(4)
        .then(console.log) 
        .catch(console.error);
    
    squareAsync(-3)
        .then(console.log)
        .catch(console.error); 








    //
}