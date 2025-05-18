const music_div = document.createElement('div')
music_div.id = 'music_player'   // 设置元素id
document.body.appendChild(music_div)  // 插入到body元素最后

const ap = new APlayer({
    container: document.getElementById('music_player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [{
        name: 'Time after time ～花舞う街で～',
        artist: '倉木 麻衣',
        url: 'TimeAfterTime.mp3',
        cover: 'cover1.jpg',
        lrc: 'TimeAfterTime.lrc',
        theme: '#ebd0c2'
    }]
});
