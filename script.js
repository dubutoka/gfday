class MemoryLaneGame {
    constructor() {
        this.memoryPairs = [
            {
                text: "Our first date at the coffee shop",
                image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "That time we got lost hiking",
                image: "https://images.unsplash.com/photo-1551632811-561732d1b306?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "Our favorite pizza place",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "The beach vacation last summer",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "Our movie night tradition",
                image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "The surprise birthday party",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "Our cooking adventures",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center"
            },
            {
                text: "The road trip to the mountains",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center"
            }
        ];
        
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameStarted = false;
        this.startTime = null;
        this.timerInterval = null;
        
        this.initializeGame();
        this.setupEventListeners();
    }
    
    initializeGame() {
        this.createCards();
        this.shuffleCards();
        this.renderGame();
        this.updateStats();
    }
    
    createCards() {
        this.cards = [];
        
        // Create text cards
        this.memoryPairs.forEach((pair, index) => {
            this.cards.push({
                id: `text-${index}`,
                type: 'text',
                content: pair.text,
                pairId: index,
                isFlipped: false,
                isMatched: false
            });
        });
        
        // Create image cards
        this.memoryPairs.forEach((pair, index) => {
            this.cards.push({
                id: `image-${index}`,
                type: 'image',
                content: pair.image,
                pairId: index,
                isFlipped: false,
                isMatched: false
            });
        });
    }
    
    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    renderGame() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        
        this.cards.forEach(card => {
            const cardElement = this.createCardElement(card);
            gameBoard.appendChild(cardElement);
        });
    }
    
    createCardElement(card) {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`;
        cardDiv.dataset.cardId = card.id;
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        if (card.type === 'image') {
            const img = document.createElement('img');
            img.src = card.content;
            img.alt = 'Memory';
            img.className = 'card-image';
            cardContent.appendChild(img);
        } else {
            const text = document.createElement('div');
            text.className = 'card-text';
            text.textContent = card.content;
            cardContent.appendChild(text);
        }
        
        cardDiv.appendChild(cardContent);
        
        cardDiv.addEventListener('click', () => this.flipCard(card.id));
        
        return cardDiv;
    }
    
    flipCard(cardId) {
        const card = this.cards.find(c => c.id === cardId);
        
        if (!card || card.isMatched || card.isFlipped || this.flippedCards.length >= 2) {
            return;
        }
        
        if (!this.gameStarted) {
            this.startGame();
        }
        
        card.isFlipped = true;
        this.flippedCards.push(card);
        
        this.renderGame();
        
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.checkMatch();
        }
        
        this.updateStats();
    }
    
    checkMatch() {
        const [card1, card2] = this.flippedCards;
        
        if (card1.pairId === card2.pairId) {
            // Match found!
            card1.isMatched = true;
            card2.isMatched = true;
            this.matchedPairs++;
            
            this.flippedCards = [];
            
            if (this.matchedPairs === this.memoryPairs.length) {
                setTimeout(() => this.showWinModal(), 500);
            }
        } else {
            // No match
            setTimeout(() => {
                card1.isFlipped = false;
                card2.isFlipped = false;
                this.flippedCards = [];
                this.renderGame();
            }, 1000);
        }
    }
    
    startGame() {
        this.gameStarted = true;
        this.startTime = Date.now();
        this.startTimer();
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }
    
    updateTimer() {
        if (!this.startTime) return;
        
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = timeString;
    }
    
    updateStats() {
        document.getElementById('moves').textContent = this.moves;
        document.getElementById('pairs-found').textContent = this.matchedPairs;
    }
    
    showWinModal() {
        const modal = document.getElementById('win-modal');
        const finalMoves = document.getElementById('final-moves');
        const finalTime = document.getElementById('final-time');
        
        finalMoves.textContent = this.moves;
        finalTime.textContent = document.getElementById('timer').textContent;
        
        modal.style.display = 'block';
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }
    
    resetGame() {
        this.cards.forEach(card => {
            card.isFlipped = false;
            card.isMatched = false;
        });
        
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameStarted = false;
        this.startTime = null;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.shuffleCards();
        this.renderGame();
        this.updateStats();
        document.getElementById('timer').textContent = '00:00';
    }
    
    showHint() {
        if (this.flippedCards.length > 0) return;
        
        // Find an unmatched pair and briefly show them
        const unmatchedCards = this.cards.filter(card => !card.isMatched);
        const randomCard = unmatchedCards[Math.floor(Math.random() * unmatchedCards.length)];
        const matchingCard = unmatchedCards.find(card => 
            card.pairId === randomCard.pairId && card.id !== randomCard.id
        );
        
        if (randomCard && matchingCard) {
            randomCard.isFlipped = true;
            matchingCard.isFlipped = true;
            this.renderGame();
            
            setTimeout(() => {
                randomCard.isFlipped = false;
                matchingCard.isFlipped = false;
                this.renderGame();
            }, 1500);
        }
    }
    
    setupEventListeners() {
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.resetGame();
        });
        
        document.getElementById('hint-btn').addEventListener('click', () => {
            this.showHint();
        });
        
        document.getElementById('play-again-btn').addEventListener('click', () => {
            document.getElementById('win-modal').style.display = 'none';
            this.resetGame();
        });
        
        // Close modal when clicking outside
        document.getElementById('win-modal').addEventListener('click', (e) => {
            if (e.target.id === 'win-modal') {
                e.target.style.display = 'none';
            }
        });
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MemoryLaneGame();
}); 