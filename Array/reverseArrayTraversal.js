function reverseArrayTraversal(n, arr){
    let s = ""
    for(let i=n-1;i>=0;i--)
    {
        s = s + arr[i] + " "
    }
    console.log(s)
}
