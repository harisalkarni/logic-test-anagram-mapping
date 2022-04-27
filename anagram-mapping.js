function sortStrChars(str) {
    if (!str) {
      return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
  }
  
  const words = ["kita", "atik", "tika", "aku", 'kia', "makan", "kua"];
  
  function getGroupedAnagrams(words) {
    const anagrams = {}; 
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }
  
  const groupedAnagrams = getGroupedAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    console.log(groupedAnagrams[sortedWord].toString());
  }