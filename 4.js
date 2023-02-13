function getNumber(a, b) {
  let i = setInterval(function() {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

getNumber(5, 15);