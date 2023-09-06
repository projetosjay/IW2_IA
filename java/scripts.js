// Este é um exemplo simples de uso do JavaScript para interatividade (não é necessário neste caso)
// Você pode adicionar interatividade adicional conforme necessário

const filmes = document.querySelectorAll('.filme');

filmes.forEach(filme => {
    filme.addEventListener('click', () => {
        alert(`Você clicou no filme: ${filme.querySelector('h2').textContent}`);
    });
});

filmes.forEach(filme => {
    filme.addEventListener('click', () => {
        const filmeId = filme.getAttribute('data-id');
        window.location.href = `filme${filmeId}.html`;
    });
});