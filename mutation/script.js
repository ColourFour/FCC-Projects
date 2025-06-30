function mutation([a, b]) {
  let check1 = a.toLowerCase();
  let check2 = b.toLowerCase();

  for (let i = 0; i < check2.length; i++) {
    if (!check1.includes(check2[i])) {
      return false;
    }
  }
  return true;
}