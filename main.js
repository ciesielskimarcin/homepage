const firstName = "Marcin";
const age = "33";


console.log(`Nazywam sie ${firstName} i mam ${age} lata`);


const p =document.querySelector('.article__paragraph--js')
p.innerHTML=' '


function welcome (name, age) 
{
    return "My name is "+ name + " and I am " + age + " years old"; 
}


const result = welcome("darek", "23");
console.log(welcome("Gnoj", 45));