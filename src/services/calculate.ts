type calculateFnType = (x : number, y : number)  => number

const calculate = (fnref : calculateFnType , a : number, b : number) : number => fnref(a,b)