today = reckon();

forebody = document.getElementById("fore");
forebody.colSpan = today[1];
if (today[1]==0) forebody.style.display = "none";

todaybody = document.getElementById("today");
todaybody.colSpan = 1;

afterbody = document.getElementById("after");
afterbody.colSpan = 11-today[1];
if (today[1]==11) afterbody.style.display = "none";

yearbody = document.getElementById("year");
yearbody.innerHTML += ` of ${YEARS[today[2]].toLowerCase()}`;
