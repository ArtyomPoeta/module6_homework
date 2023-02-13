function evenOddElem() {
  const nums = [15, 20, 25, 30, 35];
  let even = 0;
  let odd = 0;
  for(i = 0; i < nums.length; i++) {
    if(nums [i] % 2 === 0) {
      even += 1}
    else
      if(nums[i] % 2 !== 0) {
        odd += 1
      }
  }
  console.log(`${even} чётных, ${odd} нечётных`)
}

evenOddElem()