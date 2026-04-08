 // Sincroniza o texto digitado com a imagem em tempo real
    const input = document.getElementById('texto-input');
    const container = document.getElementById('embalagem-preview');
    const avisos = [];

    function baixarImagem() {
      const areaCaptura = document.getElementById('embalagem-preview');
      
      html2canvas(areaCaptura, {
        backgroundColor: null, // Garante fundo branco ao invés de transparente
        scale: 2// Mantém as bordas arredondadas   
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'alto-em.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
    function adicionarTexto() {
      const textoInput = input.value.trim().toUpperCase();
        if (textoInput) {   
            if (avisos.length >= 4) {
                alert('Você já adicionou o número máximo de avisos.');
                return;
            }
            avisos.push(textoInput);
            const novoAviso = document.createElement('div');
            novoAviso.className = 'caixa-preta';
            novoAviso.innerHTML = `<div class="texto-dinamico">${textoInput}</div>`;
            container.appendChild(novoAviso);
            input.value = '';
        } else {
            alert('Por favor, digite um aviso antes de adicionar.');
        }
    }
    function limparTexto() {
        avisos.length = 0; // Limpa o array de avisos
        const caixasPretas = document.querySelectorAll('.caixa-preta');
        caixasPretas.forEach(caixa => caixa.remove()); // Remove as caixas pretas do DOM
    }
    function alto() {
        const img = document.querySelector('.img-rotulo');
        img.src = './altoem.jpeg';
    }
    function baixo() {
        const img = document.querySelector('.img-rotulo');
        img.src = './baixoem.jpeg';
    }
    function coluna() {
        container.style.flexDirection = 'column';
    }
    function linha() {
        container.style.flexDirection = 'row';
    }
