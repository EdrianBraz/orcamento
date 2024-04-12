document.addEventListener("DOMContentLoaded", function () {
    const buttonclick = document.getElementById("buttonclick");
    const buttonclick2 = document.getElementById("buttonclick2");
    const elementHidden = document.getElementById("elementHidden");
    const elementHidden2 = document.getElementById("elementHidden2");

    function toggleVisibility(button, element, otherButton, originalText) {
        button.addEventListener('click', function () {
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                button.textContent = "Voltar";
                otherButton.classList.add("hidden");
            } else {
                element.classList.add("hidden");
                button.textContent = originalText;
                otherButton.classList.remove("hidden");
            }
        });
    }

    toggleVisibility(buttonclick, elementHidden, buttonclick2, "Clique aqui para calcular Tampo");
    toggleVisibility(buttonclick2, elementHidden2, buttonclick, "Clique aqui para calcular Soleira");
});

/*função para esconder haba cubas*/

function hiddencubas() {
    var cubacozinha = document.getElementById("cubacozinha");
    cubacozinha.style.display = cubacozinha.style.display === "none" ? "flex" : "none";
}

function hiddentanque() {
    var cubatanque = document.getElementById("cubatanque");
    cubatanque.style.display = cubatanque.style.display === "none" ? "flex" : "none";
}


document.addEventListener("DOMContentLoaded", function () {
    const buttonclick = document.getElementById("buttonclick");
    const buttonclick2 = document.getElementById("buttonclick2");
    let isBig = false;

    buttonclick.addEventListener('click', function () {
        if (isBig) {
            buttonclick.style.width = "150px";
            buttonclick.style.height = "70px";
            isBig = false;
        } else {
            buttonclick.style.width = "100px";
            buttonclick.style.height = "30px";
            isBig = true;
        }
    });

    buttonclick2.addEventListener('click', function () {
        if (isBig) {
            buttonclick2.style.width = "150px";
            buttonclick2.style.height = "70px";
            isBig = false;
        } else {
            buttonclick2.style.width = "100px";
            buttonclick2.style.height = "30px";
            isBig = true;
        }

    });
});
var material = 0;
var namematerial = [];

/* Imagens dos materiais*/
document.addEventListener("DOMContentLoaded", function () {
    var imagens = document.querySelectorAll('.imagem');


    imagens.forEach(function (imagem) {
        imagem.addEventListener('click', function () {
            var valorMaterial = parseFloat(imagem.dataset.valor);
            var nameMaterial = imagem.dataset.name;
            material = valorMaterial;
            namematerial = nameMaterial;

            imagens.forEach(function (outraImagem) {
                outraImagem.classList.remove('selecionada');
            });

            // Selecionar a imagem com base no namematerial
            imagens.forEach(function (outraImagem) {
                if (outraImagem.dataset.name === namematerial) {
                    outraImagem.classList.add('selecionada');
                }
            });

            resultado();
            resultadosoleira();
            selecmaterial()
        });

        imagem.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', imagem.id);
        });
    });
});

/*imagens das cubas*/
var cuba = 0;
var nomecuba = [];

document.addEventListener("DOMContentLoaded", function () {
    var fotoscuba = document.querySelectorAll('.fotoscuba');

    fotoscuba.forEach(function (foto) {
        foto.addEventListener('click', function () {
            var valorCuba = parseFloat(foto.dataset.valor);
            var nomeCuba = foto.dataset.name;
            cuba = valorCuba;
            nomecuba = nomeCuba;

            fotoscuba.forEach(function (outraFoto) {
                outraFoto.classList.remove('selecionada');
            });

            // Selecionar a imagem clicada
            foto.classList.add('selecionada');
        });

        foto.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', foto.id);
        });
    });

    var tanque = 0;
    var nometanque = [];
    var fotostanque = document.querySelectorAll('.fotostanque');

    fotostanque.forEach(function (foto) {
        foto.addEventListener('click', function () {
            var valorTanque = parseFloat(foto.dataset.valor);
            var nomeTanque = foto.dataset.name;
            tanque = valorTanque;
            nometanque = nomeTanque;

            fotostanque.forEach(function (outraFoto) {
                outraFoto.classList.remove('selecionada');
            });

            // Selecionar a imagem clicada
            foto.classList.add('selecionada');
        });

        foto.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', foto.id);
        });
    });
});



/*Função para exibir nome do material e quando o material não esta selecionado*/
var infoalertamaterial = document.getElementById('alertamaterial');
var infoalertamaterialsol = document.getElementById('alertamaterialsol');

function selecmaterial() {
    var infotextomaterial = document.getElementById('textomaterial');
    infotextomaterial.innerHTML = 'Material: ' + namematerial;

    var infotextomaterialsol = document.getElementById('textomaterialsol');
    infotextomaterialsol.innerHTML = 'Material: ' + namematerial;

    infoalertamaterial.innerHTML = '';
    infoalertamaterialsol.innerHTML = '';



}

/*calculo resultado do tampo*/
var percentualtampo1 = 1.8;
var percentualsoleira = 1.6;
var percentualtampo = 0;

function resultado() {

    var comprimentotampo = parseFloat(document.getElementById('comptampo').value.replace(/\D/g, ''));
    var larguratampo = parseFloat(document.getElementById('largtampo').value);
    var alturarodopia = parseFloat(document.getElementById('altrodopia').value);
    var alturasoculo = parseFloat(document.getElementById('altsoculo').value);
    var inftampo = document.getElementById('valtampo');
    var infrodopia = document.getElementById('valrodopia');
    var infsoculo = document.getElementById('valsoculo');
    var infocomprimentotampo = document.getElementById('mcomptampo');
    var infolarguratampo = document.getElementById('mlargtampo');
    var infoalturarodopia = document.getElementById('maltrodopia');
    var infoalturasoculo = document.getElementById('maltsoculo');
    var infonomematerial = document.getElementById('nomematerial');


    // Verifica se os valores são NaN e os trata
    if (isNaN(material)) {
        material = 0;
    }
    if (isNaN(comprimentotampo)) {
        comprimentotampo = 0;
    }
    if (isNaN(larguratampo)) {
        larguratampo = 0;
    }
    if (isNaN(alturarodopia)) {
        alturarodopia = 0;
    }
    if (isNaN(alturasoculo)) {
        alturasoculo = 0;
    }

    infocomprimentotampo.innerHTML = ' Comprimento: ' + comprimentotampo + ' cm';
    infolarguratampo.innerHTML = ' Largura: ' + larguratampo + ' cm';
    infoalturarodopia.innerHTML = 'Altura Rodopia: ' + alturarodopia + ' cm';
    infoalturasoculo.innerHTML = 'Altura Soculo: ' + alturasoculo + ' cm';
    infonomematerial.innerHTML = 'Material: ' + namematerial;

    if (material > 0) {
        if (larguratampo > 0 && larguratampo < 50) {
            var difpercentualtampo = (50 - larguratampo) / 100;
            percentualtampo = percentualtampo1 - difpercentualtampo;
        } else if (larguratampo > 60) {
            var difpercentualtampo = (larguratampo - 60) * 2.5 / 100;
            percentualtampo = percentualtampo1 + difpercentualtampo;
        } else if (larguratampo === '' || larguratampo === 0) {
            larguratampo = 0;
        }

        if (isNaN(comprimentotampo) || larguratampo === 0) {
            comprimentotampo = 0;
        } else {
            comprimentotampo = comprimentotampo
        }
        var resTampo = ((comprimentotampo * material) * (percentualtampo > 0 ? percentualtampo : percentualtampo1));
        if (alturarodopia > 1, alturarodopia < 11) {
            alturarodopia = alturarodopia;
        } else if (alturarodopia > 11) {
            alturarodopia = comprimentotampo * alturarodopia * material;
        } else {
            alturarodopia = 0;
        }
        var resRodopia = alturarodopia * percentualsoleira / 100;

        if (alturasoculo > 0) {
            alturasoculo = (comprimentotampo + 50) * alturasoculo * material;
        } else {
            alturasoculo = 0;
        }
        resSoculo = alturasoculo * percentualsoleira / 100;
    } else {
        resTampo = 0;
        resRodopia = 0;
        resSoculo = 0;
        infoalertamaterial.innerHTML = 'Selecione o material.';


    }


    inftampo.textContent = 'Valor Tampo:  ' + formatarMoeda(resTampo / 100);
    infrodopia.textContent = 'Valor Rodopia:  ' + formatarMoeda(resRodopia / 100);
    infsoculo.textContent = 'Valor Soculo:  ' + formatarMoeda(resSoculo / 100);

}

/*caluclo do resultado das soleiras*/

function resultadosoleira() {

    var comprimentosoleira = parseFloat(document.getElementById('compsoleira').value.replace(/\D/g, ''));
    var largurasoleira = parseFloat(document.getElementById('largsoleira').value);
    var infsoleira = document.getElementById('valorsoleira');
    var infcompsoleira = document.getElementById('infcompsoleira');
    var inflargsoleira = document.getElementById('inflargsoleira');
    var infonomematerialsol = document.getElementById('nomematerialsol');



    if (isNaN(comprimentosoleira)) {
        comprimentosoleira = 0;
    }
    if (isNaN(largurasoleira)) {
        largurasoleira = 0;
    }
    if (isNaN(material)) {
        material = 0;
    }

    infcompsoleira.textContent = 'Comrpimento: ' + comprimentosoleira + ' cm --- ';
    inflargsoleira.textContent = 'Largura: ' + largurasoleira + ' cm';
    infonomematerialsol.innerHTML = 'Material: ' + namematerial;
    if (material > 0) {
        if (comprimentosoleira > 0) {
            var resSoleira = (comprimentosoleira * (largurasoleira + 1) * material * percentualsoleira) / 100;
        } else {
            var resSoleira = 0;
        }
    } else {
        var resSoleira = 0;
        infoalertamaterialsol.innerHTML = 'Selecione o material.';
    }
    infsoleira.textContent = 'Valor Soleira:  ' + formatarMoeda(resSoleira / 100);


}

function formatarMoeda(valor) {
    valor = valor ?? 0; // Se valor for null ou undefined, atribui 0 a valor
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/*salvar os resultados no loca storange*/

function salvarResultado() {
    var resultadosSalvos = localStorage.getItem('resultados');

    if (!resultadosSalvos) {
        resultadosSalvos = [];
    } else {
        resultadosSalvos = JSON.parse(resultadosSalvos);
    }

    tampo = parseFloat(document.getElementById('valtampo').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    rodopia = parseFloat(document.getElementById('valrodopia').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    soculo = parseFloat(document.getElementById('valsoculo').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    mcomptampo = parseFloat(document.getElementById('mcomptampo').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    mlargtampo = parseFloat(document.getElementById('mlargtampo').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    maltrodopia = parseFloat(document.getElementById('maltrodopia').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    maltsoculo = parseFloat(document.getElementById('maltsoculo').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));

    resultadosSalvos.push({ valorTampo: tampo, valorRodopia: rodopia, valorSoculo: soculo, comprimentoTampo: mcomptampo, larguraTampo: mlargtampo, alturaRodopia: maltrodopia, alturaSoculo: maltsoculo, materialTampo: namematerial });
    localStorage.setItem('resultados', JSON.stringify(resultadosSalvos));

    exibirResultadosSalvos();
}

function salvarResultadoSoleira() {
    var resultadoSalvoSoleira = localStorage.getItem('resultadosoleira');

    if (!resultadoSalvoSoleira) {
        resultadoSalvoSoleira = [];
    } else {
        resultadoSalvoSoleira = JSON.parse(resultadoSalvoSoleira);
    }
    soleira = parseFloat(document.getElementById('valorsoleira').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    compsoleira = parseFloat(document.getElementById('infcompsoleira').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
    largsoleira = parseFloat(document.getElementById('inflargsoleira').textContent.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));

    resultadoSalvoSoleira.push({ valorSoleira: soleira, compSoleira: compsoleira, largSoleira: largsoleira, materialSoleira: namematerial });
    localStorage.setItem('resultadosoleira', JSON.stringify(resultadoSalvoSoleira));

    exibirResultadoSalvoSoleira();

}

/*exibir os resultados do local storage*/

var totalprecotampo = 0;

function exibirResultadosSalvos() {
    var resultadosSalvos = localStorage.getItem('resultados');
    if (resultadosSalvos) {
        var resultadosSalvos = JSON.parse(resultadosSalvos);
        var listaResultadosElemento = document.getElementById('lista-resultados');
        listaResultadosElemento.innerHTML = '';
        var totaltampo = 0;
        var totalrodopia = 0;
        var totalsoculo = 0;
        var comptampo = 0;
        var largtampo = 0;
        var altrodopia = 0;
        var altsoculo = 0;

        resultadosSalvos.forEach(function (resultado, indice) {
            let itemLista = document.createElement('li');
            itemLista.innerHTML = 'Tampo: ' + (indice + 1) + '  |  ' + formatarMoeda(resultado.valorTampo) + ' - Rodopia ' + formatarMoeda(resultado.valorRodopia) + ' - Sóculo ' +
                formatarMoeda(resultado.valorSoculo) + ' ---  SubTotal ' + formatarMoeda(resultado.valorTampo + resultado.valorRodopia + resultado.valorSoculo) +
                '<p class="infomedidas"> Medidas -- Comprimento: ' + resultado.comprimentoTampo + ' cm   |   largura: ' + resultado.larguraTampo + ' cm   |   Altura Rodopia: ' + resultado.alturaRodopia + ' cm   |   Altura Soculo: ' + resultado.alturaSoculo + ' cm |   Material: ' + resultado.materialTampo + '</p>';

            let botaoExcluir = document.createElement('button1');
            botaoExcluir.innerHTML = '<button1 onclick="exibirlistaDuasVezes()" class="botaoX"> X </button1>';
            botaoExcluir.addEventListener('click', function () {
                resultadosSalvos.splice(indice, 1);
                localStorage.setItem('resultados', JSON.stringify(resultadosSalvos)); // Atualiza o armazenamento local
                exibirResultadosSalvos();
            });
            itemLista.appendChild(botaoExcluir);

            listaResultadosElemento.appendChild(itemLista);
            totaltampo += resultado.valorTampo;
            totalrodopia += resultado.valorRodopia;
            totalsoculo += resultado.valorSoculo;
            comptampo += resultado.comprimentoTampo;
            largtampo += resultado.larguraTampo;
            altrodopia += resultado.alturaRodopia;
            altsoculo += resultado.alturaSoculo;
        });

        document.getElementById('total').textContent = 'Total: ' + formatarMoeda(totaltampo + totalrodopia + totalsoculo);
        document.getElementById('totalavista').textContent = 'A vista: ' + formatarMoeda((totaltampo + totalrodopia + totalsoculo) * 0.95);

    } else {
        document.getElementById('lista-resultados').textContent = 'Nenhum resultado salvo.';
    }

    totalprecotampo = totaltampo + totalrodopia + totalsoculo;
}

var totalprecosoleira = 0;

function exibirResultadoSalvoSoleira() {
    var resultadoSalvoSoleira = localStorage.getItem('resultadosoleira');

    if (resultadoSalvoSoleira) {
        resultadoSalvoSoleira = JSON.parse(resultadoSalvoSoleira);
        var listaResultadoSoleiraElemento = document.getElementById('lista-resultado-soleira');
        listaResultadoSoleiraElemento.innerHTML = '';
        var totalsoleira = 0;
        var compsoleira = 0;
        var largsoleira = 0;

        resultadoSalvoSoleira.forEach(function (resultado, indice) {
            let itemListaSoleira = document.createElement('li');
            itemListaSoleira.innerHTML = 'Soleira: ' + (indice + 1) + '  |  ' + formatarMoeda(resultado.valorSoleira) + ' -- <p class="infomedidas2"> Comprimento: ' + resultado.compSoleira + ' cm   |   ' + ' Largura: ' + resultado.largSoleira + ' cm |   Material: ' + resultado.materialSoleira + '</p>';

            let botaoExcluir = document.createElement('button1');
            botaoExcluir.innerHTML = '<button1 onclick="exibirlistaDuasVezes()" class="botaoX"> X </button1>';
            botaoExcluir.addEventListener('click', function () {
                resultadoSalvoSoleira.splice(indice, 1);
                localStorage.setItem('resultadosoleira', JSON.stringify(resultadoSalvoSoleira)); // Atualiza o armazenamento local
                exibirResultadoSalvoSoleira();
            });
            itemListaSoleira.appendChild(botaoExcluir);
            listaResultadoSoleiraElemento.appendChild(itemListaSoleira);
            totalsoleira += resultado.valorSoleira;
            compsoleira += resultado.compSoleira;
            largsoleira += resultado.largSoleira;
        });

        document.getElementById('totalsoleira').textContent = 'Total: ' + formatarMoeda(totalsoleira);
        document.getElementById('totalsoleiraavista').textContent = 'A vista: ' + formatarMoeda((totalsoleira) * 0.95);


    } else {
        document.getElementById('lista-resultados').textContent = 'Nenhum resultado salvo.';
    }
    totalprecosoleira = totalsoleira;
}
/*função para validar o botão de excluir*/

function exibirlistaDuasVezes() {
    exibirlista();
    setTimeout(exibirlista, 500);
}

/* Para exibir o calculo final do total*/

function exibirlista() {
    exibirResultadoSalvoSoleira()
    exibirResultadosSalvos()
    if (isNaN(totalprecotampo)) {
        totalprecotampo = 0;
    }
    if (isNaN(totalprecosoleira)) {
        totalprecosoleira = 0;
    }
    var precototal = totalprecotampo + totalprecosoleira;

    document.getElementById('totalservico').innerHTML = '<p class="texttotal"> Total: ' + formatarMoeda(precototal) + '</p>';
    document.getElementById('totalservicoavista').innerHTML = '<p class="texttotal">A vista: ' + formatarMoeda((precototal) * 0.95) + '</p>';

}
/*fazer validação dos tamanhos aceitos em cada campo*/

function validarInputY() {
    var inputY = document.getElementById('largtampo');
    if (inputY) {
        if (inputY.value < 30) {
            inputY.value = 30;
            alert('Largura mínima 30cm, para menores, consulte o vendedor ou calcular como soleira de acabamento simples');
        } else if (inputY.value > 120) {
            inputY.value = 120;
            alert('Largura máxima 120cm, para maiores, consulte o vendedor.');
        }
    }
}

function validarInputY1() {
    var inputY1 = document.getElementById('largsoleira');
    if (inputY1.value > 40) {
        inputY1.value = 40;
        alert('Largura máxima 40cm, para maiores, consulte o vendedor via whatsapp.');
    } else {

    }
}
/*mandar menssagem whatsapp*/

function extrairDadosParaWhatsApp() {
    var resultadosSalvos = localStorage.getItem('resultados');
    var resultadosSalvosSoleira = localStorage.getItem('resultadosoleira');
    var mensagemWhatsApp = "Orçamento solicitado:\n\n";

    if (resultadosSalvos && JSON.parse(resultadosSalvos).length > 0) {
        resultadosSalvos = JSON.parse(resultadosSalvos);
        mensagemWhatsApp += "Tampos:\n";
        resultadosSalvos.forEach(function (resultado, indice) {
            mensagemWhatsApp += "  Produto " + (indice + 1) + ":\n";
            mensagemWhatsApp += "    - Tampo: R$ " + resultado.valorTampo.toFixed(2) + "\n";
            mensagemWhatsApp += "    - Rodopia: R$ " + resultado.valorRodopia.toFixed(2) + "\n";
            mensagemWhatsApp += "    - Sóculo: R$ " + resultado.valorSoculo.toFixed(2) + "\n";
            mensagemWhatsApp += "    - Material:  " + resultado.materialTampo + "\n";
            mensagemWhatsApp += "    - Subtotal: R$ " + (resultado.valorTampo + resultado.valorRodopia + resultado.valorSoculo).toFixed(2) + "\n";
            mensagemWhatsApp += "    - Medidas:  Comprimento = " + resultado.comprimentoTampo + " cm, Largura = " + resultado.larguraTampo + " cm, Altura Rodopia = " + resultado.alturaRodopia + " cm, Altura Sóculo = " + resultado.alturaSoculo + " cm\n\n";
        });
        mensagemWhatsApp += "Valores sem cuba.\n\n ";
    }

    if (resultadosSalvosSoleira && JSON.parse(resultadosSalvosSoleira).length > 0) {
        resultadosSalvosSoleira = JSON.parse(resultadosSalvosSoleira);
        mensagemWhatsApp += "Soleiras:\n";
        resultadosSalvosSoleira.forEach(function (resultado, indice) {
            mensagemWhatsApp += "  Produto " + (indice + 1) + ":\n";
            mensagemWhatsApp += "    - Soleira: R$ " + resultado.valorSoleira.toFixed(2) + "\n";
            mensagemWhatsApp += "    - Material:  " + resultado.materialSoleira + "\n";
            mensagemWhatsApp += "    - Medidas:  Comprimento = " + resultado.compSoleira + " cm, Largura = " + resultado.largSoleira + " cm\n\n";
        });
        mensagemWhatsApp += "Valores sem instalação.\n\n ";
    }

    if (isNaN(totalprecotampo)) {
        totalprecotampo = 0;
    } if (isNaN(totalprecosoleira)) {
        totalprecosoleira = 0;
    }
    mensagemWhatsApp += "Total: R$" + (totalprecotampo + totalprecosoleira).toFixed(2) + "\n";
    mensagemWhatsApp += "Total à vista: R$" + ((totalprecotampo + totalprecosoleira) * 0.95).toFixed(2) + "\n";


    return mensagemWhatsApp;
}

function enviarMensagemWhatsApp() {
    var mensagem = extrairDadosParaWhatsApp();
    var numeroTelefone = "5548996556490";
    var linkWhatsapp = "https://wa.me/" + numeroTelefone + "?text=" + encodeURIComponent(mensagem);

    window.open(linkWhatsapp);
}

/*pegar ids de botões*/
document.getElementById("whatsappbutton").addEventListener("click", enviarMensagemWhatsApp);
document.getElementById('lista').addEventListener('click', salvarResultado);
document.getElementById('lista').addEventListener('click', exibirlista);
document.getElementById('listasoleira').addEventListener('click', salvarResultadoSoleira);
document.getElementById('listasoleira').addEventListener('click', exibirlista);

/*verificar se os inputs tão corretos e fazer vibrar*/

function validarInput(inputId, mensagemId) {
    const input = document.getElementById(inputId);
    const mensagem = document.getElementById(mensagemId);

    if (!input.value) {
        input.classList.add('input-error');
        mensagem.style.display = 'block';
    } else {
        input.classList.remove('input-error');
        mensagem.style.display = 'none';
    }
}

/* função para exibir os resultados sem precisar apertar nenhum botão*/

function exibirTudo() {
    exibirlista();
    exibirResultadoSalvoSoleira();
    exibirResultadosSalvos();
}

window.onload = exibirTudo;
