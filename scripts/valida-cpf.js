export default function ehCPF(campo) {
	const cpf = campo.value.replace(/\.|-/g, '')
	if (!verificaDV(cpf) || !verificaNumerosRepetidos(cpf)) {
        //console.log(`${campo.value} é um CPF válido`)
        campo.setCustomValidity('Esse CPF não é válido')
	}
}

function verificaDV(cpf) {
	let primeiroDigitoVdd = verificaCadaDV(cpf, 1)

	let segundoDigitoVdd = verificaCadaDV(cpf, 0)

	if (primeiroDigitoVdd && segundoDigitoVdd) {
		return true
	}
	return false
}

function verificaCadaDV(cpf, peso) {
	let soma = 0
	let cpfQuebrado = cpf.split('')

	for (let i = 0; i < 10 - peso; i++) {
		soma += cpfQuebrado[i] * (i + peso)
	}

	let resto = soma % 11

	if (resto == 10) {
		resto = 0
	}

	return resto == cpfQuebrado[10 - peso]
}

function verificaNumerosRepetidos(cpf) {
	const numerosRepetidos = ['11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999', '00000000000']

	return !numerosRepetidos.includes(cpf)
}
