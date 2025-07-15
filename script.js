// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const name = document.getElementById('name').value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
    
    // Reset form
    contactForm.reset();
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'var(--primary-dark)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        header.style.backgroundColor = '';
        header.style.boxShadow = '';
    }
});

// Portfolio item hover effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '0';
    });
});

// Menu Hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
