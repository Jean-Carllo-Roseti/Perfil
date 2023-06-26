const form = document.getElementById('formJS');
const nomeBeneficiarioInput = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    nomeBeneficiarioInput.addEventListener('keyup', function(e) {
        const containerMensagemFim = document.querySelectorAll('.mensagemFim, .negativo, .positivo');
        containerMensagemFim.forEach(element => {
            element.innerHTML = '';
            element.style.display = 'none';
        });
    
        formEValido = validaNome(e.target.value);
    });
    


    
    const disponivelInput = document.getElementById('naConta');
    const utilizadoInput = document.getElementById('limite');

    const nomeBeneficiario = nomeBeneficiarioInput.value;
    const disponivel = disponivelInput.value;
    const utilizado = utilizadoInput.value;

    function validaCredito(disponivel, utilizado) {
        const resultado = disponivel - utilizado;
        return resultado;
    }

    const resultado = validaCredito(disponivel, utilizado);

    const possuiSaldo = `Você possui \$${resultado} de créditos.`;
    const fimSaldo = 'Seu crédito já foi utilizado.';
    const deveSaldo = `Você está em défice de \$${resultado} crédito.`;
    const erroNome = `Nome está incompleto.`;

    formEValido = validaNome(nomeBeneficiario);

    if (formEValido) {

        nomeBeneficiarioInput.value = '';
        disponivelInput.value = '';
        utilizadoInput.value = '';
        
        
    } else {
        
    }

    if (validaCredito(disponivel, utilizado) > 0) {
        const containerMensagemFim = document.querySelector('.positivo');
        containerMensagemFim.innerHTML = possuiSaldo;
        containerMensagemFim.style.display = 'block' 
    } else if (validaCredito(disponivel, utilizado) === 0) {
        const containerMensagemFim = document.querySelector('.mensagemFim')
        containerMensagemFim.innerHTML = fimSaldo;
        containerMensagemFim.style.display = 'block'
    } else {
        const containerMensagemFim = document.querySelector('.negativo')
        containerMensagemFim.innerHTML = deveSaldo;
        containerMensagemFim.style.display = 'block'
    }
});

nomeBeneficiarioInput.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiarioInput.classList.add('.error')
        nomeBeneficiarioInput.style.border = '2px solid red'
        document.querySelector('.erroNome').style.display = 'block';
    } else {
        nomeBeneficiarioInput.style =' ';
        document.querySelector('.erroNome').style.display = 'none'
    
    }
})

