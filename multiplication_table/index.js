for(let i = 1; i <= 9; i++) {

    for (let j = 1; j<=i; j++) {
    // multiply i with number
    const result = i * j;

    // display the result
    document.write(`${i} * ${j} = ${result}` + " " );
  }
	
  document.write('<br>');
}
