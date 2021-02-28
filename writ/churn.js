MONTHS = ["Fish", "Frog", "Eft", "Falk", "Furt", "Fox", "Spark", "Lich", "Ink", "Crank", "Jack", "Lurk"];
SPOKES = ["Jowl", "Newt", "Shield", "Nix", "Askard", "Seer", "Whelk", "Worm"];
RANKS = ["noughth", "first", "next", "third", "fourth", "fifth", "sixth", "seventh"]
SPANS = [64*288, 8*288, 1*288, 24]
EARTHDAY = 1000 * 60 * 60 * 24;

var d = new Date();

var churn = document.getElementById("churn");

function reckon(day) {
  var wain = [];
  var leftover = day;
  for (var i = 0; i < SPANS.length; i++) {
    wain.push(Math.floor(leftover / SPANS[i]));
    leftover -= wain[i] * SPANS[i];
  }

  wain.push(leftover);
  return wain[4] + " " + MONTHS[wain[3]] + " in the " + RANKS[wain[2]] + " " + SPOKES[wain[1]] + " of the " + RANKS[wain[0]] + " Wain";
}

function toEarthDays(t) {
  return Math.floor(t / EARTHDAY);
}

churn.innerHTML = reckon(toEarthDays(d.getTime()));
