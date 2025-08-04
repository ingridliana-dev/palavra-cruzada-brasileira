class PalavrasCruzadas {
    constructor() {
        this.todasPalavras = [
            // Folclore Brasileiro
            { palavra: "SACI", dica: "Menino perneta que fuma cachimbo e usa gorro vermelho", categoria: "folclore" },
            { palavra: "CURUPIRA", dica: "Anão ruivo com pés virados para trás", categoria: "folclore" },
            { palavra: "IARA", dica: "Sereia de cabelos longos que atrai pescadores", categoria: "folclore" },
            { palavra: "BOTO", dica: "Golfinho que vira rapaz bonito nas festas", categoria: "folclore" },
            { palavra: "LOBISOMEM", dica: "Sétimo filho homem que vira lobo", categoria: "folclore" },
            { palavra: "MULA", dica: "Égua decapitada que cospe fogo pelas narinas", categoria: "folclore" },
            { palavra: "CAIPORA", dica: "Ser pequeno e peludo que monta porco do mato", categoria: "folclore" },
            { palavra: "MATINTA", dica: "Velha que vira pássaro assombroso", categoria: "folclore" },
            { palavra: "YARA", dica: "Nome tupi da mãe d'água amazônica", categoria: "folclore" },
            { palavra: "ANHANGA", dica: "Entidade tupi protetora da caça selvagem", categoria: "folclore" },
            { palavra: "BOITATA", dica: "Serpente ígnea que pune quem queima matas", categoria: "folclore" },
            { palavra: "CUCA", dica: "Velha com cabeça de jacaré que rouba crianças", categoria: "folclore" },
            { palavra: "UIRAPURU", dica: "Pássaro cujo canto traz felicidade no amor", categoria: "folclore" },
            { palavra: "LENDA", dica: "Narrativa popular passada oralmente", categoria: "folclore" },
            { palavra: "FOLCLORE", dica: "Sabedoria popular de um povo", categoria: "folclore" },
            { palavra: "PAJE", dica: "Curandeiro e conselheiro das tribos indígenas", categoria: "folclore" },            
            { palavra: "PISADEIRA", dica: "Ser mítico que paralisa quem dorme mal", categoria: "folclore" },
            { palavra: "COMADRE", dica: "Sucuri gigante que vira embarcação", categoria: "folclore" },
            
            // Comidas Típicas Brasileiras
            { palavra: "FEIJOADA", dica: "Prato de feijão preto com linguiça e torresmo", categoria: "comida" },
            { palavra: "BRIGADEIRO", dica: "Docinho de leite condensado enrolado no chocolate", categoria: "comida" },
            { palavra: "COXINHA", dica: "Salgado em formato de perna de galinha", categoria: "comida" },
            { palavra: "PASTEL", dica: "Massa frita quadrada recheada de feira", categoria: "comida" },
            { palavra: "ACAI", dica: "Fruta roxa batida com guaraná", categoria: "comida" },
            { palavra: "TAPIOCA", dica: "Beiju nordestino feito na chapa", categoria: "comida" },
            { palavra: "PAMONHA", dica: "Doce de milho embrulhado na palha", categoria: "comida" },
            { palavra: "COCADA", dica: "Doce branco feito com coco", categoria: "comida" },
            { palavra: "MANDIOCA", dica: "Tubérculo que vira farinha e tapioca", categoria: "comida" },
            { palavra: "GUARANA", dica: "Refrigerante cor de caramelo tipicamente brasileiro", categoria: "comida" },
            { palavra: "CAIPIRINHA", dica: "Drink de cachaça com limão e açúcar", categoria: "comida" },
            { palavra: "PACA", dica: "Roedor amazônico consumido assado", categoria: "comida" },
            { palavra: "TUCUMA", dica: "Palmeira de fruto oleoso alaranjado", categoria: "comida" },
            { palavra: "CUPUACU", dica: "Prima amazônica do cacau de polpa branca", categoria: "comida" },
            { palavra: "QUEIJO", dica: "Laticínio mineiro servido com goiabada", categoria: "comida" },
            { palavra: "RAPADURA", dica: "Tijolo doce de cana-de-açúcar", categoria: "comida" },
            { palavra: "BAIAO", dica: "Arroz nordestino misturado com feijão verde", categoria: "comida" },
            { palavra: "VATAPA", dica: "Creme baiano de pão com camarão e dendê", categoria: "comida" },
            { palavra: "CARURU", dica: "Quiabo refogado com camarão seco", categoria: "comida" },
            { palavra: "MANICOBA", dica: "Prato paraense de folha de mandioca cozida", categoria: "comida" },
            { palavra: "TACACA", dica: "Sopa amazônica de tucupi, jambu e camarão seco", categoria: "comida" },
            
            // Música e Dança
            { palavra: "SAMBA", dica: "Ritmo usado no carnaval", categoria: "musica" },
            { palavra: "FORRO", dica: "Baile nordestino de sanfona", categoria: "musica" },
            { palavra: "FREVO", dica: "Dança acrobática com guarda-chuva", categoria: "musica" },
            { palavra: "XAXADO", dica: "Dança de guerra de Lampião", categoria: "musica" },
            { palavra: "QUADRILHA", dica: "Dança junina de casamento caipira", categoria: "musica" },
            { palavra: "CATIRA", dica: "Dança rural de bater palma e pé", categoria: "musica" },
            { palavra: "JONGO", dica: "Dança de umbigada de origem africana", categoria: "musica" },
            { palavra: "MARACATU", dica: "Cortejo real de origem africana em Pernambuco", categoria: "musica" },
            { palavra: "CIRANDA", dica: "Roda cantada das praias pernambucanas", categoria: "musica" },
            { palavra: "CHORO", dica: "Música instrumental de Jacob do Bandolim", categoria: "musica" },
            { palavra: "BOSSA", dica: "Estilo suave de João Gilberto e Tom Jobim", categoria: "musica" },
            { palavra: "TROPICALIA", dica: "Movimento antropofágico de Caetano e Gil", categoria: "musica" },
            { palavra: "MAXIXE", dica: "Dança urbana do Rio Belle Époque", categoria: "musica" },
            { palavra: "LAMBADA", dica: "Dança sensual que conquistou o mundo", categoria: "musica" },
            
            // Instrumentos Musicais
            { palavra: "BERIMBAU", dica: "Arco musical com cabaça e caxixi", categoria: "instrumento" },
            { palavra: "CUICA", dica: "Tambor que ronca quando se puxa a vara", categoria: "instrumento" },
            { palavra: "PANDEIRO", dica: "Tambor de mão com soalhas metálicas", categoria: "instrumento" },
            { palavra: "ZABUMBA", dica: "Tambor barrigudo tocado com duas baquetas", categoria: "instrumento" },
            { palavra: "ATABAQUE", dica: "Tambor alto de couro de boi", categoria: "instrumento" },
            { palavra: "TAMBORIM", dica: "Tamborzinho tocado com baqueta flexível", categoria: "instrumento" },
            { palavra: "CAVAQUINHO", dica: "Violãozinho de quatro cordas", categoria: "instrumento" },
            { palavra: "VIOLA", dica: "Violão caipira de dez cordas", categoria: "instrumento" },
            { palavra: "RABECA", dica: "Violino artesanal de uma corda só", categoria: "instrumento" },
            { palavra: "ALFAIA", dica: "Tambor gigante do maracatu nação", categoria: "instrumento" },
            { palavra: "GANZA", dica: "Tubo cheio de sementes ou areia", categoria: "instrumento" },
            { palavra: "RECO", dica: "Bambu riscado com vara de metal", categoria: "instrumento" },
            { palavra: "CAXIXI", dica: "Cestinho de palha com sementes", categoria: "instrumento" },
            { palavra: "AGOGO", dica: "Duas campânulas de ferro batidas", categoria: "instrumento" },
            { palavra: "TRIANGULO", dica: "Ferro dobrado tocado com vareta", categoria: "instrumento" },
            
            // Festas e Tradições
            { palavra: "CARNAVAL", dica: "Festa de samba, frevo e trio elétrico", categoria: "festa" },
            { palavra: "JUNINA", dica: "Festa de fogueira, quadrilha e milho", categoria: "festa" },
            { palavra: "OKTOBERFEST", dica: "Festa da cerveja de tradição alemã", categoria: "festa" },
            { palavra: "PARINTINS", dica: "Festival dos bois Garantido e Caprichoso", categoria: "festa" },
            { palavra: "LAVAGEM", dica: "Tradição baiana de lavar escadarias", categoria: "festa" },
            { palavra: "REISADO", dica: "Folguedo natalino com reis magos", categoria: "festa" },
            { palavra: "CONGADA", dica: "Dança dramática de coroação de origem africana", categoria: "festa" },            
            { palavra: "BUMBA", dica: "Auto popular do boi que morre e ressuscita", categoria: "festa" },
            { palavra: "FESTA", dica: "Celebração popular com música e dança", categoria: "festa" },
            { palavra: "RODA", dica: "Círculo de pessoas cantando e dançando", categoria: "festa" },
            { palavra: "BAILE", dica: "Festa dançante popular", categoria: "festa" },
            { palavra: "ENCONTRO", dica: "Passeio entre duas pessoas com intenção romantica", categoria: "festa" },
            
            // Regionalismos e Expressões
            { palavra: "OXENTE", dica: "Expressão nordestina de surpresa", categoria: "regional" },
            { palavra: "ARRETADO", dica: "Gíria nordestina para muito bom", categoria: "regional" },
            { palavra: "TCHE", dica: "Expressão gaúcha para amigo", categoria: "regional" },
            { palavra: "EGUA", dica: "Expressão amazônica de surpresa", categoria: "regional" },
            { palavra: "SERTANEJO", dica: "Habitante do sertão", categoria: "regional" },
            { palavra: "CAIPIRA", dica: "Pessoa do interior rural", categoria: "regional" },
            { palavra: "MATUTO", dica: "Camponês nordestino", categoria: "regional" },
            { palavra: "GURI", dica: "Menino no sul do Brasil", categoria: "regional" },
            { palavra: "PIAZINHO", dica: "Criança pequena no sul", categoria: "regional" },
            { palavra: "MANEZINHO", dica: "Catarinense da capital", categoria: "regional" },
            { palavra: "CARIOCA", dica: "Natural do Rio de Janeiro", categoria: "regional" },
            { palavra: "PAULISTA", dica: "Natural de São Paulo", categoria: "regional" },
            { palavra: "MINEIRO", dica: "Natural de Minas Gerais", categoria: "regional" },
            
            // Geografia e Natureza
            { palavra: "AMAZONIA", dica: "Maior floresta tropical do mundo", categoria: "geografia" },
            { palavra: "PANTANAL", dica: "Maior planície alagada do mundo", categoria: "geografia" },
            { palavra: "CAATINGA", dica: "Vegetação típica do nordeste", categoria: "geografia" },
            { palavra: "CERRADO", dica: "Savana brasileira do centro-oeste", categoria: "geografia" },
            { palavra: "MATA", dica: "Floresta Atlântica brasileira", categoria: "geografia" },
            { palavra: "SERTAO", dica: "Região semiárida do nordeste", categoria: "geografia" },
            { palavra: "PAMPA", dica: "Campos do sul do Brasil", categoria: "geografia" },
            { palavra: "MANGUE", dica: "Ecossistema costeiro brasileiro", categoria: "geografia" },
            { palavra: "RESTINGA", dica: "Vegetação litorânea", categoria: "geografia" },
            { palavra: "CHAPADA", dica: "Planalto elevado brasileiro", categoria: "geografia" },
            { palavra: "SERRA", dica: "Cadeia montanhosa brasileira", categoria: "geografia" },
            { palavra: "VALE", dica: "Depressão entre montanhas", categoria: "geografia" },
            { palavra: "PLANALTO", dica: "Região elevada e plana", categoria: "geografia" },
            { palavra: "BAIXADA", dica: "Região de baixa altitude", categoria: "geografia" },
            { palavra: "LITORAL", dica: "Região costeira brasileira", categoria: "geografia" },
            
            // Esportes
            { palavra: "FUTEBOL", dica: "Esporte de onze jogadores e uma bola", categoria: "esporte" },
            { palavra: "CAPOEIRA", dica: "Luta-dança criada pelos escravos", categoria: "esporte" },
            { palavra: "VOLEI", dica: "Esporte de rede com seis jogadores", categoria: "esporte" },
            { palavra: "FRESCOBOL", dica: "Tênis de praia sem rede", categoria: "esporte" },
            { palavra: "PETECA", dica: "Jogo com bola de penas de galo", categoria: "esporte" },
            { palavra: "MACULELE", dica: "Dança guerreira com grimas de madeira", categoria: "esporte" },
            { palavra: "SURF", dica: "Esporte de deslizar sobre as ondas", categoria: "esporte" },
            { palavra: "FUTSAL", dica: "Esporte de quadra com cinco jogadores", categoria: "esporte" },
            { palavra: "HANDEBOL", dica: "Esporte de sete jogadores com bola na mão", categoria: "esporte" },
            { palavra: "GINASTICA", dica: "Esporte de movimentos acrobáticos", categoria: "esporte" },
            { palavra: "NATACAO", dica: "Esporte praticado em piscinas", categoria: "esporte" },
            { palavra: "JUDO", dica: "Arte marcial japonesa de agarrar", categoria: "esporte" },
            { palavra: "BOXE", dica: "Luta inglesa só com os punhos", categoria: "esporte" },
            { palavra: "CORRIDA", dica: "Esporte de velocidade ou resistência", categoria: "esporte" }
        ];
        
        this.palavras = [];
        
        this.grid = [];
        this.gridSize = 12;
        this.pontuacao = 0;
        this.palavraAtual = null;
        this.celulaAtual = null;
        this.direcaoAtual = null;
        
        this.generateCrossword();
        this.setupEventListeners();
        this.renderGrid();
        this.renderClues();
    }
    
    generateCrossword() {
        let attempts = 0;
        const maxAttempts = 100;
        
        while (attempts < maxAttempts) {
            this.initializeGrid();
            this.palavras = [];
            
            const selectedWords = this.selectRandomWords(7);
            
            if (this.solveCrossword(selectedWords, 0)) {
                break;
            }
            
            attempts++;
        }
        
        if (attempts >= maxAttempts) {
            this.createFallbackCrossword();
        }
    }
    
    selectRandomWords(count) {
        const shuffled = [...this.todasPalavras].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    solveCrossword(words, wordIndex) {
        if (wordIndex >= words.length) {
            return true;
        }
        
        const word = words[wordIndex];
        const positions = this.findAllPositions(word.palavra);
        
        for (const pos of positions) {
            if (this.canPlaceWord(word.palavra, pos.linha, pos.coluna, pos.direcao)) {
                this.placeWord(word.palavra, pos.linha, pos.coluna, pos.direcao);
                
                this.palavras.push({
                    palavra: word.palavra,
                    dica: word.dica,
                    direcao: pos.direcao,
                    linha: pos.linha,
                    coluna: pos.coluna
                });
                
                if (this.solveCrossword(words, wordIndex + 1)) {
                    return true;
                }
                
                this.removeWord(word.palavra, pos.linha, pos.coluna, pos.direcao);
                this.palavras.pop();
            }
        }
        
        return false;
    }
    
    findAllPositions(palavra) {
        const positions = [];
        
        for (let linha = 0; linha < this.gridSize; linha++) {
            for (let coluna = 0; coluna < this.gridSize; coluna++) {
                if (coluna + palavra.length <= this.gridSize) {
                    positions.push({ linha, coluna, direcao: 'horizontal' });
                }
                if (linha + palavra.length <= this.gridSize) {
                    positions.push({ linha, coluna, direcao: 'vertical' });
                }
            }
        }
        
        return positions.sort(() => 0.5 - Math.random());
    }
    
    canPlaceWord(palavra, linha, coluna, direcao) {
        const deltaLinha = direcao === 'horizontal' ? 0 : 1;
        const deltaColuna = direcao === 'horizontal' ? 1 : 0;
        
        let hasIntersection = false;
        
        // Verificar se a palavra cabe no grid
        for (let i = 0; i < palavra.length; i++) {
            const currentLinha = linha + i * deltaLinha;
            const currentColuna = coluna + i * deltaColuna;
            
            if (currentLinha >= this.gridSize || currentColuna >= this.gridSize) {
                return false;
            }
            
            const celula = this.grid[currentLinha][currentColuna];
            
            if (celula.letra !== '' && celula.letra !== palavra[i]) {
                return false;
            }
            
            if (celula.letra === palavra[i]) {
                hasIntersection = true;
            }
        }
        
        if (this.palavras.length > 0 && !hasIntersection) {
            return false;
        }
        
        // Verificar espaçamento ao redor da palavra
        if (!this.checkSpacing(palavra, linha, coluna, direcao)) {
            return false;
        }
        
        return true;
    }
    
    checkSpacing(palavra, linha, coluna, direcao) {
        const deltaLinha = direcao === 'horizontal' ? 0 : 1;
        const deltaColuna = direcao === 'horizontal' ? 1 : 0;
        
        // Verificar células antes e depois da palavra
        const beforeLinha = linha - deltaLinha;
        const beforeColuna = coluna - deltaColuna;
        const afterLinha = linha + palavra.length * deltaLinha;
        const afterColuna = coluna + palavra.length * deltaColuna;
        
        // Célula antes da palavra deve estar vazia
        if (this.isInGrid(beforeLinha, beforeColuna)) {
            const celulaBefore = this.grid[beforeLinha][beforeColuna];
            if (celulaBefore.letra !== '') {
                return false;
            }
        }
        
        // Célula depois da palavra deve estar vazia
        if (this.isInGrid(afterLinha, afterColuna)) {
            const celulaAfter = this.grid[afterLinha][afterColuna];
            if (celulaAfter.letra !== '') {
                return false;
            }
        }
        
        // Verificar células paralelas (adjacentes perpendiculares)
        for (let i = 0; i < palavra.length; i++) {
            const currentLinha = linha + i * deltaLinha;
            const currentColuna = coluna + i * deltaColuna;
            
            const celula = this.grid[currentLinha][currentColuna];
            
            // Se a célula já tem uma letra (intersecção válida), pular verificação
            if (celula.letra === palavra[i] && celula.letra !== '') {
                continue;
            }
            
            // Verificar células adjacentes perpendiculares
            const perpLinha1 = currentLinha + (direcao === 'horizontal' ? -1 : 0);
            const perpColuna1 = currentColuna + (direcao === 'horizontal' ? 0 : -1);
            const perpLinha2 = currentLinha + (direcao === 'horizontal' ? 1 : 0);
            const perpColuna2 = currentColuna + (direcao === 'horizontal' ? 0 : 1);
            
            if (this.isInGrid(perpLinha1, perpColuna1)) {
                const celulaPerp1 = this.grid[perpLinha1][perpColuna1];
                if (celulaPerp1.letra !== '') {
                    return false;
                }
            }
            
            if (this.isInGrid(perpLinha2, perpColuna2)) {
                const celulaPerp2 = this.grid[perpLinha2][perpColuna2];
                if (celulaPerp2.letra !== '') {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    isInGrid(linha, coluna) {
        return linha >= 0 && linha < this.gridSize && coluna >= 0 && coluna < this.gridSize;
    }
    
    placeWord(palavra, linha, coluna, direcao) {
        const deltaLinha = direcao === 'horizontal' ? 0 : 1;
        const deltaColuna = direcao === 'horizontal' ? 1 : 0;
        
        for (let i = 0; i < palavra.length; i++) {
            const currentLinha = linha + i * deltaLinha;
            const currentColuna = coluna + i * deltaColuna;
            
            const celula = this.grid[currentLinha][currentColuna];
            celula.letra = palavra[i];
            celula.bloqueado = false;
            celula[direcao === 'horizontal' ? 'horizontal' : 'vertical'] = true;
        }
    }
    
    removeWord(palavra, linha, coluna, direcao) {
        const deltaLinha = direcao === 'horizontal' ? 0 : 1;
        const deltaColuna = direcao === 'horizontal' ? 1 : 0;
        
        for (let i = 0; i < palavra.length; i++) {
            const currentLinha = linha + i * deltaLinha;
            const currentColuna = coluna + i * deltaColuna;
            
            const celula = this.grid[currentLinha][currentColuna];
            
            const isUsedByOther = this.palavras.some(p => {
                if (p.palavra === palavra) return false;
                
                const pDeltaLinha = p.direcao === 'horizontal' ? 0 : 1;
                const pDeltaColuna = p.direcao === 'horizontal' ? 1 : 0;
                
                for (let j = 0; j < p.palavra.length; j++) {
                    const pLinha = p.linha + j * pDeltaLinha;
                    const pColuna = p.coluna + j * pDeltaColuna;
                    
                    if (pLinha === currentLinha && pColuna === currentColuna) {
                        return true;
                    }
                }
                return false;
            });
            
            if (!isUsedByOther) {
                celula.letra = '';
                celula.bloqueado = true;
                celula.horizontal = false;
                celula.vertical = false;
            }
        }
    }
    
    createFallbackCrossword() {
        this.palavras = [
            { palavra: "SACI", dica: "Personagem travesso de uma perna só", direcao: "horizontal", linha: 3, coluna: 1 },
            { palavra: "AÇAI", dica: "Fruta amazônica roxa muito nutritiva", direcao: "vertical", linha: 2, coluna: 2 },
            { palavra: "BOTO", dica: "Delfim que vira homem sedutor", direcao: "horizontal", linha: 6, coluna: 0 },
            { palavra: "CUCA", dica: "Bruxa com cabeça de jacaré", direcao: "vertical", linha: 3, coluna: 4 },
            { palavra: "PASTEL", dica: "Massa frita recheada vendida em feira", direcao: "horizontal", linha: 9, coluna: 2 },
            { palavra: "LENDA", dica: "História tradicional do povo", direcao: "vertical", linha: 0, coluna: 7 },
            { palavra: "TAPIOCA", dica: "Massa feita de fécula de mandioca", direcao: "horizontal", linha: 1, coluna: 5 }
        ];
        
        this.initializeGrid();
        this.palavras.forEach(palavra => {
            this.placeWord(palavra.palavra, palavra.linha, palavra.coluna, palavra.direcao);
        });
    }
    
    initializeGrid() {
        this.grid = Array(this.gridSize).fill(null).map(() => 
            Array(this.gridSize).fill(null).map(() => ({ 
                letra: '', 
                bloqueado: true, 
                numero: null,
                horizontal: false,
                vertical: false
            }))
        );
    }
    
    assignNumbers() {
        let nextNumber = 1;
        const usedPositions = new Set();
        
        // Primeiro, identifica posições únicas
        this.palavras.forEach(palavra => {
            const posKey = `${palavra.linha}-${palavra.coluna}`;
            if (!usedPositions.has(posKey)) {
                usedPositions.add(posKey);
                const celula = this.grid[palavra.linha][palavra.coluna];
                celula.numero = nextNumber;
                nextNumber++;
            }
        });
        
        // Depois, atualiza os números das palavras baseado na posição
        this.palavras.forEach(palavra => {
            const celula = this.grid[palavra.linha][palavra.coluna];
            palavra.numero = celula.numero;
        });
    }
    
    renderGrid() {
        this.assignNumbers();
        
        const gridElement = document.getElementById('crossword-grid');
        gridElement.innerHTML = '';
        
        this.grid.forEach((linha, linhaIndex) => {
            linha.forEach((celula, colunaIndex) => {
                const celulaElement = document.createElement('div');
                celulaElement.className = 'cell';
                
                if (celula.bloqueado) {
                    celulaElement.classList.add('blocked');
                } else {
                    celulaElement.classList.add('active');
                    
                    if (celula.numero) {
                        const numeroElement = document.createElement('span');
                        numeroElement.className = 'cell-number';
                        numeroElement.textContent = celula.numero;
                        celulaElement.appendChild(numeroElement);
                    }
                    
                    const inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.maxLength = 1;
                    inputElement.className = 'cell-input';
                    inputElement.dataset.linha = linhaIndex;
                    inputElement.dataset.coluna = colunaIndex;
                    
                    inputElement.addEventListener('input', (e) => {
                        e.target.value = e.target.value.toUpperCase();
                        this.moveToNextCell(linhaIndex, colunaIndex);
                    });
                    
                    inputElement.addEventListener('focus', () => {
                        this.celulaAtual = { linha: linhaIndex, coluna: colunaIndex };
                        this.updateCurrentWord(linhaIndex, colunaIndex);
                        this.highlightWord(linhaIndex, colunaIndex);
                    });
                    
                    inputElement.addEventListener('click', () => {
                        this.selectWordDirection(linhaIndex, colunaIndex);
                    });
                    
                    inputElement.addEventListener('keydown', (e) => {
                        if (e.key === 'Tab') {
                            e.preventDefault();
                            this.handleTabNavigation(linhaIndex, colunaIndex);
                        }
                    });
                    
                    celulaElement.appendChild(inputElement);
                }
                
                gridElement.appendChild(celulaElement);
            });
        });
    }
    
    renderClues() {
        const horizontalClues = document.getElementById('horizontal-clues');
        const verticalClues = document.getElementById('vertical-clues');
        
        horizontalClues.innerHTML = '';
        verticalClues.innerHTML = '';
        
        // Ordena as palavras por número para exibir em ordem
        const sortedPalavras = [...this.palavras].sort((a, b) => a.numero - b.numero);
        
        sortedPalavras.forEach(palavra => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${palavra.numero}.</strong> ${palavra.dica}`;
            
            if (palavra.direcao === 'horizontal') {
                horizontalClues.appendChild(listItem);
            } else {
                verticalClues.appendChild(listItem);
            }
        });
    }
    
    selectWordDirection(linha, coluna) {
        const palavras = this.findAllWordsAt(linha, coluna);
        if (palavras.length > 1) {
            // Se há mais de uma palavra, alterna entre elas
            if (this.palavraAtual && this.palavraAtual.direcao === 'horizontal') {
                this.palavraAtual = palavras.find(p => p.direcao === 'vertical') || palavras[0];
            } else {
                this.palavraAtual = palavras.find(p => p.direcao === 'horizontal') || palavras[0];
            }
            this.direcaoAtual = this.palavraAtual.direcao;
            this.highlightWord(linha, coluna);
        }
    }
    
    updateCurrentWord(linha, coluna) {
        if (!this.direcaoAtual) {
            this.palavraAtual = this.findWordAt(linha, coluna);
            if (this.palavraAtual) {
                this.direcaoAtual = this.palavraAtual.direcao;
            }
        } else {
            const palavras = this.findAllWordsAt(linha, coluna);
            this.palavraAtual = palavras.find(p => p.direcao === this.direcaoAtual) || palavras[0];
            if (this.palavraAtual) {
                this.direcaoAtual = this.palavraAtual.direcao;
            }
        }
    }
    
    findAllWordsAt(linha, coluna) {
        return this.palavras.filter(palavra => {
            const { linha: startLinha, coluna: startColuna, palavra: texto, direcao } = palavra;
            
            if (direcao === 'horizontal') {
                return linha === startLinha && coluna >= startColuna && coluna < startColuna + texto.length;
            } else {
                return coluna === startColuna && linha >= startLinha && linha < startLinha + texto.length;
            }
        });
    }
    
    handleTabNavigation(currentLinha, currentColuna) {
        if (!this.palavraAtual) return;
        
        const { direcao } = this.palavraAtual;
        let nextLinha = currentLinha;
        let nextColuna = currentColuna;
        
        if (direcao === 'horizontal') {
            nextColuna = currentColuna + 1;
        } else {
            nextLinha = currentLinha + 1;
        }
        
        if (nextLinha < this.gridSize && nextColuna < this.gridSize && 
            !this.grid[nextLinha][nextColuna].bloqueado) {
            const nextInput = document.querySelector(`[data-linha="${nextLinha}"][data-coluna="${nextColuna}"]`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    }
    
    moveToNextCell(currentLinha, currentColuna) {
        if (!this.palavraAtual) return;
        
        const { direcao } = this.palavraAtual;
        let nextLinha = currentLinha;
        let nextColuna = currentColuna;
        
        if (direcao === 'horizontal') {
            nextColuna = currentColuna + 1;
        } else {
            nextLinha = currentLinha + 1;
        }
        
        if (nextLinha < this.gridSize && nextColuna < this.gridSize && 
            !this.grid[nextLinha][nextColuna].bloqueado) {
            const nextInput = document.querySelector(`[data-linha="${nextLinha}"][data-coluna="${nextColuna}"]`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    }
    
    highlightWord() {
        document.querySelectorAll('.cell-input').forEach(input => {
            input.classList.remove('highlighted');
        });
        
        if (this.palavraAtual) {
            this.highlightCells(this.palavraAtual);
        }
    }
    
    findWordAt(linha, coluna) {
        return this.palavras.find(palavra => {
            const { linha: startLinha, coluna: startColuna, palavra: texto, direcao } = palavra;
            
            if (direcao === 'horizontal') {
                return linha === startLinha && coluna >= startColuna && coluna < startColuna + texto.length;
            } else {
                return coluna === startColuna && linha >= startLinha && linha < startLinha + texto.length;
            }
        });
    }
    
    highlightCells(palavra) {
        const { linha: startLinha, coluna: startColuna, palavra: texto, direcao } = palavra;
        
        for (let i = 0; i < texto.length; i++) {
            const currentLinha = direcao === 'horizontal' ? startLinha : startLinha + i;
            const currentColuna = direcao === 'horizontal' ? startColuna + i : startColuna;
            
            const input = document.querySelector(`[data-linha="${currentLinha}"][data-coluna="${currentColuna}"]`);
            if (input) {
                input.classList.add('highlighted');
            }
        }
    }
    
    checkAnswers() {
        let correct = 0;
        let total = 0;
        
        this.palavras.forEach(palavra => {
            const { palavra: texto, direcao, linha, coluna } = palavra;
            let wordCorrect = true;
            
            for (let i = 0; i < texto.length; i++) {
                const currentLinha = direcao === 'horizontal' ? linha : linha + i;
                const currentColuna = direcao === 'horizontal' ? coluna + i : coluna;
                
                const input = document.querySelector(`[data-linha="${currentLinha}"][data-coluna="${currentColuna}"]`);
                if (input) {
                    total++;
                    if (input.value.toUpperCase() === texto[i]) {
                        correct++;
                        input.classList.add('correct');
                        input.classList.remove('incorrect');
                    } else {
                        wordCorrect = false;
                        input.classList.add('incorrect');
                        input.classList.remove('correct');
                    }
                }
            }
            
            if (wordCorrect && texto.length > 0) {
                this.pontuacao += texto.length * 10;
            }
        });
        
        this.updateScore();
        
        if (correct === total) {
            setTimeout(() => {
                alert('Parabéns! Você completou o jogo de palavras cruzadas do folclore brasileiro!');
            }, 500);
        }
    }
    
    updateScore() {
        document.getElementById('score-display').textContent = `Pontuação: ${this.pontuacao}`;
    }
    
    reset() {
        this.pontuacao = 0;
        this.updateScore();
        this.direcaoAtual = null;
        this.palavraAtual = null;
        
        document.querySelectorAll('.cell-input').forEach(input => {
            input.value = '';
            input.classList.remove('correct', 'incorrect', 'highlighted', 'hint');
        });
    }
    
    showHint() {
        const emptyInputs = Array.from(document.querySelectorAll('.cell-input')).filter(input => !input.value);
        if (emptyInputs.length > 0) {
            const randomInput = emptyInputs[Math.floor(Math.random() * emptyInputs.length)];
            const linha = parseInt(randomInput.dataset.linha);
            const coluna = parseInt(randomInput.dataset.coluna);
            
            randomInput.value = this.grid[linha][coluna].letra;
            randomInput.classList.add('hint');
            
            this.pontuacao = Math.max(0, this.pontuacao - 5);
            this.updateScore();
        }
    }
    
    setupEventListeners() {
        document.getElementById('check-btn').addEventListener('click', () => {
            this.checkAnswers();
        });
        
        document.getElementById('reset-btn').addEventListener('click', () => {
            this.reset();
        });
        
        document.getElementById('hint-btn').addEventListener('click', () => {
            this.showHint();
        });
        
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.novoJogo();
        });
    }
    
    novoJogo() {
        this.pontuacao = 0;
        this.updateScore();
        this.direcaoAtual = null;
        this.palavraAtual = null;
        this.generateCrossword();
        this.renderGrid();
        this.renderClues();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PalavrasCruzadas();
});