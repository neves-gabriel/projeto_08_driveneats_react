export default function Drinks() {
    return (   
        <div class="barra-bebida">
        <p class="titulo">Agora, sua bebida</p>
        <div class="opcoes">
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/coquinha_gelada.png" alt="coquinha_gelada"/>
                </div>
                <p class="item">Coquinha gelada</p>
                <p class="descricao">Lata 350ml</p>
                <p class="preco">R$ 4,90</p>
                <p class="check"></p>
            </div>
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/del-valle-lata.jpg" alt="del-valle-lata"/>
                </div>
                <p class="item">Suco Del Valle</p>
                <p class="descricao">Lata 390ml</p>
                <p class="preco">R$ 7,90</p>
                <p class="check"></p>
            </div>
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/agua-prata.jpg" alt="agua-prata"/>
                </div>
                <p class="item">Água Mineral</p>
                <p class="descricao">Sem Gás 310ml</p>
                <p class="preco">R$ 2,90</p>
                <p class="check"></p>
            </div>
        </div>
    </div>
    );
}