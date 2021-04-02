import view from "../views/home.html";

export default()=>{


    const element = document.createElement('div');
    element.innerHTML= view;

   const btn= element.querySelector('#btnClick');
    btn.addEventListener('click',()=>{
    alert('alert capturado desde controlador')

})
    return element;

};