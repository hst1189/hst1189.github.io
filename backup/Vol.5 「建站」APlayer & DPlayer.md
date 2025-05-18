# 内容简介
DIYGod 大神的2款插件


# APlayer
APlayer is a lovely HTML5 music player.

- Media formats
MP4 H.264 (AAC or MP3)
WAVE PCM
Ogg Theora Vorbis

- Features
Playlist
Lyrics

[Github](https://github.com/DIYgod/APlayer/)、[中文文档](https://aplayer.js.org/#/zh-Hans/) 

### 使用方法
```
step1: 
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">

step2:
const music_div = document.createElement('div')
music_div.id = 'music_player'   // 设置元素id
document.body.appendChild(music_div)  // 插入到body元素最后

step3:
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
        cover: '../music/cover1.jpg',
        theme: '#ebd0c2'
        },
       {
        name: 'song name',
        artist: 'artist',
        url: 'xx.mp3',
        lrc: 'xx.lrc',
        cover: 'cover1.jpg',
        theme: '#ebd0c2' 
       }
    ]
});
```
### 添加效果
`Gmeek-html<img src="https://imgur.com/JDrJXCr.png">`



# DPlayer
DPlayer is a lovely HTML5 danmaku video player to help people build video and danmaku easily.

- Streaming formats
[HLS](https://github.com/video-dev/hls.js)
[FLV](https://github.com/Bilibili/flv.js)
[MPEG DASH](https://github.com/Dash-Industry-Forum/dash.js)
[WebTorrent](https://github.com/webtorrent/webtorrent)
Any other custom streaming formats

- Media formats
MP4 H.264
WebM
Ogg Theora Vorbis

- Features
Danmaku
Screenshot
Hotkeys
Quality switching
Thumbnails
Subtitle

[中文文档](https://dplayer.diygod.dev/zh/)

### 使用方法
```
step1:  <script src="https://cdn.jsdelivr.net/npm/dplayer@1.27.1/dist/DPlayer.min.js"></script>
step2:  <div id="dplayer" style="width: 100%; height: 100%"></div>
step3: 
const dp = new DPlayer({
  container: document.getElementById('dplayer'),
  video: {
      url: https://myqcloud.com/xxx.mp4"); // COSビデオオブジェクトアドレス
  },
});
```
参考：https://www.tencentcloud.com/jp/document/product/436/53812

### 添加效果
`Gmeek-html<img src="https://imgur.com/207ch36.jpg">`

