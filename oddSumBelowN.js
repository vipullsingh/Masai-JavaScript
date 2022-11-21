function oddSumBelowN(num) {
    let sum = 0
    let i = 1
    while(i<=num)
    {
        if(i%2==1)
            sum += i
        i++
    }
    console.log(sum)
    
}
