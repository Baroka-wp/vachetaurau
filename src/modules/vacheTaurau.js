const vacheTaurau = (userHand) => {
  const array = [3,4,7,8];
  let taurau = 0;
  let vache = 0;

  const result = userHand.map((h,i) => parseInt(h,10) == array[i] ? taurau += 1 :
                              array.includes(parseInt(h,10)) ?
                              vache += 1 : "" );

  return `${taurau} Taurau${taurau>1 ? "x":""} & ${vache} Vache${vache>1 ? "s":""}"`
}


export default vacheTaurau;
