/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// variables 
// num1 = Number(button text)
// num2 = Number(button text)
// operator - example "+", "-", "/", "*"
// result = example - "3.14"

let num1 = 0;
let num2 = 0;
let operator;
let result = 0;

/*------------------------ Cached Element References ------------------------*/
// // dom elements -
// buttons 
// div.number
// div.operator
// div.equal
// result - .display
const numberButtonEls = document.querySelectorAll('.number');
const operatorButtonEls = document.querySelectorAll('.operator');
const equalsButtonEl = document.querySelector('.equals');
const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

// // event handler - 
// click handler for each group of elements 
// // functionality will be tied to its button type

const updateNumbers = (event) => {
    console.log(event.target.textContent)
// thinking about user flow: num1, operator, num2
// if there is no operator, we are filling out num1
// if there is an operator, we are filling out num2
    if (!operator){
        if (!num1){
        num1 = event.target.textContent 
        } else {
        num1 += event.target.textContent
        }
        updateResult()
    }else{
        if (!num2){
            num2 = event.target.textContent 
        } else {
            num2 += event.target.textContent
        }
        updateResult()
    }
    console.log(`num1: ${num1}`, `operator: ${operator}`, `num2: ${num2}`)
}
// updates the number variable to whatever text content of the button is    
// checks if num1 has a value, if not then num1 becomes whatever text content value associated with the button event -> update result

const updateOperators = (event) => {
    operator = event.target.textContent
    console.log(event.target.textContent)

    if (operator == 'C'){
        result = 0
        num1=0
        num2=0
        operator=''

    }

    updateOperator()

}
// updates the operator variable to whatever text content of the button is

const calculate = (event) => {
    if (operator == '+'){
        result = Number(num1)+Number(num2)
    } else {
        if (operator == '-'){
            result = Number(num1)-Number(num2)
        } else {
            if (operator == '*'){
                result = Number(num1)*Number(num2)
            } else {
                if (operator == '/')
                    result = Number(num1)/Number(num2)
            }
        }
    }
    render()
}
//calculate function to execute the operation between num1 and num2 depending on the corresponding textvalue of the operator button clicked
// all num variables are converted to numbers using Number()

numberButtonEls.forEach((numBut) => {
    numBut.addEventListener('click', updateNumbers)
})
// calls updateNumbers function for each number button click

operatorButtonEls.forEach((opBut)=> {
    opBut.addEventListener('click', updateOperators)
})

equalsButtonEl.addEventListener('click', calculate)

/*-------------------------------- Functions --------------------------------*/

function render() {
    // render is updating the text content of display
    displayEl.textContent = result
}

function updateOperator() {
result = operator;
render()
}
// function to display the operator text content using the render function

function updateResult(updateOperator) {
    if (!operator){
        result = num1
    } else {
        result = num2
    }
    render()
}

// function declaration hoists to the top in run time for event handlers to call on


// Alternatively we can use eval()
// make string variable
// every button press, add textcontent of button to string