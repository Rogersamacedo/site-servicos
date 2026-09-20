function filterServices(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) { event.target.classList.add('active'); }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'todos' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function simulateLeadCapture(event) {
    event.preventDefault();
    const name = document.getElementById('leadName').value;
    const email = document.getElementById('leadEmail').value;
    alert('🎉 Sucesso, ' + name + '!\n\nSimulador de Captura de Lead ativo. Dados enviados: (' + email + ').');
    document.getElementById('leadName').value = '';
    document.getElementById('leadEmail').value = '';
}
