export const dateToString = date => {
  const data = date.split('/')

  return new Date(data[2], data[1] - 1, data[0])
}

export const datetimeToString = (date, whitHHmmSS) => {
  if (!date) return ''

  let _date = date.substring(0, 10)
  let _HHmmSS = date.substring(11, 19)

  const data = _date.split('/')

  const HHmmSS = _HHmmSS.split(':')

  if (whitHHmmSS) {
    return new Date(
      data[2],
      data[1] - 1,
      data[0],
      HHmmSS[0],
      HHmmSS[1],
      HHmmSS[2]
    )
  } else {
    return new Date(data[2], data[1] - 1, data[0])
  }
}

export const datetimeToStringDD_MM_YYYY = (date, whitHHmmSS) => {
  if (!date) return ''

  let _date = date.substring(0, 10)
  let _HHmmSS = date.substring(11, 19)

  const data = _date.split('/')

  const HHmmSS = _HHmmSS.split(':')

  if (whitHHmmSS) {
    return new Date(
      data[2],
      data[1] - 1,
      data[0],
      HHmmSS[0],
      HHmmSS[1],
      HHmmSS[2]
    )
  } else {
    return { date: new Date(data[2], data[1] - 1, data[0]), hhmmss: _HHmmSS }
  }
}

export const datetimeToStringYYYY_MM_DD = (date, whitHHmmSS) => {
  if (!date) return ''

  let _date = date.substring(0, 10)
  let _HHmmSS = date.substring(11, 19)

  const data = _date.split('-')

  const HHmmSS = _HHmmSS.split(':')

  if (whitHHmmSS) {
    return new Date(
      data[2],
      data[1] - 1,
      data[0],
      HHmmSS[0],
      HHmmSS[1],
      HHmmSS[2]
    )
  } else {
    return { date: new Date(data[0], data[1] - 1, data[2]), hhmmss: _HHmmSS }
  }
}
