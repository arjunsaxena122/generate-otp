const generateOtp = (digit) =>{
    let colletDigit = ""
    for(let i = 0 ; i < digit ; i++){
        colletDigit += Math.floor(Math.random() * 10)
    }
    return colletDigit
}

export default generateOtp;