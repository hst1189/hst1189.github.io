# 安装n8n
```
sudo docker run -d -p 5678:5678 --name n8n -v ./n8n_data:/home/node/.n8n -e N8N_SECURE_COOKIE=false docker.n8n.io/n8nio/n8n
※允许http访问    -e N8N_SECURE_COOKIE=false   　
```

访问地址：192.168.0.200:5678

