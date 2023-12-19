const rostinho = document.querySelector('[data-video-botao]')
const textoRostinho = document.querySelector('.formulario__texto')
const camera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')
const botaoTirarFoto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector('[data-video-canvas]')
const mensagem = document.querySelector('[data-mensagem]')
const botaoEnviarFoto = document.querySelector('[data-enviar]')

let imagemURL = ''

rostinho.addEventListener('click', async function () {
    // requer acesso à câmera do usuário
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    rostinho.style.display = 'none'
    textoRostinho.style.display = 'none'
    camera.style.display = 'block'

    video.srcObject = iniciarVideo
})

botaoTirarFoto.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
    imagemURL = canvas.toDataURL('image/jpeg')

    camera.style.display = 'none'
    mensagem.style.display = 'block'
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem('cadastro')
    const converteRetorno = JSON.parse(receberDadosExistentes)

    converteRetorno.imagem = imagemURL

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = './abrir-conta-form-3.html'
})

