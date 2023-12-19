export default function cabecalho() {
    const header = document.querySelector('.cabecalho')
    const local = header.dataset.local

    let urlHome = '../index.html'
    let urlPaginas = './'
    let urlImagens = '../img/'

    if (local == 'home') {
        urlHome = '#'
        urlPaginas = './pages/'
        urlImagens = './img/'
    }


    header.innerHTML = `
        <a href='${urlHome}' class="cabecalho__logo-link">
            <h1 class="cabecalho__logo">
                <span class='logo--negrito'>R</span><span class="cabecalho__logo-final">bank</span>
            </h1>
        </a>
        <ul class="cabecalho-lista">
            <li class="cabecalho-lista__item">
                <a href="${urlPaginas}sobre.html" class="cabecalho-lista__link">Sobre</a>
            </li>
            <li class="cabecalho-lista__item">
                <a href="${urlHome}#servicos" class="cabecalho-lista__link">Serviços</a>
            </li>
            <li class="cabecalho-lista__item">
                <input class="cabecalho__pesquisa" type="search" placeholder="Busque aqui">
            </li>
            <li class="cabecalho-lista__item">
                <a href="${urlPaginas}abrir-conta-form.html" class="cabecalho-lista__item-botao cabecalho-lista__item-botao--azul">Abrir conta</a>
            </li>
            <li class="cabecalho-lista__item">
                <a href="${urlPaginas}conta.html" class="cabecalho-lista__item-botao">Acessar conta</a>
            </li>
        </ul>
    `
}
