// Interactive Demo Functionality
document.addEventListener('DOMContentLoaded', function() {
    const magicBtn = document.getElementById('magicBtn');
    const output = document.getElementById('output');
    
    // Array of fun coding messages
    const messages = [
        '🎉 You just triggered a JavaScript event!',
        '✨ console.log("Hello, World!");',
        '🚀 Code is poetry in motion!',
        '💡 Every expert was once a beginner!',
        '🌟 Keep pushing to GitHub!',
        '🔥 You\'re doing great!',
        '💻 Coding is creating the future!',
        '🎨 CSS makes the web beautiful!',
        '⚡ JavaScript brings life to pages!',
        '🌈 Your journey has just begun!'
    ];
    
    let clickCount = 0;
    
    // Button click handler
    magicBtn.addEventListener('click', function() {
        clickCount++;
        
        // Get random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update output with animation
        output.style.animation = 'none';
        setTimeout(() => {
            output.textContent = randomMessage;
            output.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Add special effect on 5th click
        if (clickCount % 5 === 0) {
            output.textContent = `🎊 Awesome! You've clicked ${clickCount} times! Keep exploring!`;
            createConfetti();
        }
        
        // Button animation feedback
        magicBtn.style.transform = 'scale(0.9) rotate(-2deg)';
        setTimeout(() => {
            magicBtn.style.transform = '';
        }, 150);
    });
    
    // Skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            showSkillInfo(skill);
        });
    });
    
    function showSkillInfo(skill) {
        const skillInfo = {
            'HTML': 'HTML structures the web! It\'s the foundation of every website.',
            'CSS': 'CSS brings style and beauty to web pages. Make it gorgeous!',
            'JavaScript': 'JavaScript adds interactivity and dynamic behavior. Make it alive!',
            'Git': 'Git helps you track changes and collaborate. Essential for developers!'
        };
        
        output.style.animation = 'none';
        setTimeout(() => {
            output.textContent = `💡 ${skillInfo[skill]}`;
            output.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
    
    // Simple confetti effect
    function createConfetti() {
        const colors = ['#58a6ff', '#3fb950', '#d2a8ff', '#ffa657'];
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            const animationDuration = 2000 + Math.random() * 1000;
            const startTime = Date.now();
            
            function animateConfetti() {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / animationDuration;
                
                if (progress < 1) {
                    const top = progress * window.innerHeight;
                    const rotation = progress * 360 * 2;
                    const opacity = 1 - progress;
                    
                    confetti.style.top = top + 'px';
                    confetti.style.transform = `rotate(${rotation}deg)`;
                    confetti.style.opacity = opacity;
                    
                    requestAnimationFrame(animateConfetti);
                } else {
                    confetti.remove();
                }
            }
            
            requestAnimationFrame(animateConfetti);
        }
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate skill progress bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            }
        });
    }, observerOptions);
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Console welcome message
    console.log('%c👋 Welcome to my GitHub profile!', 'color: #58a6ff; font-size: 20px; font-weight: bold;');
    console.log('%cI see you\'re checking the console - that\'s the spirit of a true developer! 🚀', 'color: #3fb950; font-size: 14px;');
    console.log('%cKeep learning, keep coding! 💻', 'color: #d2a8ff; font-size: 14px;');
});
