// Variáveis globais
const categories = {
    Filmes: [
        "Jurassic Park", "Titanic", "Matrix", "O Rei Leão", "Avatar", "Harry Potter", "Star Wars", "Vingadores",
        "Homem-Aranha", "Batman", "A Bela e a Fera", "Frozen", "Toy Story", "O Poderoso Chefão", "Shrek",
        "Gladiador", "De Volta Para o Futuro", "Procurando Nemo", "Madagascar", "A Era do Gelo", "Cinderela",
        "O Hobbit", "Pantera Negra", "Capitão América", "Thor", "Minions", "Pulp Fiction", "O Iluminado",
        "Rocky", "Piratas do Caribe", "Aladdin", "Mulan", "Moana", "Ratatouille", "Kung Fu Panda",
        "O Exorcista", "Veloses e Furiosos", "Deadpool", "Jumanji", "O Rei do Show", "It: A Coisa", "Coraline",
        "Interestelar", "La La Land", "Senhor dos Anéis", "Divergente", "Crepúsculo", "Nárnia", "Percy Jackson",
        // Novas palavras
        "Jogos Vorazes", "Guardiões da Galáxia", "Doutor Estranho", "Homem de Ferro", "O Grinch", "Bambi", 
        "Carros", "Up - Altas Aventuras", "A Pequena Sereia", "Malévola", "Os Incríveis", "Hércules", "Tarzan", 
        "Branca de Neve", "Encanto", "Luca", "Soul", "Pinóquio", "Wall-E", "Zootopia", "Sing", "Pets", 
        "A Fantástica Fábrica de Chocolate", "Blade Runner", "Amor Sublime Amor", "Esquadrão Suicida", 
        "O Chamado", "Cloverfield", "Her", "Cisne Negro", "Bastardos Inglórios", "Clube da Luta", "Amnésia", 
        "O Sexto Sentido", "Tron", "O Grande Truque", "Prenda-me se For Capaz", "Caça-Fantasmas", "Kung Fury", 
        "The Batman", "O Diabo Veste Prada", "O Resgate do Soldado Ryan", "1917", "Cidade de Deus", 
        "Central do Brasil", "O Auto da Compadecida", "Se Eu Fosse Você", "Minha Mãe é uma Peça", 
        "Tropa de Elite", "Que Horas Ela Volta?"
    ],
    Profissões: [
        "Bombeiro", "Professor", "Médico", "Engenheiro", "Advogado", "Carpinteiro", "Piloto", "Chef de Cozinha",
        "Policial", "Dentista", "Arquiteto", "Enfermeiro", "Mecânico", "Ator", "Cantor", "Garçom", "Caminhoneiro",
        "Jornalista", "Fotógrafo", "Cientista", "Astronauta", "Vendedor", "Motorista", "Pedreiro", "Veterinário",
        "Psicólogo", "Marceneiro", "Padeiro", "Pescador", "Bailarino", "Costureira", "Eletricista", "Agricultor",
        "Coveiro", "Político", "Designer", "Advogado", "Barbeiro", "Analista de Sistemas", "Nutricionista",
        "Tradutor", "Segurança", "Lixeiro", "Juiz", "Geólogo", "Bibliotecário", "Corretor de Imóveis", "Estilista",
        // Novas palavras
        "Programador", "Dublador", "Investigador", "Esteticista", "Personal Trainer", "Pedagogo", "Manicure", 
        "Astrônomo", "Mágico", "Zelador", "Piloto de Fórmula 1", "Estilista", "Eletricista", "Operador de Caixa", 
        "Assistente Social", "Taxista", "Guarda Florestal", "Físico", "Químico", "Sushiman", "Técnico de TI", 
        "Soldador", "Segurança Patrimonial", "Motorista de Aplicativo", "Caçador", "Maquiador", "Sapateiro", 
        "Enólogo", "Treinador de Animais", "Barman", "Técnico em Enfermagem", "Editor de Vídeo", "Cientista de Dados", 
        "Relojoeiro", "Investigador Criminal", "Cartógrafo", "Marceneiro", "Gerente de Projetos", "Consultor", 
        "Piloto de Helicóptero", "Administrador", "Encanador", "Montador de Móveis", "Professor de Educação Física", 
        "Escritor", "Youtuber", "Streamer", "Atendente de Telemarketing", "Mergulhador Profissional", "Engraxate"
    ],
    Objetos: [
        "Relógio", "Cadeira", "Guarda-chuva", "Bola", "Laptop", "Mochila", "Caneta", "Lápis", "Tesoura", "Livro",
        "Óculos", "Fone de ouvido", "Garrafa", "Sapato", "Chapéu", "Televisão", "Celular", "Chave", "Mesa", 
        "Copo", "Prato", "Faca", "Colher", "Cama", "Tapete", "Sofá", "Espelho", "Quadro", "Vela", "Carro", 
        "Bicicleta", "Moto", "Fogão", "Geladeira", "Ventilador", "Ar-condicionado", "Chuveiro", "Pia", "Balão", 
        "Bússola", "Bateria", "Lixeira", "Lanterna", "Varal", "Aspirador", "Carregador", "Microfone", "Controle remoto",
        // Novas palavras
        "Videogame", "Skate", "Patins", "Mouse", "Teclado", "Monitor", "Tablet", "Capacete", "Violão", "Guitarra",
        "Trompete", "Violino", "Tambor", "Prancha de Surf", "Mala", "Varinha mágica", "Lâmpada", "Cortina", 
        "Tapete de Yoga", "Câmera", "Drone", "Bússola", "Pneu", "Martelo", "Serrote", "Espada", "Binóculos", 
        "Florete", "Escudo", "Faqueiro", "Caixa de som", "Banheira", "Jarro", "Almofada", "Edredom", "Cadeado", 
        "Chinelo", "Balde", "Churrasqueira", "Cavalo de balanço", "Troféu", "Roupa de cama", "Colchão", 
        "Rede de dormir", "Espremedor de frutas", "Cofre", "Grampeador", "Clip", "Torre Eiffel em miniatura"
    ],
    Ações: [
        "Correr", "Pular", "Cozinhar", "Dormir", "Nadar", "Dançar", "Ler", "Cantar", "Escrever", "Comer",
        "Beber água", "Escalar", "Falar no telefone", "Navegar na internet", "Jogar bola", "Bater palmas",
        "Chorar", "Sorrir", "Brincar", "Abraçar", "Aplaudir", "Limpar a casa", "Passar roupa", "Pintar",
        "Digitar", "Lavar o rosto", "Tomar banho", "Andar de bicicleta", "Fazer exercícios", "Meditar",
        "Assistir TV", "Cortar cabelo", "Tocar violão", "Subir escadas", "Dirigir", "Desenhar", "Assobiar",
        "Saltar de paraquedas", "Acenar", "Escovar os dentes", "Tirar fotos", "Comprar", "Vestir roupas",
        "Tirar sapatos", "Ninar bebê", "Fazer bolo", "Trocar lâmpada", "Chutar", "Atender porta", "Jogar videogame",
        // Novas ações
        "Fazer flexões", "Carregar peso", "Arremessar bola", "Surfar", "Pular corda", "Pintar as unhas", 
        "Acender fogueira", "Colher flores", "Trocar pneu", "Lustrar sapato", "Fazer malabarismo", "Patinar", 
        "Praticar ioga", "Empinar pipa", "Carregar criança", "Pescando", "Chutar bola", "Dar cambalhota", 
        "Soprar velas", "Fazer sinal de silêncio", "Tocar piano", "F
