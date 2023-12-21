const formulario = document.getElementById("formLogin");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const senhaConfInput = document.getElementById("senhaConfirmacao");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    validaForm();    
});

function validaInput(input, mensagem){
    const formPai = input.parentElement;
    const msgErro = formPai.querySelector("a");

    msgErro.innerText = mensagem;
    formPai.classList.add('erro');
}

function validaNome() {
    const nomeValue = nameInput.value;
    const formPai = nameInput.parentElement;

    if (nomeValue.trim() === "") { 
        validaInput(nameInput, "Preencha com um nome.");
    } else {
       formPai.classList.remove('erro'); 
    }
}

 function validaEmail(){
    const emailValue = emailInput.value;
    const formPai = emailInput.parentElement;
    if (!validaRegex(emailValue)){
        validaInput(emailInput, "Preencha com um email válido!");
    } else{
        formPai.classList.remove('erro');
    }
 }

 function validaRegex(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    return emailRegex.test(email);
 }

function validaSenha(){
    const senhaValue = senhaInput.value;
    const formPai = senhaInput.parentElement;
    if(senhaValue.trim() === ""){
        validaInput(senhaInput, "Preencha com uma senha!")
    } else if (senhaValue.length < 8){
        validaInput(senhaInput, "A senha precisa ter no mínimo 8 dígitos.");
    } else {
        formPai.classList.remove('erro');

    }
}

function validaConfSenha(){
    const senhaValue = senhaInput.value;
    const senhaConfValue = senhaConfInput.value;
    const formPai = senhaConfInput.parentElement;
    if(senhaValue !== senhaConfValue){
        validaInput(senhaConfInput, "As senhas estão diferentes!")
    } else {
        formPai.classList.remove('erro');

    }
}

function validaForm(){
    validaNome();
    validaEmail();
    validaSenha();
    validaConfSenha();

    const formContaineres = formulario.querySelectorAll(".containerCampo");

    const valida = [...formContaineres].every((item) =>{
        return item.className === "containerCampo";
    })
   
    if (valida){
        alert("Informações enviadas! Verifique seu e-mail!");
    }
}




