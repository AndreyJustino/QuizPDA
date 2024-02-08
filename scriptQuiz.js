const quiz = [
    {
      pergunta: "Qual foi a data de lançamento da Netflix?", //andrey
      opcao: [
        "30 de Maio de 2000",
        "7 de Maio de 1994",
        "29 de Agosto de 1997",
        "18 de Julho de 2002",
      ],
      resposta: "C",
    },
    {
      pergunta: "Que ano nasci", //beatriz
      opcao: [2005, 2006, 2007, 2008],
      resposta: "A",
    },
    {
      pergunta: "Qual atributo HTML é usado para definir o texto alternativo para uma imagem?", //brenda
      opcao: [
        "alt",
        "title",
        "desc",
        "caption",
      ],
      resposta: "A",
    },
    {
      pergunta: "Qual destes animais não aparece em PROCURANDO NEMO", //felipe
      opcao: ["peixe-palhaço", "peixe Blue Tang", "Polvo", "estrela-do-mar"],
      resposta: "C",
    },
    {
      pergunta: "Qual foi a data e para onde foi o local do primeiro pouso fora de órbita?",
      opcao: [
        "20 de julho de 1969 na Lua",
        "12 de abril de 1961 em Marte",
        "20 de julho de 1967 na Lua",
        "31 de agosto de 1963 em Saturno",
     ],
        resposta: "A",
    },
  ];

  const tema = [
    {
      perfil: "./assets/img/fotoAndrey.jpg", //andrey
      logo: "./assets/img/logoNetflix.png",
      fundo: "./assets/img/fundoNetflix.png",
    },
    {
      perfil: "", //beatriz
      logo: "",
      fundo: "",
    },
    {
      perfil: "./assets/img/brenda.jpeg", //brenda
      logo: "./assets/icon/html.png",
      fundo: "./assets/img/codigo.jpg",
    },
    {
      perfil: "./assets/img/Felipe.jpg", //felipe
      logo: "./assets/icon/ícone-peixe.png",
      fundo: "./assets/img/Nemo.jpg",
    },
    {
      perfil: "", //hiago
      logo: "",
      fundo: "",
    },
  ];

  let nivel = 0;
function exibir() {
  let titulo = document.getElementsByTagName("h1")[0];
  let paragrafo = (document.getElementsByTagName("p")[0].innerHTML = `${quiz[nivel].pergunta}`);
  let ul = document.getElementsByTagName("ul")[0];
  let li = ul.getElementsByTagName("li");
  let datalist = document.getElementsByTagName("datalist")[0];
  let optionList = datalist.getElementsByTagName("option");

  let main = document.getElementsByTagName("main")[0];
  // let section = document.getElementById("imagens")
  let imgLogo = document.getElementById("imgFundo");
  let imgFoto = document.getElementById("imgPerfil");

  const letras = ["A", "B", "C", "D"];