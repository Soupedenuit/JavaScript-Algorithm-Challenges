/* SAY HI (copied, not original) */

function sayHi(){
  var txtName = document.getElementById("txtName").value;
  document.getElementById("txtOutput").innerHTML = "Hi there, " + txtName + "! Pleasure to have you here!"
  }

/* REVERSE A STRING (Jan 17 2017)  */
/* USING jQuery ==============>  */

$( document ).ready(function() {
  $( "#reverseString" ).on("mouseover", function() {
  var y = document.getElementById("strIn").value;
  var extract = y.split("");
  var backwards = extract.reverse();
  var rebuilt = backwards.join("");
  document.getElementById("strOut").innerHTML =
  rebuilt;
});
});


/* FACTORIALIZE A NUMBER (Jan 17 2017) */
/* USING addEventListener ==============>  */
/* removed:  function factorializeMe() {  */
document.getElementById("integerIn2").addEventListener("touchstart", function() {
  var x = integerIn.value;
  var factorIt = 1;
  for (var i = 1; i <= x; i++) {
  factorIt *= i;
  }
  var factorItCommas =
  factorIt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("integerOut").innerHTML  = factorItCommas;
});

/* CHECK FOR PALINDROMES (Jan 19 2017) */

function palindrome() {
  var y = checkIn.value;
  var strLettersOnly = y.toLowerCase().match(/[A-Za-z0-9]/gi).join("");
  var strBackwardsLettersOnly =  y.toLowerCase().match(/[A-Za-z0-9]/gi).reverse().join("");
  if (strLettersOnly == strBackwardsLettersOnly) {
    var checkOut = true;
  }

  else
    checkOut = false;

document.getElementById("checkOut").innerHTML = checkOut;
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
  document.getElementById("sentenceOut").innerHTML = abbr.join("").toString();
}

/* SCRAMBLE A PARAGRAPH RANDOMLY */

function paragraphScrambler() {
  var oldParagraph = paragraphIn.value;
  var x = oldParagraph.split(" ");
  var xx = x.length;
  var scrambledParagraph = [];
  for (var i = 0; i < xx; i ++) {
  var y = Math.random() * (xx - 1 - i) + 0;
  var z = Math.round(y);
  var word = x[z];
  scrambledParagraph.push(word);
  x.splice(z, 1);
  }
  newParagraph = scrambledParagraph.join(" ");
  document.getElementById("newParagraphOut").innerHTML = newParagraph;
}

/* REVERSE WORDS IN A STRING */

function reverseWords() {
  var str = forwardIn.value;
  var strArray = str.split(" ");
  var strCap = "";
  for ( var i = strArray.length; i > 0; i-- ) {
    strCap += strArray.slice(i-1, i).toString() + " ";
  }
  document.getElementById("backwardsOut").innerHTML = strCap;
}


/* ROMAN NUMERAL CONVERTER (Apr 14, 2017) */

function convertToRomanNum(num) {
  const characters = {
    1: "I",
    2: "V",
    3: "X",
    4: "L",
    5: "C",
    6: "D",
    7: "M",
    8: "Ṽ",
    9: "Ẋ",
    10: "Ḹ",
    11: "Č"
  };
  num = document.getElementById("numberIn").value;
  var roman = [];
  var numArr = num.toString().split('');

  const digits = {
    1: numArr[numArr.length - 1],
    3: numArr[numArr.length - 2],
    5: numArr[numArr.length - 3],
    7: numArr[numArr.length - 4],
    9: numArr[numArr.length - 5],
    11: numArr[numArr.length - 6]
  };

  for (let i = 1; i < numArr.length * 2; i = i + 2) {

    if (digits[i] > 0 && digits[i] <= 3) {
      for (let j = 0; j < digits[i]; j++) {
      roman.unshift(characters[i]);
      }
    }

    else if (digits[i] == 4) {
      roman.unshift(characters[i + 1]);
      roman.unshift(characters[i]);
    }

    else if (digits[i] == 5) {
      roman.unshift(characters[i+1]);
    }

    else if (digits[i] >= 6 && digits[i] <= 8) {
      for (let j = 5; j < digits[i]; j++) {
        roman.unshift(characters[i]);
      }
        roman.unshift(characters[i + 1]);
    }

    else if (digits[i] == 9) {
      roman.unshift(characters[i + 2]);
      roman.unshift(characters[i]);
    }

    else ;

  } //closing bracket for outer condition

  var result = roman.join('');

  window.document.getElementById("romanOut").innerHTML = result;
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
