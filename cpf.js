function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf)){
        return false;
    }
    }