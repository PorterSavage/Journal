export function wordCount(entry) {
  var arr = entry.split(' ');
  var count = 0;
  arr.forEach(function(){
    count++;
  });
  return count;
}

export function vowelCount(entry){
  var arr = entry.toLowerCase().split('');
  var count = 0;
  arr.forEach(function(i){
    if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  });
  return count;
}

export function consonantCount(entry) {
  var arr = entry.toLowerCase().split('');
  var count = 0;
  arr.forEach(function(i){
    if(i === "b" || i === "c" || i === "d" || i === "f" || i === "g" || i === "h" || i === "j" || i === "k" || i === "l" || i === "m" || i === "n" || i === "p" || i === "q" || i === "r" || i === "s" || i === "t" || i === "v" || i === "w" || i === "x" || i === "y" || i === "z") {
      count++;
    }
  });
  return count;
}

export function getTeaser(entry) {
  var arr = entry.split(' ');
  var output = [];
  for(var i = 0; i < 8; i++) {
    if(arr[i].includes(".")) {
      output.push(arr[i]);
      return output.join(' ');
    } else {
      output.push(arr[i]);
    }
  }
  return output.join(' ');
}