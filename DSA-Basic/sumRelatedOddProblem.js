function sumRelatedOddProblem(n) {
    let sum = 0
    for(let i=0;i<=n;i++)
    {
        if(i%2==1)
            sum = sum + i
    }
    console.log(sum)
}
