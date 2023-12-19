export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    if (calculaIdade(dataNascimento) < 18) {
        //console.log('É maior de idade')
        campo.setCustomValidity('Usuário não é maior de idade.')
    }
}

function calculaIdade(nascimento) {
    const dataAtual = new Date()

    const idade = dataAtual.getFullYear() - nascimento.getFullYear()
    const meses = dataAtual.getMonth() - nascimento.getMonth()
    if (meses < 0 || meses === 0 && dataAtual.getDate() < nascimento.getDate()) {
        idade--
    }

    return Number(idade)
}