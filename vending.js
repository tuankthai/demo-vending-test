function noOver20Bill(bill) {

    //if  bill is a string
    //then return "fake bill"
    if (typeof bill === "string") return "fake bill"

     return bill <= 20
    
}

module.exports = {
    noOver20Bill
}