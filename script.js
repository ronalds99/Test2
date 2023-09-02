function countDown(n){
  if (n <1) return []; 
  else {
    const arr = countDown(n-1);
  return arr.unshift(n);
}
}
function myFunction(n){
  alert(countDown(n));
    
}