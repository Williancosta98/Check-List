<h1>Projeto "Check-list" - Uma Aplicação de Gerenciamento de Tarefas :white_check_mark:</h1>
<br>
<h3>Este repositório apresenta o projeto "Check-list", uma aplicação web simples e funcional desenvolvida com o intuito de facilitar a organização pessoal e o gerenciamento de tarefas diárias. O projeto permite que o usuário adicione, marque como concluída e delete tarefas de forma intuitiva, focando em uma experiência de usuário (UX) clara e objetiva.</h3>
<br>
<h2>Funcionalidades Principais :star:</h2>
<p>:point_right: <b>Adicionar Tarefa:</b> Inclusão de novas tarefas à lista.</p>
<p>:point_right: <b>Concluir Tarefa:</b> Marcar uma tarefa como completa (com feedback visual).</p>
<p>:point_right: <b>Deletar Tarefa:</b> Remoção permanente de tarefas da lista.</p>
<p>:point_right: <b>Persistência de Dados:</b> As tarefas são salvas e carregadas automaticamente, mesmo após o fechamento do navegador.</p>
<br>
<h2>A imagem do projeto :camera:</h2>
<img src="https://raw.githubusercontent.com/Williancosta98/Check-List/refs/heads/master/img/Layout%20Responsivo.jpg" />
<br>
<h2>Tecnologias e Conceitos Explorados :wrench:</h2>
<p>Este projeto foi fundamental para aprofundar o conhecimento em conceitos essenciais de <b>CSS</b> para estilização e JavaScript para manipulação de dados e <b>DOM</b>, com destaque para a persistência de dados.</p>
<h3>CSS</h3>
<p>Foram utilizadas propriedades-chave para aprimorar a apresentação visual e a experiência do usuário:</p>
<ul>
  <li><b>text-decoration: line-through:</b> Essencial para fornecer o feedback visual de que uma tarefa foi concluída, aplicando uma linha sobre o texto.</li>
  <li><b>btransition: opacity 0.5s ease-in-out:</b> Utilizado para criar transições suaves e agradáveis, como o desaparecimento ou surgimento gradual de elementos.</li>
  <li><b>float: right: </b>Usado para o posicionamento específico de elementos (como os ícones de ação) no lado direito de seus contêineres.</li>
</ul>
<h3>JavaScript (Estrutura e Persistência de Dados)</h3>
<p>O código JavaScript foi construído para ser modular, usando funções para gerenciar o estado da aplicação. O principal aprendizado foi o uso da API Web Storage para persistir as tarefas:</p>
<ul>
  <p>Persistência com <b>localStorage:</b></p>
  <li>localStorage.setItem('list', ...): Responsável por salvar a lista atual de tarefas no armazenamento local do navegador.</li>
  <li><b>localStorage.getItem('list'): </b>Usado para carregar a lista de tarefas ao iniciar a página (reloadTasksPage).</li>
  <br>
  <p>Manipulação de Objetos <b>JSON:</b></p>
  <li><b>.stringify(arrayTasks):</b>JSON Converte o arrayTasks (que é um objeto JavaScript) em uma  <b>string JSON</b>, o formato necessário para ser armazenado no localStorage.</li>
  <li><b>JSON.parse(taskLocalStorage):</b> Converte a string JSON recuperada do localStorage de volta para um array de objetos JavaScript, permitindo a manipulação dos dados.</li>
  <br>
  <p><b>Manipulação de Array:</b></p>
  <ul>
    <li><b>arrayTasks.splice(index, 1):</b> Utilizado na função deleteTask para remover um elemento específico do array, garantindo que o índice correto seja excluído da lista.</li>
  </ul>
</ul>
<br>
<p>Este projeto é um excelente exemplo prático de manipulação de DOM e gestão de estado simples em aplicações frontend. :rocket:</p>
<br>

