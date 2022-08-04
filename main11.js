// const ul = document.querySelectorAll('.items')[0];
// ul.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.lastElementChild.innerText = 'Hello';
// ul.children[1].innerHTML= "<h1>Hello</h1>";
// ul.lastElementChild.style.background-color='red';
const btn=document.querySelectorAll('#btn')[0];
// btn.addEvenListener("click",display(e));

// function display(e)
// {
//    console.log(e.target);
// }

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.tel');
const mobileNo = document.querySelector('#tel');
btn.addEventListener("click",(e)=>{
    console.log(e.target.id);
    document.querySelector('#btn').style.background='red';
    document.querySelector('#btn').style.color='Yellow';
    document.querySelector('#my_fieldset').style.background='Yellow';
    document.querySelector('#name').style.background='orange';
    document.querySelector('#email').style.background='orange';
    document.querySelector('#tel').style.background='orange';
    document.querySelector('#date').style.background='orange';
    document.querySelector('#time').style.background='orange';
    console.log(nameInput);
    document.querySelector('body').style.backgroundImage="url(4893706.webp)";
    if(nameInput.value=='')
    {
        document.getElementById('error').innerHTML="Please enter the name";
    }
})


