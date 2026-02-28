# Trouxômetro

**Quanto do seu imposto vai pro bolso de quem deveria te servir?**

O Trouxômetro é um comparativo visual de remuneração entre o setor público/político e o setor privado no Brasil. Ele mostra, em barras lado a lado, o salário-base e os famosos **penduricalhos** (auxílios, verbas indenizatórias e benefícios extras) que fazem a elite do funcionalismo ganhar até **165% acima do teto constitucional**.

## O que você vai ver

- Salários reais de 14 cargos públicos e 11 do setor privado
- Penduricalhos detalhados: auxílio-moradia, auxílio-saúde (até R$ 11.601/mês), auxílio-alimentação (até R$ 4.184/mês), honorários de sucumbência, férias vendidas, licença compensatória e mais ~60 tipos de benefícios
- Quantidade de pessoas em cada cargo
- Comparação visual com barras proporcionais — quanto maior a barra, maior o rombo
- Custo total dos penduricalhos: **R$ 50 bilhões/ano**

## Dados que impressionam

| Cargo | Salário | Penduricalhos | Total |
|-------|---------|---------------|-------|
| Desembargador (TJSP) | R$ 35.462 | R$ 87.338 | **R$ 122.800** |
| Ministro do STF | R$ 46.366 | R$ 35.134 | **R$ 81.500** |
| Juiz Federal | R$ 33.689 | R$ 47.811 | **R$ 81.500** |
| Salário Mínimo | R$ 1.412 | R$ 0 | **R$ 1.412** |

> Um desembargador do TJSP ganha **87x** o salário mínimo. São 2.500 desembargadores. São 57 milhões de brasileiros no mínimo.

## Tech stack

- **Ionic 8** + **Angular 20** (standalone components)
- **Capacitor 8** (pronto para mobile)
- **TypeScript 5.9**

## Como rodar

```bash
npm install
npm start
```

Acesse `http://localhost:8100`

## Fontes

- [G1 — 5 dos penduricalhos mais inacreditáveis do funcionalismo brasileiro](https://g1.globo.com/economia/noticia/2026/02/25/5-dos-penduricalhos-mais-inacreditaveis-do-funcionalismo-brasileiro.ghtml)
- [ASMETRO — O que é o império dos penduricalhos](https://asmetro.org.br/portalsn/2026/02/07/o-que-e-o-imperio-dos-penduricalhos/)
- [Terra — 5 dos penduricalhos mais inacreditáveis do funcionalismo](https://www.terra.com.br/noticias/brasil/5-dos-penduricalhos-mais-inacreditaveis-do-funcionalismo-brasileiro,376ac9e6d9aad0fd1bb09a917edadb55jm4cvb89.html)
- [Brasil de Fato — STF adia julgamento dos penduricalhos](https://www.brasildefato.com.br/2026/02/26/stf-adia-julgamento-dos-penduricalhos-para-marco-entenda-o-que-esta-em-jogo/)
- [O Cafezinho — Extra de juízes chega a 17x a renda média do brasileiro](https://www.ocafezinho.com/2026/02/25/extra-de-juizes-chega-a-17-vezes-a-renda-media-do-brasileiro/)

## Próximos passos

- [ ] **Deploy no Firebase Hosting** — colocar no ar para todo mundo ver
- [ ] **Compartilhamento social** — botão para compartilhar no WhatsApp, Twitter/X e Instagram com imagem gerada automaticamente
- [ ] **Calculadora "Quantos você paga"** — digitar seu salário e ver quantos meses você trabalha para pagar 1 mês de um desembargador
- [ ] **Dados por estado** — mostrar penduricalhos por tribunal (TJSP, TJRJ, TJPR, etc.) já que os valores variam absurdamente
- [ ] **Atualização automática** — puxar dados do Portal da Transparência e do CNJ via API
- [ ] **Modo escuro** — porque a revolta não tem horário
- [ ] **Gráfico de pizza** — mostrar para onde vai o orçamento: quanto é salário-base vs. penduricalhos no total
- [ ] **Timeline histórica** — evolução dos penduricalhos ao longo dos anos
- [ ] **PWA** — instalar como app direto do navegador
- [ ] **Versão mobile nativa** — build Android/iOS via Capacitor para distribuir nas lojas

## Licença

Domínio público. Copie, compartilhe, faça barulho.
