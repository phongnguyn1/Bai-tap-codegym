function findSnt (array) {
    let daysonguyento=[] ;
    array.forEach((num)=> {
        let b=0;
        for (let i = 0; i <=num ; i++) {
            if (num%i==0);{
                b++
            }
        }
        if (b===2)
            daysonguyento.push (num)

    })
    console.log(daysonguyento);
}
findSnt[(1,4,5,6,7,8,9,13)]