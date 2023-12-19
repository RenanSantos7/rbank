export default function breadcrumb() {
    const elemBreacrumb = document.querySelector('.breadcrumb')
    const passo = elemBreacrumb.dataset.passo
    
    const linkInicio = document.createElement('a')
    linkInicio.textContent = 'Início'
    linkInicio.href = '../index.html'

    const passo1 = document.createElement('a')
    passo1.textContent = 'Abrir conta'
    
    
    const passo2 = document.createElement('a')
    passo2.textContent = 'Reconhecimento facial'

    const passo3 = document.createElement('a')
    passo3.textContent = 'Conclusão'

    if (passo == 1) {
        passo1.classList.add('breadcrumb__pagina-atual')

        elemBreacrumb.appendChild(linkInicio)
        elemBreacrumb.appendChild(passo1)
    }

    if (passo == 2) {
        passo1.href = './abrir-conta-form.html'
        passo2.classList.add('breadcrumb__pagina-atual')

        elemBreacrumb.appendChild(linkInicio)
        elemBreacrumb.appendChild(passo1)
        elemBreacrumb.appendChild(passo2)
    }

    if (passo == 3) {
        passo1.href = './abrir-conta-form.html'
        passo2.href = './abrir-conta-form-2.html'
        passo3.classList.add('breadcrumb__pagina-atual')

        elemBreacrumb.appendChild(linkInicio)
        elemBreacrumb.appendChild(passo1)
        elemBreacrumb.appendChild(passo2)
        elemBreacrumb.appendChild(passo3)
    }

}