import { differenceInDays, subBusinessDays } from "date-fns";
import {substactNumbers} from "./calculate";
import { addNumbersInArray } from "./calculate";

const firstName = "Marcin";
const age = "33";


console.log(`Nazywam sie ${firstName} i mam ${age} lata`);


const p =document.querySelector('.article__paragraph--js')



function welcome (name, age) 
{
    return "My name is "+ name + " and I am " + age + " years old"; 
}


const result = welcome("darek", "23");
console.log(welcome("Gnoj", 45));


const hamburger= document.querySelector('.hamburger--js')

hamburger.addEventListener('click', ()=> {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})


const resultDay = differenceInDays(
    new Date(2012, 6, 2, 0, 0),
    new Date(2011, 6, 2, 23, 0)
  )

  console.log(resultDay)

  const substract = substactNumbers(10,6);
  console.log(substract); 


  const button = document.querySelector('.navigation__link--button--js');

  button.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--backgroundColor', '#DCFFB7');
    document.documentElement.style.setProperty('--textColor', '#FF6868')
  })


  elements = [1,2,55,5,6,7];



  const dupa = addNumbersInArray(elements);
  console.log(dupa);

