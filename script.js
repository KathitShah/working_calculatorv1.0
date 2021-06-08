class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = '0'
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()

    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  document.addEventListener("keypress",function (event){
    makeSound(event.key);
    // buttonAnimation(event.key);
  });
  function makeSound(key){
    let number;
    switch (key) {
      case "1":
      number = 1;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "2":
      number = 2;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "3":
      number = 3;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "4":
      number = 4;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "5":
      number = 5;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "6":
      number = 6;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "7":
      number = 7;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "8":
      number = 8;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "9":
      number = 9;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case "0":
      number = 0;
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
        case ".":
      number = '.';
      calculator.appendNumber(number)
      calculator.updateDisplay()
        break;
      default:console.log(buttonInnerHTML);
    }
}
// function buttonAnimation(currentKey){

//     var activeButton = document.querySelector("." + currentKey);
  
//     activeButton.classList.add("pressed");
  
//     setTimeout (function(){
//       activeButton.classList.remove("pressed");
  
//     }, 100);
  
//   }
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

  document.addEventListener("keypress",function (event){
    makeOperation(event.key);
    // buttonAnimation(event.key);
  });
  function makeOperation(key){
    var operation;
    switch (key) {
      case "+":
      operation = '+'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
        case "-":
      operation = '-'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
        case "/":
      operation = '÷'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
        case "÷":
      operation = '÷'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
        case "x":
      operation = '*'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
        case "*":
      operation = '*'
      calculator.chooseOperation(operation)
      calculator.updateDisplay()
        break;
      default:console.log(buttonInnerHTML);
    }
}
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  document.addEventListener("keypress",function (event){
    if (event.keyCode === 13) {
        calculator.compute()
        calculator.updateDisplay()
       }
       else if (event.key === '=') {
        calculator.compute()
        calculator.updateDisplay()
       }
  });

  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
  document.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){
    	calculator.delete()
        calculator.updateDisplay()
    }
};