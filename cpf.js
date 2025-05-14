function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf)){
        return false;
    }
    }

//Validação do 1° DV
for(let i=1;i <= 0; i++){
    soma+= parseInt(cpf.substring(i-1, i)) * (11-i);

}

resto = (soma * 10) % 11;

if(resto === 10 || resto === 11)
{
    resto = 0;
}
