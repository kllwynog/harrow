digits = ["naught", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
ordinals = ["naughth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
months = ["after", "cake", "spring", "easter", "milk", "summer", "litha", "grass", "harvest", "winter", "blood", "yule"];

date = document.getElementById("date");
today = new Date();
date.innerHTML = " the " + datify(today.getDate()) + " of " + monthify(today.getMonth());

function datify(d) {
  if (d < 10) return ordinals[d % 10];
  else if (d == 10) {
    return "tenth";
  } else if (d < 20) {
    return "onety-" + ordinals[d % 10];
  } else if (d == 20) {
    return "twentieth";
  } else if (d < 30) {
    return "twenty-" + ordinals[d % 10];
  } else if (d == 30) {
    return "thirtieth";
  } else {
    return "thirty-" + ordinals[d % 10];
  }
}

function monthify(m) {
  return months[m];
}
