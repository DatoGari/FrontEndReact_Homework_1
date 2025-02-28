// Task 1

function equalityCheck(a,b) {
    if (a === b) {
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
}

console.log(equalityCheck(5,5))
console.log(equalityCheck(4,5))

// Task 2

function f2c(f) {
    if (typeof f == "number"){
        return (f-32)*5/9
    }else{
        return false
    }
    
}

console.log(f2c(86))
console.log(f2c("86"))

// Task 3

function calculate(a,b,operation){
    if (typeof a == "number" && typeof b == "number"){
        switch (operation){
            case "+":
                return a + b
                break
            case "-":
                return a - b
                break                    
            case "*":
                return a * b
                break
            case "/":
                return a / b
                break
            default:
                return false    
        }
    }else{
        return false
    }
}

console.log(calculate(3,5,"*"))
console.log(calculate(4,"abc","*"))
console.log(calculate(7,8,"haha"))