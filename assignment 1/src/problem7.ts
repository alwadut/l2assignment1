{
    // Enum is short for "enumerations", which means "specifically listed".



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if (day === Day.Saturday || day === Day.Sunday){
            return "weekend";
        }
        return "WeakDay";
      }

      console.log(getDayType(Day.Monday));
      console.log(getDayType(Day.Sunday));
      console.log(getDayType(Day.Tuesday));
      console.log(getDayType(Day.Wednesday));
      









    //
}