function fromAtoB(max,min){
    if(max<min)
    {
        let temp = max
        max=min
        min = temp
    }
    while(min<max)
    {
        console.log(min)
        min++
    }
}
