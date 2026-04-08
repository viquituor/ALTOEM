# 🔍 Gerador ALTO EM / BAIXO EM

Uma aplicação web interativa desenvolvida com HTML, CSS e JavaScript que permite aos usuários gerar e exportar memes em tempo real baseados no selo de alerta nutricional da Anvisa.

## ✨ Funcionalidades

* **Geração Dinâmica:** Adicione textos personalizados aos rótulos facilmente através de inputs manipulados via JavaScript.
* **Controle de Layout:** Alterne a orientação dos múltiplos selos entre o formato de **Colunas** ou **Linhas** através de botões interativos.
* **Variações de Selo:** Escolha entre a imagem base de "ALTO EM" ou "BAIXO EM" com um clique.
* **Sistema de Limites:** A aplicação possui uma trava lógica que permite empilhar um máximo de 4 avisos na mesma embalagem, garantindo a organização do design.
* **Exportação de Imagem:** Baixe o meme gerado em formato `.png` com fundo transparente/cantos arredondados, pronto para ser compartilhado nas redes sociais.
* **Limpeza do DOM:** Botão dedicado para remover rapidamente os elementos gerados da tela e começar de novo.

## 🚀 Tecnologias e Habilidades Utilizadas

* **HTML5:** Estruturação semântica, importação de scripts externos e uso da tag `<a>` com foco em segurança web (`rel="noopener"`).
* **CSS3:** Estilização utilizando *Flexbox* (alinhamento, gaps e direções), bordas arredondadas e interações de *hover*.
* **JavaScript (Vanilla):** Manipulação avançada do DOM para criação (`createElement`, `appendChild`) e remoção (`remove`) de tags HTML dinamicamente.
* **[html2canvas](https://html2canvas.hertzen.com/):** Biblioteca integrada para renderizar o container HTML diretamente em um elemento `<canvas>` e convertê-lo em imagem nativa.
