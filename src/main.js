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
