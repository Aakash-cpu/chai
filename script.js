const chai = [];
for (var i = 0; i < 1099; i += 1) {
  if (i % 2 != 0) {
    chai.push("karan");
  } else if (i === 1098) {
    chai.push("karanv");
  } else {
    chai.push("☕");
  }
}
document.getElementById("sarkar").innerHTML = chai.join(" ");
