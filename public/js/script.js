const data = {
    produtos: [
    {
        "id": 1,
        "nome": "Laerte Simulator",
        "preco": 400,
        "categoria": "games",
        "imagem": "images/laerte_simulator.png",
        "descricao": "Em Laerte Simulator, você assume o controle do homem que transforma reunião em império, almoço em networking e segunda-feira em oportunidade bilionária. Gerencie riqueza, influência, reputação e ego enquanto Laerte domina empresas, mercados e conversas de elevador com a mesma facilidade de quem nasceu com cheat code de liderança ativado.",
        "emEstoque": false
    },
    {   
        "id": 2,
        "nome": "Celular Samsung Galaxy S26 Ultra 5G",
        "preco": 10500,
        "categoria": "celulares",
        "imagem": "images/s26.png",
        "descricao": "O Galaxy S26 Ultra é um smartphone premium com AI avançada, câmera de 200 MP, alto desempenho e tela com privacidade integrada, ideal para fotos, vídeos e produtividade.",
        "emEstoque": true
    },
    {   
        "id": 3,
        "nome": "Calculadora Gamer",
        "preco": 40,
        "categoria": "acessorios",
        "imagem": "images/calculadora_gamer.png",
        "descricao":"A Calculadora Gamer é o item definitivo para quem quer somar XP, multiplicar vitórias e dividir os boletos com estilo de console — porque até fazer conta pode parecer gameplay épico.",
        "emEstoque": true
    },
    {   
        "id": 4,
        "nome": "Notebook Yoga Slim 7i",
        "preco": 5200,
        "categoria": "notebooks",
        "imagem": "images/lenovo_yoga.png",
        "descricao":"O Lenovo Yoga Slim 7i é um notebook fino e moderno de 14, com processador Intel Core Ultra 5, 16 GB de RAM, SSD de 512 GB, gráficos Intel Arc e Windows 11, ideal para produtividade, estudos e uso profissional com desempenho ágil.",
        "emEstoque": true
    },
    {   
        "id": 5,
        "nome": "Mouse Gamer T.A.R.T.A.R.U.G.A",
        "preco": 200,
        "categoria": "acessorios",
        "imagem": "images/mouse_tartaruga.png",
        "descricao": "O **Mouse Gamer T.A.R.T.A.R.U.G.A** foi criado por especialistas para quem leva a gameplay a sério, mas não abre mão de estilo. Seu formato anatômico inspirado em uma tartaruga oferece mais conforto nas partidas, melhor controle nos movimentos e cliques precisos para você jogar com firmeza, estratégia e confiança do início ao fim.",
        "emEstoque": false
    },
    {   
        "id": 6,
        "nome": "PowerBook 100",
        "preco": 2000,
        "categoria": "notebooks",
        "imagem": "images/power_book_100.png",
        "descricao": "PowerBook 100 à venda — Para quem duvida que ele roda Valorant, esse é justamente o diferencial: o PowerBook 100 não depende de força bruta, ele usa experiência, disciplina e presença de palco. Com um design compacto, teclado raiz e uma estrutura feita numa época em que tecnologia era construída para durar, este clássico da Apple entrega a verdadeira vantagem competitiva: foco absoluto, zero distrações e uma aura retrô capaz de desestabilizar qualquer adversário. Enquanto outros jogadores confiam em RGB e placa de vídeo, você entra na partida com história, personalidade e a confiança de quem sabe que o impossível é só uma configuração ainda não testada.",
        "emEstoque": false
    },
    {   
        "id": 7,
        "nome": "Resident Evil 4 Remake",
        "preco": 169,
        "categoria": "games",
        "imagem": "images/re4_remake.png",
        "descricao":"Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. O agente Leon S. Kennedy, um dos sobreviventes do incidente, foi enviado para resgatar a filha raptada do presidente. Ele segue o rastro dela até uma isolada vila europeia, onde há algo terrivelmente errado com os habitantes. Então a cortina se abre nessa história de um resgate ousado e um terror medonho, onde vida e morte, terror e catarse, se encontram. Com jogabilidade modernizada, uma história reimaginada e gráficos com detalhes vívidos, Resident Evil 4 marca o renascimento de um gigante da indústria. Reviva o pesadelo que revolucionou o terror de sobrevivência.",
        "emEstoque": true
    },
    {   
        "id": 8,
        "nome": "Nokia 3310",
        "preco": 300,
        "categoria": "celulares",
        "imagem": "images/nokia_3310.png",
        "descricao": "Nokia 3310 à venda — Para quem duvida que ele roda Brawl Stars, é porque ainda não entende o poder bruto da resistência. Enquanto outros celulares precisam de atualização, carregador e capinha, o 3310 entra no jogo com bateria lendária, botões físicos de precisão e uma durabilidade capaz de sobreviver até ao modo ranqueado. Não é só um celular: é um tanque de bolso pronto para carregar sua gameplay.",
        "emEstoque": true
    }
    ]
}

const productList = document.getElementById("product-list")
const productDetails = document.getElementById("product-details")
const search = document.querySelector("#search")
const category = document.querySelector("#category")