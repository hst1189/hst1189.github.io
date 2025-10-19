# 🎉CheatSheet
[CheatSheet](/imgs/DockerCheatSheet.pdf)

`Gmeek-html<img src="/imgs/DockerCheatSheet.png">`



# 🎉安装Docker
```
sudo curl -fsSL https://get.docker.com | sh    #安装Docker
sudo systemctl enable --now docker             #启动Docker服务
sudo docker -v                                 #查看docker版本，检查是否安装成功
```

# 🎉一些Docker常用命令
```
🪄拉取image
sudo docker pull docker.io/library/image_name:lastest      #拉取镜像
                               ↑            ↑
                     空间（官方空间可省略）  image（版本省略的话，默认最新）

例：　sudo docker pull nginx　#省略写法表示，从官网拉取nginx的最新版本
 ```

```
🪄运行image

docker run   #每次从image 创建新容器及运行

sudo docker run -d  -p 80:8080  -v /data:/data  image_name:lastest      
                ↑　　　↑　　　　　　↑               ↑
           -d 后台运行 -p 端口映射 -v 目录映射   image（版本省略的话，默认最新）
           host内:docker内　host内:docker内
```

```
🪄进入容器
sudo run -it  image_name 
          ↑
     -it 进入容器后
```


```
🪄挂载卷
sudo docker volume create  volume_name                                #创建挂载卷
sudo run -d  -p 80:8080  -v volume_name:/data  image_name:lastest     #用挂载卷启动容器

sudo docker volume inspect volume_name                                #查看挂载卷的真是目录
sudo docker volume list                                               #查看所有挂载卷
sudo docker volume rm volume_name                                     #删除挂载卷
```

```
🪄image管理
sudo docker images                       #查看docker中所有image
sudo docker rmi image_id/image_name      #删除image
```

```
🪄container管理
sudo docker ps -a                             #查看docker中所有容器
sudo docker rm  container_id/container_name   #删除容器
```

```
🪄container管理
sudo docker ps -a                             #查看docker中所有容器
sudo docker rm  container_id/container_name   #删除容器
```

```
🪄启动停止container
sudo docker start container_id/container_name   #启动容器
sudo docker stop container_id/container_name   #停止容器
```

```
🪄查看docker内network
sudo docker network ls
・bridge 
・host 
・null
```



# 🎉Docker image 制作及Push
```
Dockerfile   添加此文件（注意：头文字大写，没有后缀）

FROM node:18-alpine
WORKDIR /app
COPY index.js /index.js
RUN npm install -g pnpm
RUN pnpm install
CMD node /index.js
EXPOSE 3000
```
```
sudo docker build -t user_name/image_name:version .
sudo docker push user_name/image_name   #上传image
```



# 🎉Docker compose
```
docker-compose.yaml
每一个compose，自动创建一个子网

sudo docker compose up -d  #启动compose里所有容器 并自动创建一个子网
sudo docker compose down   #停止并删除compose里所有容器

sudo docker compose start #启动compose
sudo docker compose stop #停止compose
```



# 🎉Docker Playground
https://labs.play-with-docker.com/



# 🎉Docker运行实例
1. [gemini-balance](https://github.com/snailyp/gemini-balance)
```
mkdir ./geminibalance_data
vi .geminibalance.env

API_KEYS=["AIxxxx","AIxxxx","AIxxxx","AIxxxx"]
ALLOWED_TOKENS=["登入密码"]
DATABASE_TYPE=sqlite
SQLITE_DATABASE=default_db

sudo docker run -d --restart=always -p 8000:8000 --name gemini-balance -v ./geminibalance_data:/app/data --env-file .geminibalance.env ghcr.io/snailyp/gemini-balance:latest
```


2. [n8n](https://github.com/n8n-io/n8n)
```
mkdir ./n8n_data
sudo docker run -d --restart=always -p 5678:5678 --name n8n -v ./n8n_data:/home/node/.n8n -e N8N_SECURE_COOKIE=false docker.n8n.io/n8nio/n8n
```


3. [青龙面板](https://github.com/whyour/qinglong)
```
mkdir ./qinglong_data
sudo docker run -d --restart=always -p 5700:5700 --name qinglong -v ./qinglong_data:/ql/data whyour/qinglong:latest
```


4. [CloudSaver](https://github.com/jiangrui1994/CloudSaver)
```
mkdir ./cloudsaver_data
mkdir ./cloudsaver_config

sudo docker run -d --restart=always -p 8008:8008 --name cloud-saver -v ./cloudsaver_data:/app/data -v ./cloudsaver_config:/app/config jiangrui1994/cloudsaver:latest
```
```
[{"name":"115网盘资源分享频道","id":"Lsp115"},{"id":"alyp_1","name":"网盘(高品质)影视"},{"id":"shareAliyun","name":"阿里云盘发布频道"},{"id":"Quark_Movies","name":"夸克云盘综合资源"},{"id":"Aliyun_4K_Movies","name":"阿里云盘4K影视"},{"id":"zaihuayun","name":"阿里云盘资源"},{"id":"PanjClub","name":"盘酱酱Club"},{"id":"tianyirigeng","name":"天翼云盘资源频道"},{"id":"xx123pan","name":"123云盘资源频道"},{"id":"zyzhpd123","name":"123云盘综合频道"},{"id":"cloudtianyi","name":"天翼云盘资源发布频道"},{"id":"tyypzhpd","name":"天翼云盘综合频道"},{"id":"Oscar_4Kmovies","name":"奥斯卡4K蓝光（精品）影视磁力站"},{"id":"ydypzyfx","name":"移动云盘资源分享"},{"id":"bdwpzhpd","name":"百度网盘综合频道"},{"id":"Q66share","name":"阿里云盘吧"},{"id":"BaiduCloudDisk","name":"百度网盘资源分享"},{"id":"yunpan139","name":"网盘资源收藏（移动云盘）"},{"id":"yunpanuc","name":"网盘资源收藏（UC网盘）"},{"id":"qixingzhenren","name":"云盘资源发布频道"},{"id":"duanjucabian","name":"热门短剧/擦边短剧/精选短剧/在线预览"},{"id":"yoyokuakeduanju","name":"YOYO资源|夸克|短剧"},{"id":"Channel_Shares_115","name":"Shares_115_Channel"},{"id":"yeqingjie_GJG666","name":"爷青回动画分享"},{"id":"gotopan","name":"迅雷云盘"},{"id":"oneonefivewpfx","name":"影巢"},{"id":"zhenyingsg","name":"帧影时光"},{"id":"movielover8888_TV","name":"【热门网剧在线】"},{"id":"CBduanju","name":"全网擦边｜电影｜资源分享"},{"id":"ucquark","name":"UC夸克百度迅雷资源分享"},{"id":"weichengduanju666","name":"短剧大全资源"},{"id":"yingxiangkj","name":"影享空间"},{"name":"夸克网盘资源收藏夹","id":"QuarkFree"},{"name":"综艺网盘资源频道","id":"TG654TG"},{"name":"115影视资源分享频道","id":"QukanMovie"},{"name":"夸克丶百度丶迅雷丶4K网盘","id":"WFYSFX02"},{"name":"网盘资源收藏","id":"naclyunpan"},{"name":"综艺网盘资源频道","id":"TG654TG"},{"name":"网盘资源收藏","id":"naclyunpan"},{"name":"夸克丶百度丶迅雷丶4K网盘","id":"WFYSFX02"},{"name":"115影视资源分享频道","id":"QukanMovie"}]
```

5. [DeepLX](https://github.com/OwO-Network/DeepLX)
```
sudo docker run -d --restart=always -p 1188:1188 --name deeplx missuo/deeplx:latest
```

6. [uptime-kuma](https://github.com/louislam/uptime-kuma)
```
sudo docker run -d --restart=always -p 3001:3001 --name uptime-kuma -v uptime-kuma:/app/data louislam/uptime-kuma:latest
```

7. [excalidraw](https://github.com/excalidraw/excalidraw)
```
sudo docker run -d --restart=always -p 5000:5000 --name excalidraw excalidraw/excalidraw:latest
```

