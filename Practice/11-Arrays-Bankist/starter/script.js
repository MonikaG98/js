'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',  // js
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis', // jd
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams', // stw
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith', // ss
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};



const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////////

//username creation

function updateMovement(Movs) {
  // console.log(Movs)
  containerMovements.innerHTML = ""
  Movs.forEach(function (el, index) {
    let type = el > 0 ? "deposit" : "withdrawal"
    let html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
  <div class="movements__value">${el}€</div>`

    containerMovements.insertAdjacentHTML('beforeend', html)
  })
}

function calculateSummery(currentAccount) {
  let deposit = currentAccount.movements.filter(function (el) {
    return el > 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)

  accounts.deposit = deposit
  labelSumIn.textContent = `${deposit}€`

  let withdrawal = currentAccount.movements.filter(function (el) {
    return el > 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)
  accounts.withdrawal = withdrawal
  labelSumOut.textContent = `${withdrawal}€`

  let bal = currentAccount.movements.reduce(function (acc, el) {
    return acc + el
  }, 0)
  currentAccount.bal = bal
  labelBalance.textContent = `${bal}€`
}


function createUserName(accs) {
  accs.forEach(function (element) {
    element.username = element.owner.split(' ').map(function (el) {
      return el[0]
    }).join('').toLowerCase()
  })
}
createUserName(accounts)
console.log(accounts)


//Currentcurrent
let currentAccount;
console.log(currentAccount)

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()
  let userName = inputLoginUsername.value
  let pinC = inputLoginPin.value
  currentAccount = accounts.find(function (el) {
    return el.username == userName && el.pin == pinC
  })
  console.log(currentAccount)
  containerApp.style.opacity = '100'
  inputLoginUsername.value = ''
  inputLoginPin.value = ''
  console.log(labelWelcome.textContent)
  labelWelcome.textContent = ` welcome ${currentAccount.owner.split(' ')[0]} `

  updateMovement(currentAccount.movements)
  calculateSummery(currentAccount)
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(currentAccount.bal)
  let receieveuser = inputTransferTo.value
  let transamount = Number(inputTransferAmount.value)
  let transferuser = accounts.find(function (el) {
    return el.username == receieveuser
  })
  if (receieveuser && currentAccount.bal > transamount && currentAccount.userName !== receieveuser)
  transferuser.movements.push(transamount)
  currentAccount.movements.push(-transamount)
  inputTransferTo.value = ''
  inputTransferAmount.value = ''
  updateMovement(currentAccount.movements)
  calculateSummery(currentAccount)
  console.log(currentAccount)
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  let request = Number(inputLoanAmount.value)
  if (request > 0) {
    currentAccount.movements.push(request)
    updateMovement(currentAccount.movements)
    calculateSummery(currentAccount)
  }
  inputLoanAmount.value = "";

btnClose.addEventListener('click',function(e){
  e.preventDefault()
  let close = inputCloseUsername.value
  let pin1 = Number(inputClosePin.value)
  let index = accounts.findIndex(function(el){
    return el.userName == close && el.pin == pin1
  })
if(index)
{
  accounts.splice(index,1)
}
})
inputCloseUsername = ""
inputClosePin=""
})



