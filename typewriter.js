var i1 = 0;
var i2 = 0;
var i3 = 0;
var txt = "Hello there, name's bigga. I'm the head security manager of this establishment.";
var txt2 = "I will be asking you a few questions, alright so what is the method where you use your biological data as a password?";
var txt3 = "Correct! Biometric security uses your unique biological characteristics as a form of authentication.";
var speed = 75;

function typeWriter() {
  if (i1 < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i1);
    i1++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
  if (i2 === 0) {
    document.getElementById("demo").innerHTML = "";
  }
  if (i2 < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}

function typeWriter3() {
  if (i3 === 0) {
    document.getElementById("demo").innerHTML = "";
  }
  if (i3 < txt3.length) {
    document.getElementById("demo").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed);
  }
}

setTimeout(typeWriter2, 10000)

function showOutput() {
  let inputData = document.getElementById("userAwnser").value;
  const answer = inputData.trim().toLowerCase();
  const accepted = [
    "biometric security",
    "biometrics",
    "biometric",
    "biometric authentication",
  ];
  if (accepted.includes(answer)) {
    document.getElementById("outputMessage").textContent = "YESSSSS, " + inputData + " is CORRECT!";
    i3 = 0;
    setTimeout(typeWriter3, 500);
  } else {
    document.getElementById("outputMessage").textContent = "Wrong answer, try again!";
  }
}