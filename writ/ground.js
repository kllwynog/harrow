var HEADWORD = `
    <link rel = "stylesheet" type = "text/css" href = "css/reset.css" />
    <link rel = "stylesheet" type = "text/css" href = "css/style.css" />
    <link rel = "shortcut icon" href = "media/favicon.png" />
`;

var FOOTERWORD = `
      <p>
      Look, the <a href="https://eff.org">Electronic Frontier Foundation</a> fights for your rights in the world of evil ghosts.
      </p>
      <p>
      <a href = "index.html">Home.</a> <a href = "moontell.html">Cetsin.</a> <a href = "references.html">References.</a>
      </p>
`;

document.getElementsByTagName("head")[0].innerHTML += HEADWORD;
document.getElementsByTagName("footer")[0].innerHTML = FOOTERWORD;
