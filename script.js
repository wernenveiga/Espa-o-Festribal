function startTimer(
  duration,
  displaydia,
  displayhora,
  displayminuto,
  displaysegundo
) {
  var timer = duration,
    days,
    hours,
    minutes,
    seconds
  setInterval(function () {
    // days = parseInt(timer / (60 * 60 * 24))
    days = parseInt(timer / (3600 * 24))
    hours = parseInt((timer / 3600) % 24, 10)
    console.log(hours)
    minutes = parseInt((timer / 60) % 60, 10)
    seconds = parseInt(timer % 60, 10)
    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    displaydia.textContent = days
    displayhora.textContent = hours
    displayminuto.textContent = minutes
    displaysegundo.textContent = seconds
    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}
window.onload = function () {
  var dataHoje = new Date()

  let dia = dataHoje.getDate()
  let mes = dataHoje.getMonth()
  let ano = dataHoje.getFullYear()
  let hora = dataHoje.getHours()
  let minutos = dataHoje.getMinutes()
  let segundos = dataHoje.getSeconds()

  console.log(mes)

  var momento =
    dia +
    '/' +
    (mes + 1) +
    '/' +
    ano +
    ' ' +
    hora +
    ':' +
    minutos +
    ':' +
    segundos
  var dateEvento = '27/07/2023 00:00:01'
  // var d2 = '12/12/2020 12:01:00'
  var diff = moment(dateEvento, 'DD/MM/YYYY HH:mm:ss').diff(
    moment(momento, 'DD/MM/YYYY HH:mm:ss')
  )
  var segundo = moment.duration(diff).asSeconds()

  // var timeDiff = Math.abs(dateEvento.getTime() - dataHoje.getTime())
  // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  // console.log(timeDiff + ' dias')
  var duration = segundo // (1000 * 3600 * 24) //timeDiff //* 60 * 24 * diffDays // Converter para segundos
  displaydia = document.querySelector('.dia-c')
  displayhora = document.querySelector('.hora-c')
  displayminuto = document.querySelector('.minuto-c')
  displaysegundo = document.querySelector('.segundo-c')
  // selecionando o timer
  startTimer(duration, displaydia, displayhora, displayminuto, displaysegundo) // iniciando o timer
}
