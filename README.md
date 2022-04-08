## 本地运行
yarn dev

## 本地打包
yarn build

## 服务器部署
```js
# 生成本地ssh密匙 后续不用再次输入密码
ssh-keygen -t rsa 
ssh-copy-id root@服务器地址

# 1.在上一级终端使用sftp将除了node_modules的文件放在服务器 例如放在 ./home/blog
scp -r nuxtjs-docker-nginx-demo root@服务器地址:/home/blog/

# 2
## 2.1 在 ./home/blog 根目录运行
ssh 'root@服务器地址'  
cd /home/blog/nuxtjs-docker-nginx-demo
docker-compose up -d
## 2.2 停止命令 
docker-compose down 

# 3 清除所有镜像和容器
docker rmi -f $(docker images -aq)
docker rm -f $(docker ps -aq) 
```