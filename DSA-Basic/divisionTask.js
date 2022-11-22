function divisionTask(N) {
    let x = Math.floor((32/N))
    if(x==0)
        console.log("Too Low")
    else if(x<=0 || x>32)
        console.log("-1")
    else
        console.log(x)
}
