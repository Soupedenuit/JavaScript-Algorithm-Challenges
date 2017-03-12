/* SAY HI (copied, not original) */

function sayHi(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  txtOutput.value = "Hi there, " + name + "!"
  }

/* REVERSE A STRING (Jan 17 2017)  */

function reverseString() {
  var y = strIn.value;
  var extract = y.split("");
  var backwards = extract.reverse();
  var rebuilt = backwards.join("");
  var strOut = document.getElementById("strOut");
  strOut.value = rebuilt;
  }

/* FACTORIALIZE A NUMBER (Jan 17 2017) */

function factorializeMe() {
  var x = integerIn.value;
  var factorIt = 1;
  for (var i = 1; i <= x; i++) {
  factorIt *= i;
  }
  var factorItCommas =
  factorIt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var integerOut = document.getElementById("integerOut");
  integerOut.value = factorItCommas;
  }

/* CHECK FOR PALINDROMES (Jan 19 2017) */

function palindrome() {
  var y = checkIn.value;
  var strLettersOnly = y.toLowerCase().match(/[A-Za-z0-9]/gi).join("");
  var strBackwardsLettersOnly =  y.toLowerCase().match(/[A-Za-z0-9]/gi).reverse().join("");
  var checkOut = document.getElementById("checkOut");
  if (strLettersOnly == strBackwardsLettersOnly) {
    checkOut.value = true;
}

  else
    checkOut.value = false;
}

/* ABBREVIATE ANY SENTENCE TO AN ACCRONYM */

function accronym() {
  var str = sentenceIn.value;
  var strToWords = str.toUpperCase().split(" ");
  var abbr = [];
  for (var i = 0; i < strToWords.length; i ++) {
  var strToWordsFixed = strToWords[i][0];
  abbr.push(strToWordsFixed);
  }
  var sentenceOut = document.getElementById("sentenceOut"); sentenceOut.value = abbr.join("").toString();
}

/* SCRAMBLE A PARAGRAPH RANDOMLY */

function paragraphScrambler() {
  var oldParagraph = paragraphIn.value;
  var x = oldParagraph.split(" ");
  var xx = x.length;
  var scrambledParagraph = [];
  for (var i = 0; i < xx; i ++) {
  var y = Math.random() * (xx - 1) + 0;
  var z = Math.round(y);
  var word = x[z];
  scrambledParagraph.push(word);
  }
  newParagraph = scrambledParagraph.join(" ");
  var newParagraphOut = document.getElementById("newParagraphOut");
  newParagraphOut.value = newParagraph;
}

/* REVERSE WORDS IN A STRING */

function reverseWords() {
  var str = forwardIn.value;
  var strArray = str.split(" ");
  var strCap = "";
  for ( var i = strArray.length; i > 0; i-- ) {
    strCap += strArray.slice(i-1, i).toString() + " ";
  }
  newSentenceOut = document.getElementById("backwardsOut");
  newSentenceOut.value = strCap;
}

/*
function yellowInputField(x) {
  document.getElementById(x).style.background = "#F8F071";
}

function whiteInputField(x) {
  document.getElementById(x).style.background = "#E6E6FA";
}


document.getElementById("paragraphIn").onmouseover =
  function () {
    document.body.style.background = "black";
  }

  document.getElementById("paragraphIn").onmouseout =
    function () {
      document.body.style.background = "#E6E6FA";
    }

*/

/* jQuery Scripts ------------- */

$( document ).ready(function() {
  $( ".color-input" ).focus(function() {
    $(this).css("background-color", "#55FFFF");
  });
});

$( document ).ready(function() {
  $( ".color-input" ).blur(function() {
    $(this).css("background-color", "#E6E6FA");
  });
});


$( document ).ready(function() {
  $( ".js-challenges" ).mouseenter(function() {
    $(this).css("background-color", "#CAC6FB");
  });
});

$( document ).ready(function() {
  $( ".js-challenges" ).mouseleave(function() {
    $(this).css("background-color", "#BAB6EB");
  });
});
