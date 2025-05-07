{
//

    type Books = {
        title:string,
        rating:number
    }

const books :Books [] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  function filterByRating(books:Books[]){
   console.log(books.filter(books => books.rating >= 4));

  }

    filterByRating(books)






//


}