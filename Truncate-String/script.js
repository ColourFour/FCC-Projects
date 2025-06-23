function truncateString(string, num){
  if(string.length > num){
    let slice = string.slice(0, num);
    let append = "...";
    string = slice + append;
    return string;
  }
  return string;
}
