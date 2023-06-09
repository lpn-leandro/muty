# Wireframe
- https://www.figma.com/proto/Jz0BCz8quCV5yl0IS5xMMx/MUTY---Music-of-The-Year?node-id=2-6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A6

# Checkist

- [x] - Wireframe

---
Parte 1 (30/35)

Caixas de Diálogo

- [x] prompt
- [x] alert
- [x] confirm

Temporizadores

- [x] setInterval
- [x] setTimeout

Funções

- [x] Função anônima com argumento
- [x] Função anônima sem argumento
- [x] Função anônima com retorno
- [x] Função auto-executável - não será aceita a mesma do Module Pattern
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra
- [ ] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [x] Função Flecha - Arrow Function

Eventos

- [x] Evento de carregamento do documento - onload
- [x] Evento de movimento do mouse
- [ ] Evento de teclado - usar charCode ou keyCode
- [x] Eventos de formulário - onfocus e onblur
- [x] Imprimir alguma propriedade do objeto event recebido como parâmetro

Acesso aos elementos DOM do HTML

- [x] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [x] Via getElementByID()
- [x] Via getElementsByName()
- [x] Via getElementsByTagName()
- [x] Via seletores CSS usados na função querySelector() ou querySelectorAll()

Tratadores de Evento

- [x] Especificar o tratador de evento inline
- [x] Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
- [x] Especificar o tratador de evento no carregamento da página HTML com a função addEventListener - no onload
- [x] Usar o operador this em funções tratadoras de eventos.

Objetos Nativos

- [ ] Usar pelo menos 3 métodos de manipulação de array
- [x] Usar laço de repetição (for..in ou for..of ou forEach)
- [x] Usar pelo menos 3 métodos para manipulação de string
- [x] String Template
- [x] Manipulação do CSS de forma nativa via atributo style e classList

Objetos

- [ ] Criar objeto usando função construtora ou notação literal
- [x] Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da classe em UpperCamelCase
- [ ] Usar herança prototipal nativa ou herança de classes do ES6

---
Parte 2[15/16]

Qualidade do código

- [x] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [x] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [x] Usar strict mode
- [x] Usar Module Pattern
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ou const ao invés de var
- [x] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

Formulário

- [x] Validação de formulário com onsubmit usando os métodos tradicionais
- [x] Validação de formulário com HTML5 API
  - [x] Customizar as mensagens nos balões de mensagem
  - [x] Usar os atributos de validação dos inputs
  - [x] Usar expressões regulares
- [x] Ler e escrever em elementos input com a propriedade value
- [x] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [x] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

---


Parte 3[13/14]

jQuery
- [x] Uso de seletores CSS - id, classe e tag
- [x] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [x] Uso de seletores hierárquicos dinâmicos - parent/children/next
- [x] Efeitos fade ou slide
- [x] Especificar o tratador de algum evento via jQuery
- [x] Manipulação do CSS via função css() e addClass()/removeClass()
- [x] Manipulação do conteúdo de um input e div usando jQuery
- [x] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

Web Storage

- [x] Leitura e escrita de dados simples - dados primivos como string, number, boolean
- [x] Leitura e escrita de JSON - dado transformado a partir de um objeto
- [x] Criar e atribuir um dado em um Cookie - opcionalmente, ler e apresentar o valor na tela

Ajax com Backend

- [ ] Requisições AJAX para uma implementação funcional(basta fazer funcionar uma requisição) do backend em ExpressJS na plataforma Node
- [x] (Obrigatório) Requisições AJAX para uma API Fake - JSON Server 
- [x] Requisições AJAX para uma API Rest pública qualquer (Busca CEP API ou IBGE API ou outra).