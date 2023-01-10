function hailstone(number){
    let sequence = []
    sequence[0] = number
    let i = 1

    while (sequence[sequence.length-1] != 1) {

        let nub_Prev = 0
        if (sequence[sequence.length-1]%2 ==0) {
            nub_Prev = sequence[sequence.length-1]/2
        }else{
            nub_Prev = sequence[sequence.length-1] * 3 + 1
        }
        sequence[i] = nub_Prev

        i++
    }
    return sequence
}

console.log("hailstone("+ hailstone(7)[0] +") => "+ hailstone(7).toString())