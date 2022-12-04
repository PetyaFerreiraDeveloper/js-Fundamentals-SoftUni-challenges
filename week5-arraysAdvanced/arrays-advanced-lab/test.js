function findLongestSuffix(str1, str2) {
    let str1Reversed = reverse(str1);
    let str2Reversed = reverse(str2);
    let suffix = [];
    
    for(let i = 0; i < str1Reversed.length; i++) {
      if(str1Reversed[i] !== str2Reversed[i]) {
        return;
      } else {
        suffix.push(str1Reversed[i]);
      }
    }
    if (suffix.length === 0) {
      return NULL;
    }
    console.log(suffix.join(''));
    return suffix.join('');
    
  }
    
  function reverse(str) {
    let reversed = [];
    for(let i = str.length - 1; i >= 0; i--) {
      reversed.push(str[i]);
    }
    let reversedStr = reversed.join('');
    console.log(reversedStr) ;
  }

  reverse('hello');
  findLongestSuffix('cornfield', 'field');