export const numeric = e => {
  if(e.keyCode > 57) return e.preventDefault()
}

export const alphabet = e => {
  if(e.keyCode > 90 || (e.keyCode >= 48 && e.keyCode <= 57)) return e.preventDefault()
}


export const generateData = data => {
  let newData = {
    ...data,
    booked_at: generateDate(),
    status: "diajukan"
  }
  newData = {
    ...newData,
    tanggal_reservasi: getReservasiDate(newData.booked_at, newData.hari)
  }
  return newData
}

export const day = (hari) => {
  let num = 0
  if(hari.toLowerCase() === 'senin') num = 1
  else if(hari.toLowerCase() === 'selasa') num = 2
  else if(hari.toLowerCase() === 'rabu') num = 3
  else if(hari.toLowerCase() === 'kamis') num = 4
  else if(hari.toLowerCase() === 'jumat') num = 5
  else if(hari.toLowerCase() === 'sabtu') num = 6
  else if(hari.toLowerCase() === 'minggu') num = 7  
  return num
}

export const generateDate = () => {
  const date = Date.now()
  const newDate = new Date(date)
  return newDate
}

export const compareDate = (tanggal_reservasi) => {
  let date = new Date(tanggal_reservasi)
  let now = generateDate()
  let d = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()
  let n = now.getDate()+'-'+now.getMonth()+'-'+now.getFullYear()
  if(n === d) {
    return true
  } else {
    return false
  }
}

export const getReservasiDate = (booked_date, days) => {
  days = day(days)
  let dateSub
  let result = new Date(booked_date)
  result.setHours(23, 59, 59)
  if(result.getDay() < days) {
    dateSub = days - result.getDay()    
  } else if(result.getDay() >= days) {
    dateSub = (days + 7) - result.getDay()
  }
  result.setDate(result.getDate() + dateSub)
  return result
}

export const moment = (date) => {
  let dated = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  let result = dated.toLocaleDateString('id-ID', options)
  return result 
}

export const tanggal = (date) => {
  let dated = new Date(date)
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  let result = dated.toLocaleDateString('id-ID', options)
  return result 
}

export const color = (text) => {
  let result
  if (text === 'diajukan'){
    result = 'bg-blue-400'
  } else if (text === 'diterima'){
    result = 'bg-green-400'
  } else if (text === 'ditolak'){
    result = 'bg-red-400'
  }
  return result 
}

export const colors = (text) => {
  let color
  if (text === 'pemeriksaan_visit'){
    color = 'bg-green-400 bg-opacity-60'
  } else if (text === 'bedah'){
    color = 'bg-blue-400 bg-opacity-60'
  } else if (text === 'rawat_inap'){
    color = 'bg-yellow-400 bg-opacity-60'
  } else if (text === 'pemeriksaan_klinik'){
    color = 'bg-indigo-400 bg-opacity-60'
  } else if (text === 'grooming'){
    color = 'bg-pink-400 bg-opacity-60'
  }
  return color
}

export const jenis_pengajuan = (text) => {
  let result
  if (text === 'pemeriksaan_visit'){
    result = 'P. Visit'
  } else if (text === 'pemeriksaan_klinik'){
    result = 'P. Klinik'
  } else if (text === 'bedah'){
    result = 'Bedah'
  } else if (text === 'rawat_inap'){
    result = 'Rawat Inap'
  } else if (text === 'grooming'){
    result = 'Grooming'
  }
  return result 
}