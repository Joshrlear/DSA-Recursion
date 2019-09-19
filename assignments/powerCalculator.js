/* 

Write a function called powerCalculator() that takes 
two parameters, an integer as a base, and another 
integer as an exponent. The function returns the 
value of the base raised to the power of the 
exponent. Use only exponents greater than or equal 
to 0 (positive numbers)

powerCalculatorRec(10,2) should return 100
powerCalculatorRec(10,-2) should return exponent should be >= 0 

*/

powerCalculator = (base, exp) => {
    //base
    if (exp === 0) {
        const result = '>= 0'
        console.log(result)
        return result;
    }
    //general
    console.log(Math.pow(base, exp))
    const result = Math.pow(base, exp) + powerCalculator(base, exp - 1)
    return;
}
powerCalculator(10,2);