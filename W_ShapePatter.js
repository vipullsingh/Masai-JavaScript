function patternW(n) {
    let i, j,k;
  let str = ""
    for (i = n - 1; i >= 0; i--) {
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }
 
        str = str + "\\";
 
        for (j = 0; j < (i * 2); j++)
            str = str + " ";
 
        if (i >= 0)
            str = str + "\/";
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }    
        for (j = n - 1; j > i; j--) {
            str = str + " ";
        }      
        str = str + "\\";
              for (j = 0; j < (i * 2); j++)
            str = str + " ";
        if (i >= 0)
            str = str + "\/";
      
      
      
      str = str + "\n";
    }
  console.log(str)
}
