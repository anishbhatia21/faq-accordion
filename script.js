const faqSections = document.querySelectorAll('.faq .section');

faqSections.forEach(section => {
    const question = section.querySelector('.question');
    const iconPlus = question.querySelector('.icon-plus');
    const iconMinus = question.querySelector('.icon-minus');
    const answer = section.querySelector('.answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('active');
        iconPlus.classList.toggle('active');
        iconMinus.classList.toggle('active');
    });
});