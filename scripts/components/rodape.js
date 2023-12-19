export default function rodape() {
    const rodape = document.querySelector('.rodape')
    const local = rodape.dataset.local
    let urlPaginas = './'
    let urlImagens = '../img/'

    if (local == 'home') {
        urlPaginas = './pages/'
        urlImagens = './img/'
    }

    rodape.innerHTML = `
        <section class="rodape__empresa">
            <h2 class="rodape__titulo">O Rbank</h2>
            <ul class="rodape__lista">
                <li>
                    <a href="${urlPaginas}sobre.html" class="rodape__link">Sobre</a>
                </li>
                <li>
                    <a href="${urlPaginas}faq.html" class="rodape__link">Perguntas frequentes</a>
                </li>
                <li>
                    <a href="${urlPaginas}carreira.html" class="rodape__link">Carreira</a>
                </li>
            </ul>
        </section>
        <section class="rodape__servicos">
            <h2 class="rodape__titulo">Serviços</h2>
            <ul class="rodape__lista">
                <li>
                    <a href="${urlPaginas}conta" class="rodape__link">Conta corrente</a>
                </li>
                <li>
                    <a href="${urlPaginas}conta" class="rodape__link">Conta PJ</a>
                </li>
                <li>
                    <a href="${urlPaginas}cartao.html" class="rodape__link">Cartão de crédito</a>
                </li>
            </ul>
        </section>
        <section class="rodape__contato">
            <h2 class="rodape__titulo">Contato</h2>
            <ul class="rodape__lista">
                <li>
                    <a href="#" class="rodape__link">0800 040 25 08</a>
                </li>
                <li>
                    <a href="#" class="rodape__link">meajuda@rbank.com.br</a>
                </li>
                <li>
                    <a href="#" class="rodape__link">ouvidoria@rbank.com.br</a>
                </li>
            </ul>
        </section>
        <section class="rodape__redes-sociais">
            <h2 class="rodape__titulo">Acesse nossas redes</h2>
            <ul class="rodape__lista redes-sociais__lista">
                <li><img src="${urlImagens}Facebook.png" alt="ícone do facebook"></li>
                <li><img src="${urlImagens}Youtube.png" alt="ícone do youtube"></li>
                <li><img src="${urlImagens}Whatsapp.png" alt="ícone do whatsapp"></li>
                <li><img src="${urlImagens}Instagram.png" alt="ícone do instagram"></li>
            </ul>
            <h2 class="rodape__logo"><span class="logo--negrito">R</span>bank</h2>
        </section>
    `
}
