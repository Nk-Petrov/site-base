# 🌐 Base de Site em JavaScript + Express — @Nk Petrov

Uma **base pronta de site em JavaScript** com **Express**, feita para quem não quer começar do zero.  
Simples, leve e funcional — perfeita para quem quer um servidor básico já configurado para rodar o site rapidamente.

---

## ⚙️ Como usar

### 🧩 1️⃣ Clone o projeto

<p align="center">
  <a href="#" title="Clonar o repositório">
    <img src="https://img.shields.io/badge/GIT%20CLONE-%23F05033?style=for-the-badge&logo=git&logoColor=white"/>
  </a>
</p>

```bash
git clone https://github.com/Nk-Petrov/site-base
```

Depois de clonar, entre na pasta do projeto:

```bash
cd /sdcard/site-base
```

---

## 📱 Execução no Termux (Android)

<p align="center">
  <a href="#" title="Rodar o site localmente">
    <img src="https://img.shields.io/badge/NODE%20INDEX.JS-%23339933?style=for-the-badge&logo=javascript&logoColor=white"/>
  </a>
</p>

Para iniciar o servidor localmente:

```bash
node index.js
```

💡 **Pronto!**  
O servidor Express iniciará automaticamente e seu site estará disponível em:

👉 **http://localhost:3000**

---

## ☁️ Execução em Hosting

<p align="center">
  <a href="#" title="Rodar o site em Hosting">
    <img src="https://img.shields.io/badge/HOSTING-%23007ACC?style=for-the-badge&logo=cloudflare&logoColor=white"/>
  </a>
</p>

Clone o repositório diretamente no servidor ou hosting que estiver usando:

```bash
git clone https://github.com/Nk-Petrov/site-base
```

E inicie o servidor:

```bash
node index.js
```

💡 **Pronto!**  
O site rodará online com o **Express** ativo.

---

## 🔌 Porta manual

O projeto está configurado por padrão para usar a porta **3000**:

```js
const PORT = process.env.PORT || 3000;
```

⚠️ **Importante:**  
Alguns hostings **não oferecem suporte automático de porta**.  
Se o seu hosting não definir `process.env.PORT`, você deve **alterar manualmente** o número da porta no código:

```js
const PORT = 8080; // ou a porta que seu hosting permitir
```

Basta mudar esse número no arquivo `index.js` conforme a configuração do seu servidor.

---

## 🧠 Sobre

Essa base foi criada para quem quer **um ponto de partida rápido** usando **JavaScript + Express**.  
Ideal para:
- **Landing pages**
- **Portfólios**
- **Sites institucionais**
- **Projetos rápidos**

---

🧑‍💻 Desenvolvido por **@Nk Petrov**  
🔗 [GitHub](https://github.com/Nk-Petrov)

---
