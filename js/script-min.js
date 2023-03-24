var openedCard, home = document.getElementsByClassName("home"), logo = document.getElementsByClassName("logo"), hamburguer = document.getElementsByClassName("hamburguer"), menu = document.getElementsByClassName("menu"), menuItens = document.getElementsByClassName("item"), sobre = document.getElementsByClassName("sobre"), digital = document.getElementsByClassName("digital"), grafico = document.getElementsByClassName("grafico"), diagramacao = document.getElementsByClassName("diagramacao"), jobs = document.getElementsByClassName("jobs"), jobCard = document.getElementsByClassName("job-card"), changeBtnTop = document.getElementsByClassName("change-btn-top"), changeBtnBottom = document.getElementsByClassName("change-btn-bottom"), sobrePage = document.getElementsByClassName("sobre-page"), skills = document.getElementsByClassName("skills"), msgGroup = document.getElementsByClassName("msg-group"), currentScrollBar = 0, currentJobType = "all", currentCardId = "", openCardState = !1; window.addEventListener("DOMContentLoaded", e => { let a = document.getElementsByClassName("pre-load"), o = document.getElementsByClassName("content"); a[0].style.display = "none", o[0].style.display = "block" }); const mobileMenu = () => { logo[0].style.display = "none", hamburguer[0].children[0].src = "img/icones/exit.svg", hamburguer[0].style.marginTop = "20px", hamburguer[0].style.marginBottom = "20px", setTimeout(() => { menu[0].style.display = "flex", menu[0].style.flexDirection = "column", menu[0].style.justifyContent = "space-between", menu[0].style.marginBottom = "30px" }, 500), home[0].style.flexDirection = "column", home[0].style.justifyContent = "flex-start", home[0].style.height = "220px", sobre[0].style.textAlign = "center", sobre[0].style.margin = "0 auto", sobre[0].style.marginBottom = "10px", digital[0].style.textAlign = "center", digital[0].style.margin = "0 auto", digital[0].style.marginBottom = "10px", grafico[0].style.textAlign = "center", grafico[0].style.margin = "0 auto", grafico[0].style.marginBottom = "10px", diagramacao[0].style.textAlign = "center", diagramacao[0].style.margin = "0 auto", hamburguer[0].setAttribute("onclick", "closedMenu()") }, closedMenu = () => { menu[0].style.display = "none", home[0].style.height = "60px", home[0].style.flexDirection = "row", home[0].style.justifyContent = "space-between", home[0].style.alignItens = "center", hamburguer[0].children[0].src = "img/icones/menu.svg", hamburguer[0].style.marginTop = "0", hamburguer[0].style.marginBottom = "0", logo[0].style.display = "flex", hamburguer[0].setAttribute("onclick", "mobileMenu()") }, cards = [{ id: "1", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Photoshop"], src: "img/trabalhos/1.webp", src_group: [] }, { id: "2", title: "", description: "", jobType: "digital", jobClass: ["Diagramação", "Vetorização", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"], src: "img/trabalhos/2.webp", src_group: ["img/trabalhos/2a.webp", "img/trabalhos/2b.webp"] }, { id: "3", title: "", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/3.webp", src_group: ["img/trabalhos/3a.webp", "img/trabalhos/3b.webp", "img/trabalhos/3c.webp"] }, { id: "4", title: "", description: "", jobType: "grafico", jobClass: ["Diagramação", "Vetorização"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/4.webp", src_group: ["img/trabalhos/4a.webp"] }, { id: "5", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Composição"], tools: ["Adobe InDesign", "Adobe Photoshop"], src: "img/trabalhos/5.webp", src_group: [] }, { id: "6", title: "", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/6.webp", src_group: [] }, { id: "7", title: "", description: '', jobType: "grafico", jobClass: ["Vetorização"], tools: ["Adobe Illustrator"], src: "img/trabalhos/7.webp", src_group: ["img/trabalhos/7a.webp", "img/trabalhos/7b.webp"] }, { id: "8", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/8.webp", src_group: ["img/trabalhos/8a.webp", "img/trabalhos/8b.webp"] }, { id: "9", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/9.webp", src_group: [] }, { id: "10", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização", "Ilustração"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/10.webp", src_group: ["img/trabalhos/10a.webp", "img/trabalhos/10b.webp", "img/trabalhos/10c.webp", "img/trabalhos/10d.webp", "img/trabalhos/10e.webp", "img/trabalhos/10f.webp"] }, { id: "11", title: "", description: "", jobType: "digital", jobClass: ["Diagramação", "Vetorização", "Ilustração"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/11.webp", src_group: [] }, { id: "12", title: "", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/12.webp", src_group: ["img/trabalhos/12a.webp", "img/trabalhos/12b.webp"] }, { id: "13", title: "I", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/13.webp", src_group: ["img/trabalhos/13a.webp", "img/trabalhos/13b.webp"] }, { id: "14", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"], src: "img/trabalhos/14.webp", src_group: [] }, { id: "15", title: "", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/15.webp", src_group: [] }, { id: "16", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/16.webp", src_group: [] }, { id: "17", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Photoshop"], src: "img/trabalhos/17.webp", src_group: [] }, { id: "18", title: "", description: '', jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/18.webp", src_group: [] }, { id: "19", title: "", description: '', jobType: "grafico", jobClass: ["Vetorização"], tools: ["Adobe Illustrator"], src: "img/trabalhos/19.webp", src_group: ["img/trabalhos/19a.webp", "img/trabalhos/19b.webp"] }, { id: "20", title: "", description: "", jobType: "digital", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/20.webp", src_group: ["img/trabalhos/20a.webp", "img/trabalhos/20b.webp"] }, { id: "21", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"], src: "img/trabalhos/21.webp", src_group: [] }, { id: "22", title: "", description: "", jobType: "digital", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/22.webp", src_group: [] }, { id: "23", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação"], tools: ["Adobe InDesign"], src: "img/trabalhos/23.webp", src_group: [] }, { id: "24", title: "", description: "", jobType: "grafico", jobClass: ["Vetorização", "Ilustração"], tools: ["Adobe Illustrator"], src: "img/trabalhos/24.webp", src_group: ["img/trabalhos/24a.webp", "img/trabalhos/24b.webp", "img/trabalhos/24c.webp"] }, { id: "25", title: "", description: "", jobType: "diagramacao", jobClass: ["Diagramação", "Vetorização", "Edição e Tratamento de Imagem"], tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"], src: "img/trabalhos/25.webp", src_group: [] }, { id: "26", title: "", description: "", jobType: "digital", jobClass: ["Diagramação", "Vetorização"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/26.webp", src_group: [] }, { id: "27", title: "", description: "", jobType: "grafico", jobClass: ["Diagramação", "Vetorização", "Ilustração"], tools: ["Adobe InDesign", "Adobe Illustrator"], src: "img/trabalhos/27.webp", src_group: ["img/trabalhos/27a.webp", "img/trabalhos/27b.webp"] }]; cards.map(e => { const a = jobCard[0].cloneNode(!0); a.setAttribute("id", e.id), a.setAttribute("jobType", e.jobType), a.querySelector("img").src = e.src, jobs[0].appendChild(a) }), jobCard[0].remove(); let openCard = e => { changeBtnTop[0].style.display = "flex", changeBtnTop[0].style.justifyContent = "space-between", changeBtnBottom[0].style.display = "flex", changeBtnBottom[0].style.justifyContent = "space-between", openedCard = document.getElementById(e); let a = document.createElement("div"), o = document.createElement("h2"), r = document.createElement("p"), t = document.createElement("p"), i = document.createElement("p"), s = cards.find(a => a.id == e), d = document.createElement("div"); window.scroll({ top: 0, left: 0, behavior: "smooth" }), viewCardById(e), jobs[0].style.backgroundColor = "#dfdfdf", jobs[0].style.borderRadius = "5px", a.appendChild(o), a.appendChild(r), a.appendChild(t), a.appendChild(i), a.setAttribute("class", "card-info"), o.setAttribute("class", "info-title"), r.setAttribute("class", "info-description"), t.setAttribute("class", "info-job-class"), i.setAttribute("class", "info-tools"), o.innerHTML = s.title, r.innerHTML = s.description, t.innerHTML = s.jobClass.reduce(function (e, a) { return e + "<br>" + a }, "<b>Tipos de Trabalho:</b>"), i.innerHTML = s.tools.reduce(function (e, a) { return e + "<br>" + a }, "<b>Ferramentas Utilizadas:</b>"); for (const e of s.src_group) { let a = document.createElement("img"); a.src = e, a.style.width = "100%", a.style.marginBottom = "20px", d.appendChild(a) } openedCard.appendChild(a), openedCard.appendChild(d), openedCard.style.display = "flex", openedCard.setAttribute("onclick", ""), openedCard.setAttribute("class", "job-opened-card") }, viewCardById = e => { currentCardId = e; for (const a of jobCard) a.id != e && (a.style.display = "none") }, viewCardByjobType = e => { currentJobType = e, sobrePage[0].style.display = "none", changeBtnTop[0].style.display = "none", changeBtnBottom[0].style.display = "none", jobs[0].style.display = "flex", openedCard && (openedCard.removeChild(openedCard.children[1]), openedCard.removeChild(openedCard.children[1]), openedCard.setAttribute("onclick", "openCard(this.id)"), openedCard.setAttribute("class", "job-card"), openedCard = void 0), jobs[0].style.backgroundColor = "white", jobs[0].style.borderRadius = "0"; for (const a of jobCard) a.style.display = "flex", a.getAttribute("jobtype") != e && (a.style.display = "none") }, changeJob = e => { let a = openedCard.id; "left" == e ? (a >= 2 && a--, openedCard.style.display = "none", openedCard.children[1].remove(), openedCard.children[1].remove(), openedCard.setAttribute("onclick", "openCard(this.id)"), openedCard.setAttribute("class", "job-card"), openCard(a)) : "right" == e && (a < cards.length && a++, openedCard.style.display = "none", openedCard.children[1].remove(), openedCard.children[1].remove(), openedCard.setAttribute("onclick", "openCard(this.id)"), openedCard.setAttribute("class", "job-card"), openCard(a)) }, viewAbout = () => { openedCard && (openedCard.setAttribute("onclick", "openCard(this.id)"), openedCard.setAttribute("class", "job-card")), changeBtnTop[0].style.display = "none", changeBtnBottom[0].style.display = "none", jobs[0].style.display = "none", sobrePage[0].style.display = "flex", sobrePage[0].style.marginTop = "50px", sobrePage[0].style.marginLeft = "10%", sobrePage[0].style.marginRight = "10%" }; const infoSkills = [{ name: "Photoshop", level: 4 }, { name: "InDesign", level: 4 }, { name: "Illustrator", level: 3 }, { name: "Premiere Pro", level: 2 }, { name: "Adobe XD", level: 1 }, { name: "HTML 5", level: 3 }, { name: "CSS 3", level: 3 }, { name: "Javascript", level: 3 }, { name: "React", level: 1 }, { name: "Database/ SQL", level: 2 }]; infoSkills.map(e => { const a = document.getElementsByClassName("skill-item")[0].cloneNode(!0); a.children[0].innerHTML = e.name; for (let o = 0; o < e.level; o++)a.children[1].children[o].style.backgroundColor = "#707070"; skills[0].appendChild(a) }), skills[0].children[1].remove(); let msg = [{ mensagem: '"Eu gostaria de ter vários outros projetos para poder contar com a genialidade do Guilherme. Não à toa consegui aproveita-lo para a capa, diagramação e ilustração do meu livro, um verdadeiro três em um."', cliente: "Pedro Amaral", projeto: "Livro Voos Incomuns" }, { mensagem: '"Profissional maravilhoso. Atencioso, inteligente e habilidoso."', cliente: "Yasmin V.", projeto: "Playmat de jogo de cartas" }, { mensagem: '"Profissinal muito competente e cumpriu com todo o combinado. espero voltar a fazer projetos com ele! Já foi o segundo trabalho que pedi e mais uma vez gostei muito."', cliente: "Cesar Filippini", projeto: "Edição de fotos de Aeronave" }, { mensagem: '"Profissional muito dedicado. As ilustrações são excelentes. Ele fez a capa do meu eBook e ficou incrível, super recomendo e espero poder trabalhar novamente com o Guilherme."', cliente: "Eduardo Cezar", projeto: 'Capa do eBook "Universo atrás da parede"' }]; msg.map(e => { let a = document.createElement("div"), o = document.createElement("p"), r = document.createElement("h4"), t = document.createElement("h5"); a.setAttribute("class", "msg-card"), o.setAttribute("class", "msg-text"), r.setAttribute("class", "msg-client"), t.setAttribute("class", "msg-project"), o.innerHTML = e.mensagem, r.innerHTML = "Cliente: " + e.cliente, t.innerHTML = "Projeto: " + e.projeto, a.appendChild(o), a.appendChild(r), a.appendChild(t), msgGroup[0].appendChild(a) });