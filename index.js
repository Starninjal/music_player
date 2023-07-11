let musicas = [
    {titulo:'Lose Yourself', artista:'Eminem', src:'Musicas/Love.mp3', img:'Imagens/eminem.jpg'},
    {titulo:'Closer', artista:'The Chainsmokers ft. Halsey', src:'Musicas/closer.mp3', img:'Imagens/clos.jpg'},
    {titulo:'SNAP', artista:'Rosa Linn', src:'Musicas/Snap.mp3', img:'Imagens/rosa.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    document.getElementById('img').classList.remove('rotating');
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';

});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }

    
    document.querySelector('.botao-pause').style.display = 'none';
    document.getElementById('img').classList.remove('rotating');
    document.querySelector('.botao-play').style.display = 'block';

    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    if(musicas[index].titulo == 'Closer') {
        document.body.style.background = "linear-gradient(to right, rgba(217, 215, 203, 255), rgba(255, 255, 255, 255))";
        document.getElementById('wrapper').classList.add("wrapper-closer");
        document.getElementById('descricao').classList.add("descricao-closer");
        document.getElementById('button').classList.add('buttons-closer');
        document.getElementById('comandos-player').classList.add('comandos-closer');
        listaMusicas.classList.add('closer-selecionada');
        document.getElementById('wrapper').classList.remove('wrapper-snap')
        document.getElementById('wrapper').classList.remove('wrapper-eminem');
        
        console.log('.')
    } if(musicas[index].titulo == 'SNAP') { 
        document.body.style.background = " linear-gradient(to bottom, rgb(90, 110, 87), rgba(255, 255, 255, 1))"
        document.getElementById('wrapper').classList.add('wrapper-snap')
        document.getElementById('wrapper').classList.remove('wrapper-eminem');
        listaMusicas.classList.remove('closer-selecionada');
    } else if(musicas[index].titulo == 'Lose Yourself') {
        document.getElementById('wrapper').classList.add('wrapper-eminem');
        document.getElementById('wrapper').classList.remove('wrapper-snap');
        document.getElementById('wrapper').classList.remove('wrapper-closer');
        listaMusicas.classList.remove('closer-selecionada');
        document.body.style.background = 'linear-gradient(to bottom, rgb(75, 79, 84), rgba(0, 0, 0, 1))'
    }
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    document.getElementById('img').classList.add("rotating");
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    document.getElementById('img').classList.remove('rotating');
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}


function atualizarBarra(){
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
document.querySelector('.list').addEventListener('click', listarMusica, () => {
    document.querySelector('list').style.display = "none";
});





    function listarMusica() {
        const listaMusicas = document.getElementById('listaMusicas');
        listaMusicas.innerHTML = '';

        musicas.forEach((musica, index) => {
            const itemElemento = document.createElement('div');
            itemElemento.classList.add('musica-item');
            
            const nomeElemento = document.createElement('strong');
            nomeElemento.textContent = musica.titulo;
            itemElemento.appendChild(nomeElemento);
            
            const descricaoElemento = document.createElement('span');
            descricaoElemento.textContent = musica.artista;
            descricaoElemento.style.fontSize = '12px';
            itemElemento.appendChild(descricaoElemento);

            itemElemento.addEventListener('click', () => {
                indexMusica = index;
                if (musica.titulo === 'Closer') {
                    listaMusicas.classList.add('closer-selecionada');
                  } else {
                    listaMusicas.classList.remove('closer-selecionada');
                  }

                  document.querySelector('.botao-play').style.display = 'block';
                  document.querySelector('.botao-pause').style.display = 'none';

                document.getElementById('img').classList.remove('rotating');
        
                renderizarMusica(indexMusica);
                listaMusicas.style.display = 'none';
            });

            listaMusicas.appendChild(itemElemento);
        });

        listaMusicas.style.display = 'block';
    }

function offEverything() {
    document.getElementById('descricao').style.display = 'none';
    document.getElementById('img').style.display = 'none';
    document.querySelector('.anterior').style.display = 'none';
    document.querySelector('.proxima').style.display = 'none';


}
  

