function patternW(n) {
    let i, j,k;
  let str = ""
    for (i = n - 1; i >= 0; i--) {
        //printing Spaces 0 - N space accordingly under first slash line
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }
        // printing first slash line
        str = str + "\\";
        //printing (n-1)*2 spaces above 1st slash line
        for (j = 0; j < (i * 2); j++)
            str = str + " ";
        // printing 2nd slash line
        if (i >= 0)
            str = str + "\/";
        // printing spaces under 2nd Slash line for half triangle
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }    
        //repeating same spaces to form another half triangle of space
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }     
        // printing 3rd slash line
        str = str + "\\";
        // priting spaces above 3rd slash
        for (j = 0; j < (i * 2); j++)
            str = str + " ";
        // printing 4th slash line
        if (i >= 0)
            str = str + "\/";
      
      
      
      str = str + "\n";
    }
  console.log(str)
}
