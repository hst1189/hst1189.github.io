const music_div = document.createElement('div')
music_div.id = 'music_player'   // 设置元素id
music_div.style = 'width: 400px; margin: 50px auto 0px auto; background-color: lightblue;' 
// document.body.appendChild(music_div)  // 插入到body元素最后
document.getElementsByClassName('about')[0].appendChild(music_div)

const ap = new APlayer({
    container: document.getElementById('music_player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
        name: 'Time after time ～花舞う街で～',
        artist: '倉木 麻衣',
        url: '../music/TimeAfterTime.mp3',
        lrc: '../music/TimeAfterTime.lrc',
        cover: '../music/cover1.jpg'
        }
    ]
});

