function randomNumber(a) {
  if(a === 0 || a === 1){
    console.log(`Число ${a} - не простое и не составное`)
  }
  for(let i = 2; i <= a; i++) {
    if(a > 1000){
      console.log('Данные неверны')
      break
    }
    else
      if(a % i === 0 && a !== i) {
        console.log(`Число ${a} - составное`)
        break
      }
    else
      if(a === i) {
        console.log(`Число ${a} - простое`)
      }
  }
}
randomNumber(6)
