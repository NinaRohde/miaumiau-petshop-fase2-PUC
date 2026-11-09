// Função temporal exigida: relógio dinâmico no rodapé
function atualizarRelogio() {
    const agora = new Date();
    const horarioFormatado = agora.toLocaleTimeString('pt-BR');
    const elementoRelogio = document.getElementById('relogio');
    if (elementoRelogio) {
        elementoRelogio.innerText = `Acedido a: ${agora.toLocaleDateString('pt-BR')} às ${horarioFormatado}`;
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Validação / Interação básica ao enviar o formulário
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCliente = document.getElementById('nomeCliente').value;
    const nomePet = document.getElementById('nomePet').value;
    alert(`Obrigado, ${nomeCliente}! O agendamento para o pet ${nomePet} foi registado com sucesso.`);
    this.reset();
});