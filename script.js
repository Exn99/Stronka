window.addEventListener('DOMContentLoaded', (event) => {
    const menuLinks = document.querySelectorAll('.horizontal-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop - 80, 
                behavior: 'smooth'
            });
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const offerSection = document.getElementById('offer');
    const offerItems = document.querySelectorAll('.offer-item');
    const options = {
        threshold: 0.5
    };
    const offerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                offerItems.forEach(item => {
                    item.classList.add('animate');
                });
            } else {
                offerItems.forEach(item => {
                    item.classList.remove('animate'); 
                });
            }
        });
    }, options);
    offerObserver.observe(offerSection);
});

document.addEventListener('DOMContentLoaded', function() {
    var contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openFormBtn = document.getElementById('openFormBtn');
    const contactForm = document.querySelector('.contact-form');
    openFormBtn.addEventListener('click', function() {
        const formWindow = window.open('', 'Contact Form', 'width=600,height=400');
        formWindow.document.write('<html><head><title>Kontakt</title>');
        formWindow.document.write('<style>');
        formWindow.document.write(`
            body { font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }
            .contact-form {
                max-width: 800px; 
                margin: 0 auto; 
                text-align: left;
                padding: 20px;
            }
            .form-group {
                margin-bottom: 20px;
            }
            .form-group label {
                display: block;
                font-size: 20px;
                color: #4C4C4C;
                margin-bottom: 5px;
            }
            .form-group input,
            .form-group textarea {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .form-group textarea {
                resize: vertical;
            }
            button[type="submit"] {
                background-color: #4C4C4C;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 18px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button[type="submit"]:hover {
                background-color: #807F7D;
            }
        `);
        formWindow.document.write('</style></head><body>');
        formWindow.document.write('<div class="contact-form">');
        formWindow.document.write(contactForm.innerHTML);
        formWindow.document.write('</div>');
        formWindow.document.write('</body></html>');
        formWindow.document.close();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });

    const menuLinksItems = document.querySelectorAll('.menu-links a');
    menuLinksItems.forEach(function(item) {
        item.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            menuLinks.classList.remove('active');
        });
    });
});
