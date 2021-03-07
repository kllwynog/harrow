STAVES = ["notosans","charis"];

HEADWORD = `
    <link rel = "stylesheet" type = "text/css" href = "wlit/ground.css" />
    <link rel = "stylesheet" type = "text/css" href = "wlit/wlit.css" />
    <link rel = "shortcut icon" href = "media/favicon.png" />
`;

FOOTERWORD = `
      <p>
      <a href="https://eff.org">Have right of sight, and fight to right, in every worldwide mindworld.</a>
      </p>
      <p>
      <a href = "index.html">Home.</a> <a href = "moonbook.html">Moonbook.</a> <a href = "#">Cwells.</a>
      </p>
      <p>
      <a id = "eyes" onclick = "eyes()">With eyes without.</a>
      </p>
`;

body = document.getElementsByTagName("body")[0];

function eyes() {
  localStorage.setItem("staves", STAVES[1-STAVES.indexOf(window.getComputedStyle(body).getPropertyValue("font-family"))]);
  see();
}

function see() {
  s = localStorage.getItem("staves");
  body.style.fontFamily = s;
  document.getElementById("eyes").innerHTML = ["With eyes of tail.", "With eyes without."][STAVES.indexOf(s)];
}

document.getElementsByTagName("head")[0].innerHTML += HEADWORD;
document.getElementsByTagName("footer")[0].innerHTML += FOOTERWORD;
see();
