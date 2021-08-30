export default function Deserts() {
    return (   
        <div class="barra-sobremesa">
        <p class="titulo">Por fim, sua sobremesa</p>
        <div class="opcoes">
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/pudim.png" alt="pudim"/>
                </div>
                <p class="item">Pudim</p>
                <p class="descricao">Apenas pudim</p>
                <p class="preco">R$ 7,90</p>
                <p class="check"></p>
            </div>
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/bolo de chocolate.jpg" alt="bolo_de_chocolate"/>
                </div>
                <p class="item">Bolo de Chocolate</p>
                <p class="descricao">Fatia de um bolo de chocolate</p>
                <p class="preco">R$ 5,90</p>
                <p class="check"></p>
            </div>
            <div class="opcao" onclick="selecionar_opcao(this)">
                <div class="container-img">
                    <img src="assets/img/açai.jpg" alt="açai"/>
                </div>
                <p class="item">Açai</p>
                <p class="descricao">Bela taça de Açai</p>
                <p class="preco">R$ 14,90</p>
                <p class="check"></p>
            </div>
        </div>
    </div>
    );
}