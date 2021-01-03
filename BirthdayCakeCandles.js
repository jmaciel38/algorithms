function birthdayCakeCandles(candles) {
  if (typeof candles != 'object') return 0;
  if (candles.length < 1 || candles.length > (10 ** 5)) return 0;
  for(let i = 0; i < candles.length; i ++) {
    if (typeof candles[i] != 'number') return 0;
    if (candles[i] < 1 || candles[i] > (10 ** 7)) return 0;    
  }
  let highClandle = Math.max(...candles);
  const counter = (count, curr) => {
    if(curr == highClandle) count ++;
    return count;
  }  
  let numCandles = candles.reduce(counter, 0);
  return numCandles;
}

test01 = [3, 2, 1, 3];

result01 = birthdayCakeCandles(test01);