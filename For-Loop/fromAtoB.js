function fromAtoB(max,min){
    //write code here
    if(max<min){
        let temp = max
        max=min
        min = temp
    }
    for(let i=min;i<max;i++)
    {
        console.log(i)
    }
}
