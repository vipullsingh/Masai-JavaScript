function sumRelatedProblem(N) {
    let sum = 0
    for(let i=0;i<=N;i++)
    {
        if(i%2==0)
            sum = sum + i
    }
    console.log(sum)
}
