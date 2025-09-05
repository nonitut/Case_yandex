document.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll('.hero__buttons a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let targetID = this.getAttribute('href').substring(1);

        if (window.innerWidth <= 768 && targetID === 'stages') {
            targetID = 'stages_mobile';
        } else if (window.innerWidth > 768 && targetID === 'stages') {
            targetID = 'stages';
        }

        const target = document.getElementById(targetID);
        if (!target) return;

        const offsetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    });
});

});