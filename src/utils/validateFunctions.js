export const onlyNumber = (str, max = Number.MAX_SAFE_INTEGER) => {
  return str.replace(/\D/g, '').substring(0,max)
}

export const validateBankCard = (str) => {
  let cardCode = str.replace(/\D/g, '').substring(0,16)
  if(cardCode) cardCode = cardCode.match(/.{1,4}/g).join(' ')
  return cardCode
}

export const validatePhone = (str) => {
  const reg = /[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
  let phone = str.replace(/\D/g, '').substring(0,10);
  if(phone) phone = phone.replace(reg, ' ($1) $2-$3-$4')

  return phone
}
