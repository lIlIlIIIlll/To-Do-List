function criarTarefa(titulo){
    // Declaração de Variáveis Importantes e Criação de Elementos.
    let tarefas = document.getElementById('Tarefas');
    let newDiv = document.createElement('div');
    let newButton = document.createElement('button');
    let newButton2 = document.createElement('button');
    let newH = document.createElement('h5');

    // Estilização da Div.
    newDiv.style.width = '94%';
    newDiv.style.height = '20%';
    newDiv.style.backgroundColor = '#333333';
    newDiv.style.borderRadius = '10px'
    newDiv.style.marginLeft = '3%';
    newDiv.style.marginBottom = '1%';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';

    // Estilização do Botão de Concluído e Evento.
    newButton.classList.add('conclusao');
    newButton.style.backgroundImage = "url('images/circulo.png')"
    newButton.style.backgroundRepeat = 'no-repeat';
    newButton.style.backgroundColor = 'transparent'
    newButton.style.backgroundPositionX = '50%';
    newButton.style.backgroundPositionY = '40%';
    newButton.style.backgroundSize = '100%'
    newButton.style.display = 'inline-block';
    newButton.style.alignSelf = 'start'
    newButton.style.position = 'relative';
    newButton.style.top = '1rem';
    newButton.style.left = '2%';
    newButton.style.width = '3%';
    newButton.style.height = '30%';
    newButton.style.border = 0;
    newButton.addEventListener('click', () => {
        let temp = getComputedStyle(newButton);
        let contador = document.getElementById('contadorC');
        temp = temp.getPropertyValue('background-image');
        temp = temp.substring(temp.indexOf("/images"))
        temp = temp.slice(0, -2);
        if(temp === "/images/circulo.png"){
            newButton.style.backgroundImage = "url('images/circulof.png')"
            let cont = Number(contadorC.innerText);
            contadorC.innerText = cont+1;
            newDiv.style.backgroundColor = '#333333';
            newH.style.backgroundColor = '#333333';
            newH.style.textDecoration = 'none';

            newDiv.style.backgroundColor = '#262626';
            newH.style.backgroundColor = '#262626';
            newH.style.textDecoration = 'line-through';
            newH.style.textDecorationColor = '#f2f2f2';
        }else{
            newButton.style.backgroundImage = "url('images/circulo.png')"
            let cont = Number(contadorC.innerText);
            contadorC.innerText = cont-1;

            newDiv.style.backgroundColor = '#333333';
            newH.style.backgroundColor = '#333333';
            newH.style.textDecoration = 'none';
        }
    });

    // Estilização do Botão de Apagar e Evento.
    newButton2.style.backgroundImage = "url('images/trash.png')"
    newButton2.style.backgroundRepeat = 'no-repeat';
    newButton2.style.backgroundColor = 'transparent'
    newButton2.style.backgroundPositionX = '50%';
    newButton2.style.backgroundPositionY = '40%';
    newButton2.style.backgroundSize = '100%'
    newButton2.style.display = 'inline-block';
    newButton2.style.alignSelf = 'center'
    newButton2.style.position = 'relative';
    newButton2.style.width = '3%';
    newButton2.style.height = '30%';
    newButton2.style.border = 0;
    newButton2.addEventListener('click',()=>{
        tarefas.removeChild(newDiv);
    });

    // Criando o Título da Tarefa e o Estilizando.
    newH.innerText = titulo;
    newH.style.alignSelf = 'start'
    newH.style.position = 'relative';
    newH.style.top = '1.5rem';
    newH.style.marginLeft = '2.5%';
    newH.style.color = '#f2f2f2';
    newH.style.fontFamily = 'Times New Roman';
    newH.style.fontWeight = 'normal';
    newH.style.backgroundColor = 'transparent';
    newH.style.display = 'inline-block';
    newH.style.width = '89%';

    // Adicionando à Div os Novos Elementos.
    newDiv.append(newButton);
    newDiv.append(newH);
    newDiv.append(newButton2);
    return newDiv
}




document.addEventListener('DOMContentLoaded',()=>{
    let tarefas = document.getElementById('Tarefas');
    let filhos = tarefas.children;
    let botao = document.getElementById('botaoT');
    let TE = document.getElementById('contadorE');
    TE.innerText = String(filhos.length);

    const config = {childList: true};

    const callback = (mutationList, observer) =>{
        for(let mutation in mutationList){
            TE.innerText = String(filhos.length);
            
        }
    }
    const observer = new MutationObserver(callback);
    observer.observe(tarefas, config);

    botao.addEventListener('click',()=>{
        let nome = document.getElementById('nomeT');
        tarefas.append(criarTarefa(nome.value));
        nome.value = "";
    });
});