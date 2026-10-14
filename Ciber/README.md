# Curso — Cibersegurança Básica

Curso de autoestudo em HTML/CSS, com 5 módulos, baseado no *Manual de Cibersegurança Básica* (edição de outubro de 2026).

## Abrir

Abra `index.html` no browser. Não é preciso servidor nem instalação.

Para distribuir aos formandos:

- **Recomendado:** publicar a pasta inteira num alojamento estático, como o GitHub Pages (por exemplo, em ricardodsr.github.io), e partilhar o link no Classroom.
- **Alternativa:** enviar a pasta em `.zip` para os formandos abrirem localmente.

Não carregue os ficheiros HTML soltos no Classroom ou no Drive sem confirmar que abrem como página. Se abrirem apenas como texto, as avaliações não funcionam.

## Estrutura

| Ficheiro | Conteúdo |
| --- | --- |
| `index.html` | Capa, objetivos, diagnóstico V/F e lista de módulos com o progresso |
| `modulo-1.html` … `modulo-5.html` | Capítulos 1–5 do manual. Cada um tem conteúdo, perguntas e respostas e uma avaliação de 6 perguntas |
| `anexos.html` | Glossário, checklist pessoal, contactos e fontes |
| `styles.css` | Estilos partilhados, com modo escuro automático |
| `quiz.js` | Correção das avaliações e progresso (JavaScript sem dependências) |

## Editar uma pergunta da avaliação

Cada pergunta é um `<fieldset class="q">` dentro do `<form class="quiz">`:

- `data-correct` indica a letra da opção certa (`a`–`d`);
- `data-ref` indica a secção do manual em que a pergunta se baseia;
- `<p class="explicacao" hidden>` é a explicação que aparece depois de corrigir.

O critério de êxito está em `data-limiar` no `<form>` (atualmente 4 em 6).

## Limitações

- As respostas certas estão no código da página. Servem para autoavaliação formativa, mas não para um exame com valor certificativo.
- O progresso e a checklist ficam guardados em `localStorage`, ou seja, só neste browser e neste dispositivo. Numa janela privada não ficam guardados, mas o curso funciona na mesma. O progresso entre páginas foi testado no Edge a partir de ficheiros locais. Noutros browsers, a abertura local (`file://`) pode isolar cada página, por isso o progresso só é garantido com o curso alojado.
