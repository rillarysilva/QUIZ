var num_pergunta = 0
pergunt = []
var num_acerto = 0
var num_erro = 0

var perguntas = [
    {
        pergunta: "As obras Abaporu, Operários e Antropofagia foram pintadas por qual artista brasileiro?",
        a: "Di Cavalcanti",
        b: "Anita Malfatti",
        c: "Tarsila do Amaral",
        certa: "c",
    },
    {
        pergunta: "Em que ano e quem foi eleito o primeiro presidente do Brasil?",
        a: "1891",
        b: "1890",
        c: "1889",
        certa: "a",
    },
    {
        pergunta: "Em que país nasceu Clarice Lispector?",
        a: "Portugal",
        b: "Rússia",
        c: "Ucrânia",
        certa: "c",
    },
    {
        pergunta: "Quem viveu, segundo a Bíblia, 969 anos?",
        a: "Jesus Cristo",
        b: "Matusalém",
        c: "Benjamim",
        certa: "b",
    },
    {
        pergunta: "Quem foi a primeira pessoa a viajar no Espaço?",
        a: "Yuri Gagarin",
        b: "Neil Armstrong",
        c: "Marcos Pontes",
        certa: "a",
    },
]


function aparecerPergunta() {

    if(num_pergunta >= perguntas.length) {
        document.getElementById("jogo").style.display = "none"
        document.getElementById("joga").style.display = "block"
        document.getElementById("joga").innerText = "Reiniciar"
        document.getElementById("joga").addEventListener('click', () => {
            location.reload()
        })
        return
    }

    document.getElementById("jogar").style.display = "none"
    document.getElementById("joga").style.display = "none"
    document.getElementById("jogo").style.display = "block"
    document.getElementById("pergunta").style.display = "block"
    document.getElementById("alternativas").style.display = "block"
    document.getElementById("responder").style.display = "block"
    document.getElementById("dados").style.display = "block"
    document.getElementById("painel").style.background = "linear-gradient(purple,  #a0078c)"
    document.getElementById("altA").style.background = ""
    document.getElementById("altB").style.background = ""
    document.getElementById("altC").style.background = ""

    document.getElementById("a").checked = false
    document.getElementById("b").checked = false
    document.getElementById("c").checked = false

    document.getElementById("txt").innerHTML = "Painel do Jogador"
    document.getElementById("pergunta").innerHTML = perguntas[pergunt[num_pergunta]].pergunta
    document.getElementById("lblA").innerHTML = perguntas[pergunt[num_pergunta]].a
    document.getElementById("lblB").innerHTML = perguntas[pergunt[num_pergunta]].b
    document.getElementById("lblC").innerHTML = perguntas[pergunt[num_pergunta]].c
}

function responder(but) {
    let resposta = pegarResposta()
    if (resposta == perguntas[pergunt[num_pergunta]].certa) {
        num_acerto += 1
        document.getElementById(resposta).parentElement.style.background = "green"
        document.getElementById("num_acerto").innerHTML = num_acerto
    } else {
        num_erro += 1
        document.getElementById(resposta).parentElement.style.background = "red"
        document.getElementById(perguntas[num_pergunta].certa).parentElement.style.background = "yellow"
        document.getElementById("num_erro").innerHTML = num_erro

    }
    num_pergunta += 1
    document.getElementById("num_pergunta").innerHTML = num_pergunta

    if (num_pergunta < perguntas.length) {
        but.style.display = "none"
        document.getElementById("joga").innerHTML = "Proxima Pergunta"
        document.getElementById("joga").style.display = "block"
    }else{
        but.style.display = "none"
        document.getElementById("joga").innerHTML = "Finalizar Quiz"
        document.getElementById("joga").style.display = "block"
    }
}

function pergunta() {
    while (pergunt.length < perguntas.length) {
        var n = Math.floor(Math.random() * perguntas.length);

        if (pergunt.indexOf(n) == -1)
            pergunt.push(n);
    }
}
pergunta()


function marcar(div) {
    div.children[0].checked = true
}


function pegarResposta() {
    var Resposta
    document.querySelectorAll(".abc").forEach(alt => {
        if (alt.checked) {
            Resposta = alt.id
        }
    })
    return Resposta
}



