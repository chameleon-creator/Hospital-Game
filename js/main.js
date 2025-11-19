// ========================================
// SHARED UTILITIES FOR ALL GAMES
// ========================================

// High Score Management
const ScoreManager = {
    save: function(gameId, score) {
        const currentHigh = this.get(gameId);
        if (score > currentHigh) {
            localStorage.setItem(`game${gameId}Score`, score);
            return true; // New high score!
        }
        return false;
    },
    
    get: function(gameId) {
        return parseInt(localStorage.getItem(`game${gameId}Score`)) || 0;
    },
    
    reset: function(gameId) {
        localStorage.removeItem(`game${gameId}Score`);
    },
    
    resetAll: function() {
        localStorage.clear();
    }
};

// Sound Manager (Web Audio API)
const SoundManager = {
    context: null,
    enabled: true,
    
    init: function() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    },
    
    play: function(frequency, duration = 0.2, type = 'sine') {
        if (!this.enabled || !this.context) return;
        
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        oscillator.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
        oscillator.frequency.value = frequency;
        
        gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);
        
        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + duration);
    },
    
    playSuccess: function() {
        this.play(800, 0.15, 'sine');
    },
    
    playError: function() {
        this.play(200, 0.3, 'square');
    },
    
    playPerfect: function() {
        // Play chord
        this.play(523, 0.2); // C
        setTimeout(() => this.play(659, 0.2), 50); // E
        setTimeout(() => this.play(784, 0.2), 100); // G
    },
    
    toggle: function() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
};

// Initialize sound manager
SoundManager.init();

// Game State Manager
const GameState = {
    save: function(gameId, state) {
        sessionStorage.setItem(`game${gameId}State`, JSON.stringify(state));
    },
    
    load: function(gameId) {
        const state = sessionStorage.getItem(`game${gameId}State`);
        return state ? JSON.parse(state) : null;
    },
    
    clear: function(gameId) {
        sessionStorage.removeItem(`game${gameId}State`);
    }
};

// Utility Functions
const Utils = {
    // Get random integer between min and max (inclusive)
    randomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Get random float between min and max
    randomFloat: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    
    // Pick random item from array
    randomChoice: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // Calculate distance between two points
    distance: function(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    },
    
    // Check if two circles collide
    circlesCollide: function(x1, y1, r1, x2, y2, r2) {
        return this.distance(x1, y1, x2, y2) < (r1 + r2);
    },
    
    // Clamp value between min and max
    clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },
    
    // Linear interpolation
    lerp: function(start, end, amount) {
        return start + (end - start) * amount;
    },
    
    // Format time as MM:SS
    formatTime: function(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Format score with commas
    formatScore: function(score) {
        return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

// Canvas Utilities
const CanvasUtils = {
    // Clear canvas
    clear: function(ctx, width, height) {
        ctx.clearRect(0, 0, width, height);
    },
    
    // Draw rounded rectangle
    roundRect: function(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.
