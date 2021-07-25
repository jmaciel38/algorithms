function staircase(n) {
  if(typeof n != 'number') return 0;
  if(n < 0 || n > 100) return 0;
  let hash = '#'
  let line;
  for(let i = 0; i < n; i ++){
    let hash = '#';
    let line = hash.repeat(i + 1).padStart(n);
    console.log(line);
  }
}

staircase(6);
staircase('erro');
staircase(-1);
staircase(101);