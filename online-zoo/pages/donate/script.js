const menuButton = document.querySelector(".header__burger");
const menuButton1 = document.querySelector(".header__menu");
const menuModal = document.querySelector(".header__modal");
const contentBody = document.querySelector("body");

menuButton.onclick = function () {
   menuButton.classList.toggle("active");
   menuButton1.classList.toggle("active");
   menuModal.classList.toggle("active");
   contentBody.classList.toggle("lock");
}
menuButton1.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   menuModal.classList.remove("active");
   contentBody.classList.remove("lock");
}
menuModal.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   menuModal.classList.remove("active");
   contentBody.classList.remove("lock");
}

// -------- ANOTHER = 4 numb ---------

const  inputLength = document.querySelector('.feed__input-number')

inputLength.addEventListener('input', (event) => {
  if (inputLength.value.length > 4) {
    inputLength.value = inputLength.value.slice(0,4); 
  }
})

// -------- ANOTHER ---------

let form = document.forms.sum;
let inputAnother = document.querySelector(".feed__input-number");

for(let e of form.querySelectorAll("[name='point']"))
   e.onchange = delivery_change;

   function delivery_change(){
      inputAnother.value = this.value;
   }

document.querySelector(".feed__input-number").addEventListener("input", () => {
   let valueTrue = +document.querySelector(".feed__input-number").value;

   for(const radio of document.querySelectorAll('.my-radio')){
      radio.checked = false;
   }
   const selected = document.querySelector(`#p${valueTrue}`);
   if (selected) selected.checked = true;
   console.log(document.querySelector(`#p${valueTrue}`))
});