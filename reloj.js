/*let mostrarReloj=()=>{
    let reloj=document.getElementById('reloj')
    let fec_Datos=document.getElementById('fec_Datos')
    let fecha =new Date();
    let hora=fecha.getHours()
    let minutos=fecha.getMinutes()
    let segundos=fecha.getSeconds()
    let mes=fecha.getMonth()
    let dia=fecha.getDate()
    let año=fecha.getFullYear()

    let dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
    let meses=['enero','febrero','marzo','abril','mayo','junnio','julio','agosto','septiembre','noviembre','diciembre']

    mes=meses[mes]
    let hr=(hora>12) ? hora-12 : hora
    let am=(hora<12)? 'AM' :'PM'
    if(hora<10){hora='0'+hora}
    if(minutos<10){minutos='0'+ minutos}
    if(segundos<10){segundos='0'+minutos}

    reloj.textContent=`${hr}:${minutos}:${segundos} ${am}`
    
   }

   setInterval(mostrarReloj,1000)*/

   simplyCountdown('#cuenta', {
    year: 2021, // required
    month: 6, // required
    day: 20, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'DÍA', plural: 'DÍAS' },
        hours: { singular: 'HORA', plural: 'HORAS' },
        minutes: { singular: 'MINUTO', plural: 'MINUTOS' },
        seconds: { singular: 'SEGUNDO', plural: 'SEGUNDOS' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: true,
    countUp: false
});