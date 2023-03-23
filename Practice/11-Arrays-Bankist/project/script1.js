'use strict';

const account1 = {
  owner: 'Poonam Ghule',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, -400, 666],
  interestRate: 1.2,
  pin: 1212,
};

const account2 = {
  owner: 'Pratiksha Kharade',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30, -87, -98],
  interestRate: 1.5,
  pin: 1313,
};

const account3 = {
  owner: 'Monika Gosavi',
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 555, 323, 567],
  interestRate: 0.7,
  pin: 1414,
};

const account4 = {
  owner: 'Shital Ghule',
  movements: [430, 1000, 700, 50, 90, -98, -765, 899],
  interestRate: 1,
  pin: 1515,
};

const account5 = {
  owner: 'Rupali Shelke',
  movements: [430, 1000, 700, 50, 90, -567, 765, -345],
  interestRate: 1,
  pin: 1616,
};
const accounts = [account1, account2, account3, account4, account5];

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


function updateMovements(m) {
  //console.log(m) 
  m.forEach(function (el, index) {
    let text = el > 0 ? "deposit" : "withdrawal"
    let html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${text}">${index + 1} ${text}</div>
  <div class="movements__value">${el}€</div>`
    containerMovements.insertAdjacentHTML("beforeend", html)
  })
}



//user creation

function createUserName(access) {
  access.forEach(function (el) {
    el.username = el.owner.split(' ').map(function (el) {
      return el[0]
    }).join('').toLowerCase()
  })
}
createUserName(accounts)
//console.log(accounts)

//curremt account
let currentAccount;
//console.log(currentAccount)

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()
  let User = inputLoginUsername.value
  let Pin = inputLoginPin.value
  currentAccount = accounts.find(function (el) {
    return el.username == User && el.pin == Pin
  })
  console.log(currentAccount)
  containerApp.style.opacity = "100"
  inputLoginUsername.value = ""
  inputLoginPin.value = ""
  //console.log(labelWelcome.textContent)

  labelWelcome.textContent = `welcome ${currentAccount.owner.split(' ')[0]}`

  updateMovements(currentAccount.movements)
})




