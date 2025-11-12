document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de impresión
    const printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Animación suave al cargar
    const articles = document.querySelectorAll('article');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    articles.forEach(article => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(article);
    });

    // Smooth scroll para navegación interna (si se agrega)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Indicador visual de progreso de scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateScrollProgress();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // Crear barra de progreso si no existe
        let progressBar = document.getElementById('progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'progress-bar';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 4px;
                background: linear-gradient(90deg, #3498db, #e74c3c);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }
        progressBar.style.width = scrolled + '%';
    }
});