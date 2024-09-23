# Goms

A **Modelagem GOMS** (Goals, Operators, Methods, and Selection rules) é uma técnica utilizada para descrever o comportamento do usuário ao interagir com sistemas de interface, dividindo as ações em metas (goals), operadores (operators), métodos (methods) e regras de seleção (selection rules). GOMS é frequentemente utilizada para prever o tempo e a eficiência com que um usuário realiza tarefas específicas, ajudando a avaliar o desempenho da interface antes de seu lançamento.

### Estrutura do GOMS:
1. **Goals (Metas):** O que o usuário deseja alcançar (exemplo: enviar um e-mail).
2. **Operators (Operadores):** As ações básicas necessárias para atingir a meta (exemplo: clicar, digitar, arrastar).
3. **Methods (Métodos):** Os procedimentos ou passos que o usuário segue para atingir a meta.
4. **Selection Rules (Regras de Seleção):** Regras que ajudam o usuário a decidir qual método usar quando mais de um está disponível.

### Exemplo de Modelagem GOMS: Enviar um E-mail Simples em um Aplicativo de Webmail

#### **Cenário:**
Um usuário deseja enviar um e-mail para um colega usando um cliente de webmail, como o Gmail.

#### **Meta Principal:**
Enviar um e-mail para um colega.

---

#### **Passos na Modelagem GOMS:**

### 1. **Goals (Metas):**
- **Meta principal:** Enviar um e-mail.
- **Submetas:**
  - Abrir o cliente de e-mail.
  - Iniciar um novo e-mail.
  - Inserir o destinatário do e-mail.
  - Escrever o assunto do e-mail.
  - Escrever o corpo do e-mail.
  - Enviar o e-mail.

### 2. **Operators (Operadores):**
Esses são os operadores básicos que o usuário precisa realizar em cada etapa. Eles podem incluir:
- **Mover o cursor.**
- **Clicar com o mouse.**
- **Digitar no teclado.**
- **Selecionar (ex.: contato, botão).**
- **Verificar visualmente a interface (ex.: checar se o destinatário está correto).**

### 3. **Methods (Métodos):**
Os métodos descrevem como cada meta e submeta é realizada, usando operadores. Cada método pode ter uma sequência de ações.

**Método 1: Abrir o cliente de e-mail**
1. Digitar a URL do cliente de e-mail na barra de endereço do navegador (Operador: digitar).
2. Pressionar a tecla Enter (Operador: pressionar tecla).
3. Esperar a página carregar (Operador: aguardar).

**Método 2: Iniciar um novo e-mail**
1. Mover o cursor até o botão "Escrever" (Operador: mover cursor).
2. Clicar no botão "Escrever" (Operador: clicar com o mouse).

**Método 3: Inserir o destinatário do e-mail**
1. Mover o cursor até o campo "Para:" (Operador: mover cursor).
2. Clicar no campo "Para:" (Operador: clicar com o mouse).
3. Digitar o endereço de e-mail do destinatário (Operador: digitar).

**Método 4: Inserir o assunto do e-mail**
1. Mover o cursor até o campo "Assunto" (Operador: mover cursor).
2. Clicar no campo "Assunto" (Operador: clicar com o mouse).
3. Digitar o assunto (Operador: digitar).

**Método 5: Escrever o corpo do e-mail**
1. Mover o cursor até o campo de texto do corpo do e-mail (Operador: mover cursor).
2. Clicar no campo de texto (Operador: clicar com o mouse).
3. Digitar o conteúdo do e-mail (Operador: digitar).

**Método 6: Enviar o e-mail**
1. Mover o cursor até o botão "Enviar" (Operador: mover cursor).
2. Clicar no botão "Enviar" (Operador: clicar com o mouse).

### 4. **Selection Rules (Regras de Seleção):**
Essas regras determinam qual método o usuário vai escolher quando houver mais de uma maneira de realizar a tarefa.

- **Regra 1:** Se o usuário já estiver logado no cliente de e-mail, ele irá direto para o Método 2 (Iniciar um novo e-mail), pulando o Método 1 (Abrir o cliente de e-mail).
- **Regra 2:** Se o usuário já tiver o endereço de e-mail do destinatário salvo nos contatos, ele pode digitar parte do nome e selecionar o contato na lista de sugestões automáticas.
- **Regra 3:** Se o destinatário for o mais recente com quem o usuário trocou e-mails, o sistema pode sugerir automaticamente o destinatário quando o campo "Para:" for clicado.

---

### **Exemplo Completo de GOMS:**
Vamos focar em um exemplo de execução de uma submeta: **Inserir o Destinatário do E-mail** (Método 3).

#### **Submeta:** Inserir o destinatário do e-mail.

1. **Meta:** Preencher o campo "Para:" com o endereço do destinatário.
2. **Operadores:**
   - Mover o cursor até o campo "Para:"
   - Clicar no campo "Para:"
   - Digitar o endereço de e-mail do destinatário
3. **Método:**
   - O usuário pode digitar o endereço de e-mail completo ou selecionar um contato sugerido pela função de autocompletar.
4. **Regras de Seleção:**
   - Se o contato do destinatário aparecer nas sugestões de autocompletar, o usuário pode selecionar o nome com as setas do teclado e pressionar "Enter". Caso contrário, o usuário deve digitar o endereço manualmente.

---

### **Benefícios da Modelagem GOMS:**
- **Previsão de Desempenho:** GOMS pode ser usado para prever quanto tempo levará para um usuário concluir uma tarefa em uma interface específica.
- **Identificação de Problemas:** Ao decompor as tarefas e ações, fica mais fácil identificar pontos de atrito ou complexidade desnecessária que podem ser otimizados.
- **Melhorias de Interface:** Se uma tarefa envolve muitos operadores (muitos cliques, digitação, etc.), pode ser um sinal de que a interface pode ser simplificada.

### **Conclusão:**
A Modelagem GOMS é uma poderosa ferramenta para analisar o comportamento do usuário ao interagir com uma interface. Ao modelar as metas, operadores, métodos e regras de seleção, os designers podem otimizar a eficiência das interações, prever o tempo necessário para realizar tarefas e identificar oportunidades de melhoria no design da interface.

No exemplo acima, a GOMS ajuda a entender como um usuário interage com um cliente de e-mail e a melhorar a experiência de enviar um e-mail, simplificando as ações e decisões envolvidas no processo.