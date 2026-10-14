/* Curso de Cibersegurança Básica — correção das avaliações e progresso.
   Sem dependências. O curso funciona mesmo que o armazenamento local esteja bloqueado. */
(function () {
  "use strict";

  var PREFIXO = "ciber-curso-";

  function ler(chave) {
    try { return JSON.parse(localStorage.getItem(PREFIXO + chave)); } catch (e) { return null; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(PREFIXO + chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento: ignora */ }
  }

  function limpar(form) {
    form.querySelectorAll("label").forEach(function (l) { l.classList.remove("certa", "errada"); });
    form.querySelectorAll("fieldset").forEach(function (f) { f.classList.remove("falta"); });
    form.querySelectorAll(".explicacao").forEach(function (p) { p.hidden = true; });
    form.querySelectorAll(".percurso").forEach(function (p) { p.hidden = true; });
    form.querySelector(".resultado").innerHTML = "";
  }

  function corrigir(form) {
    var perguntas = form.querySelectorAll("fieldset.q");
    var resultado = form.querySelector(".resultado");
    limpar(form);

    // Garantir que todas as perguntas têm resposta antes de corrigir
    var porResponder = [];
    perguntas.forEach(function (f) {
      if (!f.querySelector("input:checked")) { f.classList.add("falta"); porResponder.push(f); }
    });
    if (porResponder.length) {
      resultado.innerHTML = "<p><strong>Faltam " + porResponder.length +
        " pergunta(s) por responder.</strong> Estão assinaladas a amarelo.</p>";
      porResponder[0].querySelector("input").focus();
      return;
    }

    var certas = 0;
    perguntas.forEach(function (f) {
      var correta = f.getAttribute("data-correct");
      var escolhida = f.querySelector("input:checked");
      f.querySelectorAll("input").forEach(function (i) {
        if (i.value === correta) i.closest("label").classList.add("certa");
      });
      if (escolhida.value === correta) certas++;
      else escolhida.closest("label").classList.add("errada");
      var exp = f.querySelector(".explicacao");
      if (exp) exp.hidden = false;
    });

    var total = perguntas.length;
    var limiar = parseInt(form.getAttribute("data-limiar"), 10) || Math.ceil(total * 2 / 3);
    var aprovado = certas >= limiar;
    resultado.innerHTML =
      '<p class="pontos">' + certas + " em " + total + " certas</p>" +
      "<p>" + (aprovado
        ? "Atingiu o critério de êxito (" + limiar + " ou mais certas). Veja abaixo como ir mais longe."
        : "Ainda não atingiu o critério de êxito (" + limiar + " ou mais certas). Reveja as explicações e as secções indicadas abaixo e tente de novo.") +
      "</p>";
    var percurso = form.querySelector(aprovado ? ".percurso.enriquecimento" : ".percurso.recuperacao");
    if (percurso) percurso.hidden = false;

    var modulo = form.getAttribute("data-modulo");
    var anterior = ler("m" + modulo);
    gravar("m" + modulo, {
      certas: certas,
      total: total,
      aprovado: aprovado || !!(anterior && anterior.aprovado),
      melhor: Math.max(certas, anterior && anterior.melhor || 0)
    });
    resultado.setAttribute("tabindex", "-1");
    resultado.focus();
  }

  document.querySelectorAll("form.quiz").forEach(function (form) {
    form.addEventListener("submit", function (ev) { ev.preventDefault(); corrigir(form); });
    form.addEventListener("reset", function () {
      limpar(form);
      window.setTimeout(function () { form.scrollIntoView({ block: "start" }); }, 0);
    });
  });

  // Progresso no índice
  var itens = document.querySelectorAll("[data-progresso]");
  if (itens.length) {
    var concluidos = 0;
    itens.forEach(function (el) {
      var r = ler("m" + el.getAttribute("data-progresso"));
      if (!r) { el.textContent = "Por fazer"; return; }
      if (r.aprovado) concluidos++;
      el.textContent = (r.aprovado ? "✓ Concluído" : "↻ A rever") + " · melhor resultado: " + r.melhor + "/" + r.total;
      el.classList.add(r.aprovado ? "ok" : "ko");
    });
    var barra = document.querySelector(".progresso span");
    var texto = document.querySelector("[data-progresso-texto]");
    if (barra) barra.style.width = Math.round(concluidos / itens.length * 100) + "%";
    if (texto) texto.textContent = concluidos + " de " + itens.length + " módulos concluídos";
  }

  // Checklist pessoal (anexo B): lembra o que já foi marcado
  var caixas = document.querySelectorAll(".checklist[data-guardar] input[type=checkbox]");
  if (caixas.length) {
    var marcadas = ler("checklist") || {};
    caixas.forEach(function (c) {
      c.checked = !!marcadas[c.id];
      c.addEventListener("change", function () { marcadas[c.id] = c.checked; gravar("checklist", marcadas); });
    });
  }
})();
