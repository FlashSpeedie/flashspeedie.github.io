document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typewriter');

    const phrases = [
        'Computer Engineering Student',
        'Full Stack Developer',
        'Web Developer',
        'AI Tools Builder',
        'Privacy-Focused Developer',
        'Chrome Extension Developer',
        'Open Source Builder',
        'Robotics Programmer',
        'Python Developer',
        'JavaScript Developer',
        'Next.js Developer',
        'Document AI Developer',
        'Student Software Engineer',
        'Frontend Developer',
        'Backend Developer',
        'Product Builder',
        'GitHub Project Creator',
        'ContextGuard Lite Creator',
        'DocFix Studio Creator',
        'FRC Robotics Programmer',
        'AI + Web Developer',
        'Building Secure Student Tools'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            el.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            el.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    if (el) {
        type();
    }
});
