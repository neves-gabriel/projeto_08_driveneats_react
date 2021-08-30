export default function Main_Dishes() {
    return (   
        <div class="barra-prato">
            <p class="titulo">Primeiro, seu prato</p>
            <div class="opcoes">
                <div class="opcao" onclick="selecionar_opcao(this)">
                    <div class="container-img">
                        <img src="assets/img/frango_yin_yang.png" />
                    </div>
                    <p class="item">Frango Yin Yang</p>
                    <p class="descricao">Um pouco de batata, um pouco de salada</p>
                    <p class="preco">R$ 14,90</p>
                    <p class="check"></p>
                </div>
                <div class="opcao" onclick="selecionar_opcao(this)">
                    <div class="container-img">
                        <img src="assets/img/feijoada.jpg" />
                    </div>
                    <p class="item">Feijoada</p>
                    <p class="descricao">Bela feijoada de feijão!</p>
                    <p class="preco">R$ 19,90</p>
                    <p class="check"></p>
                </div>
                <div class="opcao" onclick="selecionar_opcao(this)">
                    <div class="container-img">
                        <img src="assets/img/filet-mignon-a-parmegiana.jpg" alt="filet-mignon-a-parmegiana"/>
                    </div>
                    <p class="item">Filet Parmegiana</p>
                    <p class="descricao">Delícia de Filet Mignon a parmegiana</p>
                    <p class="preco">R$ 24,90</p>
                    <p class="check"></p>
                </div>
            </div>
        </div>

    );
}