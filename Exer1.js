function load() {
    console.log('a')
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hour = data.getHours() + ':' + data.getMinutes()
    msg.innerText = `Agora são exatamente ${hour}`
    if (hour >= 0 && hour < 12) {
        img.src = 'image/manha.png'
        document.body.style.backgroundColor = 'rgb(240, 226, 98, 0.884)'

    } else if (hour >= 12 && hour < 18) {
        img.src = 'image/tarde.png'
        document.body.style.backgroundColor = 'rgb(98, 148, 240, 0.884)'
        

    } else {
        img.src = 'image/noite.png' 
        document.body.style.backgroundColor = 'rgb(55, 51, 85, 0.884)'
    }
}

