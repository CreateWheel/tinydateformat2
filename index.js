/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
 * The padding is applied from the start (left) of the current string.
 */
const padStart = (param) => param.toString().padStart(2, '0')

const oneDigit = (param) => (param.startsWith('0') ? param.slice(-1) : param)

/**
 * Tiny Date Format
 * @param { string } format Formatting strings (default: 'HH:mm:ss')
 * @param { string | number | Date } timestamp Timestamp or string date or date object (default: Date.now())
 */
export default function tinyDateFormat(format = 'HH:mm:ss', timestamp = Date.now()) {
  const date = new Date(timestamp)
  const year = date.getFullYear().toString()
  const month = padStart(date.getMonth() + 1)
  const day = padStart(date.getDate())
  const week = date.getDay()
  const hours = date.getHours()
  const hours12 = hours % 12 || 12
  const minutes = padStart(date.getMinutes())
  const seconds = padStart(date.getSeconds())
  const replacements = {
    YY: year.slice(-2),
    YYYY: year,
    M: oneDigit(month),
    MM: month,
    MMM: date.toLocaleString('default', { month: 'short' }),
    MMMM: date.toLocaleString('default', { month: 'long' }),
    D: oneDigit(day),
    DD: day,
    d: week ? week : 7,
    H: hours,
    HH: padStart(hours),
    h: hours12,
    hh: padStart(hours12),
    m: oneDigit(minutes),
    mm: minutes,
    s: oneDigit(seconds),
    ss: seconds
  }
  const reg = /YY(?:YY)?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}/g
  return format.replace(reg, (match) => replacements[match])
}
