MONTHS = ["Crank", "Dark", "Whelk", "Spark", "Fox", "Furt", "Falk", "Eft", "Frog", "Fish", "Lurk", "Jerk"];
YEARS = ["Ringworm", "Ridgeworm", "Spokeskin", "Spikeskin"];
RANKS = ["Noughth", "First", "Next", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth"]
THERESTOUND = 1000*60*60;
DAY = 10*(2*THERESTOUND);
MONTH = 30*DAY;
YEAR = 12*MONTH;
WHEEL = 4*YEAR;
WAIN = 15*WHEEL;
LAYERS = [DAY, MONTH, YEAR, WHEEL, WAIN, Infinity];

function shake() {
  for (let sh of document.getElementsByClassName("shake"))
    sh.innerHTML = shorter(reckon());
}

function churn() {
  for (let ch of document.getElementsByClassName("churn"))
    ch.innerHTML = longer(reckon());
}

function reckon(now=new Date()) {
  return LAYERS.slice(0,LAYERS.length-1).map((v,k) => Math.floor((now.getTime()%LAYERS[k+1])/v));
}

function shorter(wain) {
  return wain.join(".");
}

function longer(wain) {
  return `${wain[0]} ${MONTHS[wain[1]]} in ${YEARS[wain[2]]} ${wain[3]} of Wain ${wain[4]}`;
}
