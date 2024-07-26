# V2Board 主题 Nest
> 前后端分离主题，仅需填入后端地址即可  
> 请注意同源策略 

反馈群：[https://t.me/dyaogroup](https://t.me/dyaogroup)  
兼容 `V2Board` 及 `XBoard`  
支持自定义主题颜色  
支持 `Google reCAPTCHA v2`  
自适应移动端、PC端  
自适应系统主题颜色  

## 使用说明

### 修改配置
在项目根目录下的 `public/config.json` 文件中，可以修改以下配置项：

```json
{
    "apiUrl": "https://your-backend-url/", // 后端地址，务必以斜杠结尾
    "title": "V2B Theme Nest", // 服务名称
    "color": "#252525" // 主题颜色
}
```

请将 `apiUrl` 修改为你的后端地址，确保地址以斜杠结尾。同时，你也可以根据需要修改 `title` 和 `color`。

### 后端修改
> 为保证支付回调都能返回来源地址，而不是配置的地址，可以修改 V2Board 后端文件

`app/Services/PaymentService.php` 第 50 行，修改 `return_url` ：
将 `config('v2board.app_url')` 修改为 `$_SERVER["HTTP_ORIGIN"]` 即可返回来源地址

### 部署运行
在部署之前，请确保你的环境满足以下要求：
- Node.js 版本 >= 18

运行以下命令启动服务：
```bash
node server.js
```
服务将会在 `3000` 端口上运行。你可以自行进行反向代理和域名解析。

## 持久化运行

### 使用PM2进行持久化运行

如果你希望使用PM2进行持久化运行，可以按照以下步骤操作：

1. 首先，确保你已经安装了PM2。如果没有安装，可以使用以下命令进行安装：

    ```bash
    npm install pm2 -g
    ```

2. 在项目根目录下，创建一个名为`ecosystem.config.js`的文件，并将以下内容添加到文件中：

    ```javascript
    module.exports = {
      apps: [
         {
            name: "v2b-theme-nest",
            script: "server.js",
            watch: true,
            env: {
              NODE_ENV: "production",
            },
         },
      ],
    };
    ```

3. 使用以下命令启动应用程序：

    ```bash
    pm2 start ecosystem.config.js
    ```

    这将启动应用程序并使用PM2进行监控和持久化运行。

### 使用screen进行持久化运行

如果你希望使用screen进行持久化运行，可以按照以下步骤操作：

1. 首先，确保你已经安装了screen。如果没有安装，可以使用以下命令进行安装：

    ```bash
    sudo apt-get install screen
    ```

2. 使用以下命令创建一个新的screen会话：

    ```bash
    screen -S v2b-theme-nest
    ```

3. 在screen会话中，使用以下命令启动应用程序：

    ```bash
    node server.js
    ```

    按下`Ctrl + A`，然后按下`D`键，即可将screen会话切换到后台运行。

    如果需要重新连接到screen会话，可以使用以下命令：

    ```bash
    screen -r v2b-theme-nest
    ```

### 使用systemd进行持久化运行

如果你希望使用systemd进行持久化运行，可以按照以下步骤操作：

1. 在`/etc/systemd/system/`目录下，创建一个名为`v2b-theme-nest.service`的文件，并将以下内容添加到文件中：

    ```
    [Unit]
    Description=V2B Theme Nest
    After=network.target

    [Service]
    ExecStart=/usr/bin/node /root/V2B-Theme-Nest/server.js
    Restart=always
    User=root
    Environment=NODE_ENV=production

    [Install]
    WantedBy=multi-user.target
    ```

    请确保将`ExecStart`的路径替换为你的实际路径。

2. 使用以下命令启动服务并设置开机自启：

    ```bash
    sudo systemctl start v2b-theme-nest
    sudo systemctl enable v2b-theme-nest
    ```

    这将启动服务并将其设置为开机自启。
