function FrontEnd(params) {
    let url = ''
    return {
        "/Pages/FrontEnd/FrontEnd": [
            {
                text: "🍳〖零基础〗",
                collapsible: true,
                items: [
                    { text: "🖥️ 如何制作网站?", link: "/Pages/FrontEnd/FrontEnd/tutorial" },
                    { text: "👋 Hello World", link: "/Pages/FrontEnd/FrontEnd/HelloWorld" },
                    { text: "⚔️ 趁手兵器", link: "/Pages/FrontEnd/FrontEnd/Weapons" },
                    { text: "🎗️ 介绍前端三剑客", link: "/Pages/FrontEnd/FrontEnd/intro" },
                    { text: "🚧 前端学习路径", link: "/Pages/FrontEnd/FrontEnd/LearningPath", },
                ],
            },
        ],
        "/Pages/FrontEnd/HTML": [
            {
                text: "🟧 HTML",
                collapsible: true,
                items: [
                    { text: "🟧 HTML 学习路径", link: "/Pages/FrontEnd/HTML/HTML" },
                    { text: "🟧 HTML 零碎笔记", link: "/Pages/FrontEnd/HTML/HTML_Note" },
                ],
            },
            {
                text: "🟧 HTML5",
                collapsible: true,
                items: [
                    {
                        text: "🟧 HTML5 Web存储",
                        link: "/Pages/FrontEnd/HTML/HTML5_webstorage",
                    },
                ],
            },
        ],
        "/Pages/FrontEnd/CSS": [
            {
                text: "🟥 CSS",
                collapsible: true,
                items: [
                    { text: "🟥 CSS 学习路径", link: "/Pages/FrontEnd/CSS/CSS" },
                    { text: "🟥 CSS 零碎笔记", link: "/Pages/FrontEnd/CSS/CSS_Note" },
                    { text: "🟥 CSS 代码片段", link: "/Pages/FrontEnd/CSS/CSS_CodeSnippet" },
                    { text: "🟥 CSS 选择器", link: "/Pages/FrontEnd/CSS/CSS_Selector" },
                    { text: "🟥 雪碧图 - Sprite", link: "/Pages/FrontEnd/CSS/CSS_Sprite" },
                ],
            },
            {
                text: "🟥 CSS3",
                collapsible: true,
                items: [
                    { text: "🟥 CSS3 零碎笔记", link: "/Pages/FrontEnd/CSS/CSS3_Note" },
                    { text: "🟥 CSS3 兼容", link: "/Pages/FrontEnd/CSS/CSS3_Compatibility" },
                    { text: "🟥 CSS3 文本", link: "/Pages/FrontEnd/CSS/CSS3_Text" },
                    { text: "🟥 CSS3 背景图片", link: "/Pages/FrontEnd/CSS/CSS3_background" },
                    { text: "🟥 CSS3 变形", link: "/Pages/FrontEnd/CSS/CSS3_transform" },
                    { text: "🟥 CSS3 动画", link: "/Pages/FrontEnd/CSS/CSS3_animation" },
                    { text: "🟥 CSS3 过渡", link: "/Pages/FrontEnd/CSS/CSS3_transition" },
                    { text: "🟥 媒体类型 - media", link: "/Pages/FrontEnd/CSS/CSS3_Media" },
                ],
            },
            {
                text: "🟥 布局",
                collapsible: true,
                items: [
                    { text: "🟥 『居中』 ", link: "/Pages/FrontEnd/CSS/layout_Center" },
                    { text: "🟥 『Flex』 ", link: "/Pages/FrontEnd/CSS/layout_Flex" },
                    { text: "🟥 『Grid』 ", link: "/Pages/FrontEnd/CSS/layout_Grid" },
                ],
            },
            {
                text: "🟥 变量",
                collapsible: true,
                items: [{ text: "🟥 CSS 变量 ", link: "/Pages/FrontEnd/CSS/CSS_var" }],
            },
        ],
        "/Pages/FrontEnd/JavaScript": [
            {
                text: "🟨 JavaScript",
                collapsible: true,
                items: [
                    { text: "🟨 JavaScript 学习路径", link: "/Pages/FrontEnd/JavaScript/JavaScript", },
                    { text: "🟨 JS 零碎笔记", link: "/Pages/FrontEnd/JavaScript/JS_Note" },
                    { text: "🟨 JS 代码片段", link: "/Pages/FrontEnd/JavaScript/JS_CodeSnippet", },
                    { text: "🟨 JS 事件", link: "/Pages/FrontEnd/JavaScript/JS_events" },
                    { text: "🟨 JS Map 和 Set", link: "/Pages/FrontEnd/JavaScript/JS_MapSet", },
                ],
            },
            {
                text: "🟨 JS - 方法",
                collapsible: true,
                items: [
                    { text: "Ⓜ️ Math数学方法", link: "/Pages/FrontEnd/JavaScript/JS_Math" },
                    { text: "⏰ Date日期/时间", link: "/Pages/FrontEnd/JavaScript/JS_Date" },
                    { text: "🟨 JS 数组方法", link: "/Pages/FrontEnd/JavaScript/JS_Array" },
                    { text: "🟨 JS 数组遍历", link: "/Pages/FrontEnd/JavaScript/JS_ArrayEach", },
                    { text: "🟨 JS 数组查找", link: "/Pages/FrontEnd/JavaScript/JS_ArrayFind", },
                    { text: "🟨 JS 数组删除", link: "/Pages/FrontEnd/JavaScript/JS_ArrayDelete", },
                    { text: "🟨 JS 数组批量删除", link: "/Pages/FrontEnd/JavaScript/JS_ArrayBatchesDelete", },
                    { text: "💛 JS 对象方法", link: "/Pages/FrontEnd/JavaScript/JS_Object" },
                    { text: "💛 JS 字符串方法", link: "/Pages/FrontEnd/JavaScript/JS_String", },
                    { text: "💛 JS 类型转换", link: "/Pages/FrontEnd/JavaScript/JS_ChangeType", },
                ],
            },
            {
                text: "🟡 ES6",
                collapsible: true,
                items: [
                    { text: "🟡 ES6", link: "/Pages/FrontEnd/JavaScript/JS_ES6" },
                    { text: "🟡 ES6 Class", link: "/Pages/FrontEnd/JavaScript/JS_ES6_Class" },
                    { text: "🟡 JS 模块化", link: "/Pages/FrontEnd/JavaScript/JS_module" },
                    { text: "🟡 JS 深复制-浅复制", link: "/Pages/FrontEnd/JavaScript/JS_Copy", },
                ],
            },
        ],
        "/Pages/FrontEnd/TypeScript": [
            {
                text: "🟦 TypeScript",
                collapsible: true,
                items: [
                    { text: "🟦 TypeScript", link: "/Pages/FrontEnd/TypeScript/TypeScript" },
                    { text: "🟦 接口 interface", link: "/Pages/FrontEnd/TypeScript/TS_interface", },
                    { text: "🟦 数组的类型", link: "/Pages/FrontEnd/TypeScript/TS_Array" },
                    { text: "🟦 函数的类型", link: "/Pages/FrontEnd/TypeScript/TS_Funsion" },
                    { text: "🟦 类型断言 as", link: "/Pages/FrontEnd/TypeScript/TS_assertion", },
                    { text: "🟦 声明文件", link: "/Pages/FrontEnd/TypeScript/TS_declare" },
                    { text: "🟦 内置对象", link: "/Pages/FrontEnd/TypeScript/TS_objects" },
                    { text: "🟦 类型别名 type", link: "/Pages/FrontEnd/TypeScript/TS_type" },
                    { text: "🟦 元组 tuple", link: "/Pages/FrontEnd/TypeScript/TS_tuple" },
                    { text: '🟦 枚举 enum', link: '/Pages/FrontEnd/TypeScript/TS_enum' },
                    { text: '🟦 类 class', link: '/Pages/FrontEnd/TypeScript/TS_class' },
                    { text: "🟦 泛型 <?>", link: "/Pages/FrontEnd/TypeScript/TS_generic" },
                    { text: "🟦 TypeScript 笔记", link: "/Pages/FrontEnd/TypeScript/TS_Note", },
                ],
            },
        ],
        "/Pages/FrontEnd/Vue": [
            {
                text: "🟩 Vue",
                collapsible: true,
                items: [
                    { text: "🟩 Vue", link: "/Pages/FrontEnd/Vue/Vue" },
                    { text: "🟩 Vue 笔记", link: "/Pages/FrontEnd/Vue/Vue_Note" },
                ],
            },
            {
                text: "🟩 Vue2",
                collapsible: true,
                items: [
                    { text: "🟩 Vue2 事件", link: "/Pages/FrontEnd/Vue/Vue2_events" },
                    { text: "🟩 Vue2 计算 computed", link: "/Pages/FrontEnd/Vue/Vue2_computed", },
                    { text: "🟩 Vue2 监听 Watch", link: "/Pages/FrontEnd/Vue/Vue2_watch" },
                    { text: "🟩 Vue2 过滤器 filters", link: "/Pages/FrontEnd/Vue/Vue2_filters", },
                    { text: "🟩 Vue2 生命周期", link: "/Pages/FrontEnd/Vue/Vue2_life" },
                    { text: "🟩 Vue2 父子组件通信", link: "/Pages/FrontEnd/Vue/Vue2_components", },
                    { text: "🟩 Vue2 keep-alive", link: "/Pages/FrontEnd/Vue/Vue2_keep-alive", },
                    { text: "🟩 Vue2 插槽 slot", link: "/Pages/FrontEnd/Vue/Vue2_slot" },
                    { text: "🟩 Vue2 过渡动画", link: "/Pages/FrontEnd/Vue/Vue2_animation" },
                    { text: "🟩 Object.defineProperty", link: "/Pages/FrontEnd/Vue/Vue2_defineProperty", },
                ],
            },
            {
                text: "🟩 Vue3",
                collapsible: true,
                items: [
                    { text: "🟩 Vue3", link: "/Pages/FrontEnd/Vue/Vue3" },
                    { text: "🟩 Vue3 setup", link: "/Pages/FrontEnd/Vue/Vue3_setup" },
                    { text: "🟩 Vue3 生命周期", link: "/Pages/FrontEnd/Vue/Vue3_生命周期" },
                    { text: "🟩 Vue3 父子组件", link: "/Pages/FrontEnd/Vue/Vue3_components" },
                    { text: "🟩 Vue3 监听", link: "/Pages/FrontEnd/Vue/Vue3_watch" },
                    { text: "🟩 Vue3 计算", link: "/Pages/FrontEnd/Vue/Vue3_computed" },
                    { text: "🟩 Vue3 绑定元素", link: "/Pages/FrontEnd/Vue/Vue3_ref" },
                    { text: "🟩 Vue3 过滤", link: "/Pages/FrontEnd/Vue/Vue3_filters" },
                ],
            },
        ],
        "/Pages/FrontEnd/Nuxt": [
            {
                text: "🟩 Nuxt3",
                collapsible: true,
                items: [{ text: "🟩 Nuxt3", link: "/Pages/FrontEnd/Vue/Nuxt3" }],
            },
        ],
        "/Pages/FrontEnd/Vite": [
            {
                text: "🛠️ 脚手架 / Vue全家桶",
                collapsible: true,
                items: [
                    { text: "⚡ Vite", link: "/Pages/FrontEnd/Vite/Vite" },
                    { text: "⚡ Vite 安装 Sass", link: "/Pages/FrontEnd/Vite/Vite_Sass" },
                    { text: "⚡ Vite 安装 VueRouter", link: "/Pages/FrontEnd/Vite/Vite_VueRouter", },
                    { text: "⚡ Vite 安装 Vuex", link: "/Pages/FrontEnd/Vite/Vite_Vuex" },
                    { text: "⚡ Vite 区分环境", link: "/Pages/FrontEnd/Vite/Vite_env" },
                    { text: "⚡ Vite 跨域 - 开发环境", link: "/Pages/FrontEnd/Vite/Vite_cors", },
                    { text: "🏗️ Vue Cli", link: "/Pages/FrontEnd/Vite/VueCli" },
                    { text: "🍼 网页样式初始化", link: "/Pages/FrontEnd/Vite/CSS_init" },
                    { text: "📱 移动端优化与适配", link: "/Pages/FrontEnd/Vite/Mobile" },
                    { text: "🪱 Vue + Sass", link: "/Pages/FrontEnd/Vite/Vue_Scss" },
                    { text: "🧭 VueRouter", link: "/Pages/FrontEnd/Vite/VueRouter" },
                    { text: "⛺ Vuex", link: "/Pages/FrontEnd/Vite/Vuex" },
                    { text: "🍍 Pinia", link: "/Pages/FrontEnd/Vite/Pinia" },
                    { text: "📡 Axios", link: "/Pages/FrontEnd/Vite/Axios" },
                    { text: "📡 Axios + Vue3 封装/跨域", link: "/Pages/FrontEnd/Vite/Axios_Vue3", },
                    { text: "📡 Axios + Vue2 封装/跨域", link: "/Pages/FrontEnd/Vite/Axios_Vue2", },
                ],
            },
        ],
        "/Pages/FrontEnd/PWA": [
            {
                text: "🧩 PWA",
                collapsible: true,
                items: [
                    { text: "🧩 PWA", link: "/Pages/FrontEnd/PWA/PWA" },
                    { text: "🧩 Vue + PWA", link: "/Pages/FrontEnd/PWA/Vue_PWA" },
                    { text: "🧩 Vite + PWA", link: "/Pages/FrontEnd/PWA/Vite_PWA" },
                ],
            },
        ],
    }
}
//侧边栏
export default sidebar = {
    "/Explore/2022": [
        {
            text: "🏹 探索2022",
            collapsible: true,
            items: [
                { text: "🏹 探索2022", link: "/Explore/2022/" },
                { text: "🎒 自己写npm包", link: "/Explore/2022/create_npm" },
                {
                    text: "🤏 H5【拖拽】实现列表排序",
                    link: "/Explore/2022/Drag_Drop",
                },
                {
                    text: "🖼️ canvas 获取图片主体颜色",
                    link: "/Explore/2022/GetMainColor",
                },
                {
                    text: "🖲️ JS 鼠标抓取元素移动",
                    link: "/Explore/2022/FollowMouseMove",
                },
            ],
        },
    ],
    "/BUG": [
        {
            text: "🐞 BUG笔记",
            collapsible: true,
            items: [{ text: "🐞 BUG笔记", link: "/BUG/index" }],
        },
        {
            text: "🐞 BUG-Vue 🟩",
            collapsible: true,
            items: [
                {
                    text: "🟩 Nuxt3 路由跳转 页面空白",
                    link: "/BUG/VueBUG/Bug01-Nuxt3.md",
                },
            ],
        },
    ],
    "/Project": [
        {
            text: "🌽 项目笔记",
            collapsible: true,
            items: [
                { text: "🌽 PROJECT", link: "../Project/index" },
                { text: "🧭 XGNavigation", link: "../Project/XGNavigation" },
                {
                    text: "💣 XGGame-Minesweeper",
                    link: "../Project/XGGame-Minesweeper",
                },
            ],
        },
    ],
    "/Note": [
        {
            text: "⌨️ 〖编程〗",
            collapsible: true,
            items: [
                { text: "🐈‍⬛ Git", link: "/Note/Git" },
                { text: "🐈‍⬛ Git 绑定多个远程库", link: "/Note/Git_remote" },
                { text: "🧶 Yarn", link: "/Note/Yarn" },
                { text: "🎒 npm、nrm、nvm、npx", link: "/Note/npm" },
                { text: "🍔 pnpm", link: "/Note/pnpm" },
            ],
        },
        {
            text: "🧰 〖编程工具〗",
            collapsible: true,
            items: [
                { text: "♾️ VSCode 插件推荐", link: "/Note/VSCode_plug" },
                { text: "♾️ VSCode 添加代码片段", link: "/Note/VSCode" },
                { text: "⭕ ApiFox", link: "/Note/ApiFox" },
                { text: "✌️ Navicat", link: "/Note/Navicat" },
            ],
        },
        {
            text: "📔 〖小笔记〗",
            collapsible: false,
            items: [
                { text: "🔩 ESLint", link: "/Note/ESLint" },
                { text: "⭐ SVG的使用方式", link: "/Note/SVG" },
                { text: "🗝️ SSH - 公钥 私钥", link: "/Note/SSH" },
                { text: "🏴 Shell查询本地ip", link: "/Note/Shell_ip" },
                {
                    text: "🤳 Github pages 自定义域名",
                    link: "/Note/GithubPagesName",
                },
                { text: "🌓 判断系统暗黑模式", link: "/Note/Judge_Dark" },
                { text: "📱 JS判断手机还是PC端 💻", link: "/Note/PCorMoblie" },
                { text: "😀 Iconfont", link: "/Note/Iconfont" },
                { text: "👂 Vue 销毁监听", link: "/Note/Vue_removeEventListener" },
                {
                    text: "📐 JS监听节点 ResizeObserver",
                    link: "/Note/ResizeObserver",
                },
            ],
        },
    ],
    ...FrontEnd(),

    "/BackEnd/": [
        {
            text: "⬜ Node",
            collapsible: true,
            items: [
                { text: "⬜ Node", link: "/BackEnd/Node/Node" },
                { text: "⬜ Node - os模块", link: "/BackEnd/Node/Node_os" },
                { text: "⬜ Node - fs模块", link: "/BackEnd/Node/Node_fs" },
                { text: "⬜ Node - http模块", link: "/BackEnd/Node/Node_http" },
            ],
        },
        {
            text: "⬛ Express 教程",
            collapsible: true,
            items: [
                { text: "⬛ Express 入门", link: "/BackEnd/Express/Express" },
                { text: "🔥 Nodemon 热加载", link: "/BackEnd/Express/Nodemon" },
                { text: "⬛ Route 路由", link: "/BackEnd/Express/Express_Route" },
                {
                    text: "⬛ static 静态资源",
                    link: "/BackEnd/Express/Express_static",
                },
                { text: "⬛ CORS 跨域", link: "/BackEnd/Express/Express_CORS" },
                {
                    text: "⬛ Express + 🐬 MySQL",
                    link: "/BackEnd/Express/Express_MySQL",
                },
                { text: "🃏 JWT 认证机制", link: "/BackEnd/Express/Express_JWT" },
                {
                    text: "🔒 bcryptjs 密码加密",
                    link: "/BackEnd/Express/Express_bcryptjs",
                },
                {
                    text: "🗂️ multer 上传文件",
                    link: "/BackEnd/Express/Express_multer_file",
                },
                {
                    text: "🤩 【前端】上传头像",
                    link: "/BackEnd/Express/Express_multer_avater",
                },
            ],
        },
        {
            text: "⬛ + ⬜ + 🐬",
            collapsible: true,
            items: [
                {
                    text: "⬛ Express 项目案例流程",
                    link: "/BackEnd/Express/Express_Node_MySQL",
                },
            ],
        },
    ],
    "/Database/": [
        {
            text: "📦 SQL",
            collapsible: true,
            items: [
                { text: "📦 SQL", link: "/Database/SQL/SQL" },
                { text: "📦 SQL 基础类型", link: "/Database/SQL/SQL_type" },
                { text: "📦 SQL 基础命令", link: "/Database/SQL/SQL_order" },
                {
                    text: "📦 SQL 增 INSERT INTO",
                    link: "/Database/SQL/SQL_insert_into",
                },
                { text: "📦 SQL 删 DELETE", link: "/Database/SQL/SQL_delete" },
                { text: "📦 SQL 改 UPDATE", link: "/Database/SQL/SQL_update" },
                { text: "📦 SQL 查 SELECT", link: "/Database/SQL/SQL_select" },
            ],
        },
        {
            text: "🐬 MySQL",
            collapsible: true,
            items: [{ text: "🐬 MySQL", link: "/Database/MySQL/MySQL" }],
        },
        {
            text: "🍃 SQLite",
            collapsible: true,
            items: [{ text: "🍃 SQLite 安装", link: "/Database/SQLite/SQLite" }],
        },
        {
            text: "🗄️ indexedDB",
            collapsible: true,
            items: [
                { text: "🗄️ indexedDB", link: "/Database/indexedDB/indexedDB" },
                { text: "🧻 localForage", link: "/Database/indexedDB/localForage" },
            ],
        },
    ],
    "/Deploy/": [
        {
            text: "🐤 博客",
            collapsible: true,
            items: [
                {
                    text: "🌩️ VitePress 标签页图标设置",
                    link: "/Deploy/VitePress_favicon",
                },
            ],
        },
    ],
    "/WebSpider/Python": [
        {
            text: "🐍 Python 学习",
            collapsible: true,
            items: [
                { text: "🐍 Python 介绍", link: "/WebSpider/Python/Python_intro" },
                {
                    text: "🐍 Python 安装",
                    link: "/WebSpider/Python/Python_install",
                },
            ],
        },
        {
            text: "🐍 Python 笔记",
            collapsible: true,
            items: [
                {
                    text: "🐍 Python 零碎笔记",
                    link: "/WebSpider/Python/PythonNote",
                },
                { text: "🐍 数据类型", link: "/WebSpider/Python/PythonNote_Type" },
                { text: "🐍 变量", link: "/WebSpider/Python/PythonNote_var" },
                { text: "🐍 字符串方法", link: "/WebSpider/Python/PythonNote_Str" },
                {
                    text: "🐍 数组 - list",
                    link: "/WebSpider/Python/PythonNote_List",
                },
                {
                    text: "🐍 元组 - tuple ",
                    link: "/WebSpider/Python/PythonNote_tuple",
                },
                {
                    text: "🐍 条件判断",
                    link: "/WebSpider/Python/PythonNote_IfElse",
                },
                {
                    text: "🐍 循环 / 迭代",
                    link: "/WebSpider/Python/PythonNote_for",
                },
                {
                    text: "🐍 dict和set",
                    link: "/WebSpider/Python/PythonNote_DictSet",
                },
                { text: "🐍 函数", link: "/WebSpider/Python/PythonNote_def" },
                {
                    text: "🐍 数据类型转换",
                    link: "/WebSpider/Python/PythonNote_transition",
                },
                {
                    text: "🐍 列表生成式 / 生成器",
                    link: "/WebSpider/Python/PythonNote_range",
                },
                {
                    text: "🐍 异常处理 try",
                    link: "/WebSpider/Python/PythonNote_try",
                },
                {
                    text: "🐍 Python - JSON",
                    link: "/WebSpider/Python/PythonNote_JSON",
                },
                {
                    text: "🐍 with ... as ...",
                    link: "/WebSpider/Python/PythonNote_WithAs",
                },
                { text: "🐽 未完待续...", link: "/WebSpider/Python/continued" },
            ],
        },
        {
            text: "🐍 Python - File",
            collapsible: true,
            items: [
                { text: "🐍 文件操作", link: "/WebSpider/Python/PythonFile" },
            ],
        },
    ],
    "/WebSpider/Spider": [
        {
            text: "🕸️ 爬虫",
            collapsible: true,
            items: [{ text: "🕸️ 爬虫介绍", link: "/WebSpider/Spider/index" }],
        },
        {
            text: "🕸️ 爬虫入门",
            collapsible: true,
            items: [
                {
                    text: "🕸️ 请求数据 requests",
                    link: "/WebSpider/Spider/requests",
                },
                {
                    text: "🕸️ 解析数据 BeautifulSoup",
                    link: "/WebSpider/Spider/BeautifulSoup",
                },
                { text: "🕸️ 获取数据", link: "/WebSpider/Spider/getData" },
            ],
        },
        {
            text: "🕷️ 反反爬虫",
            collapsible: true,
            items: [
                { text: "⏱️ 延时 sleep", link: "/WebSpider/Spider/FF_sleep" },
                {
                    text: "💀 请求头 UserAgent",
                    link: "/WebSpider/Spider/FF_UserAgent",
                },
                { text: "🍪 登录信息 Cookie", link: "/WebSpider/Spider/FF_Cookie" },
                { text: "🔗 防盗链 Referer", link: "/WebSpider/Spider/FF_Referer" },
                {
                    text: "🐎 破解验证码",
                    link: "/WebSpider/Spider/FF_VerificationCode",
                },
                { text: "📠 Ajax动态数据", link: "/WebSpider/Spider/FF_Ajax" },
                { text: "🧱 VPN代理", link: "/WebSpider/Spider/FF_VPN" },
                { text: "🌊 IP池", link: "/WebSpider/Spider/FF_IPPool" },
            ],
        },
        {
            text: "💾 爬虫存储",
            collapsible: true,
            items: [
                { text: "📄 保存到 TXT", link: "/WebSpider/Spider/Save_TXT" },
                { text: "📊 保存到 Execel", link: "/WebSpider/Spider/Save_Execel" },
                { text: "🐬 保存到 MySQL", link: "/WebSpider/Spider/Save_MySQL" },
                { text: "🍃 保存到 SQLite", link: "/WebSpider/Spider/Save_SQLite" },
            ],
        },
    ],
    "/About/": [
        {
            text: "⭐ 关于",
            collapsible: true,
            items: [
                { text: "🧑‍💻‍ 关于我", link: "/About/AboutMe" }, // /config/index
                { text: "🐤 小黄鸭", link: "/About/AboutDuck" }, // /config/three
            ],
        },
        {
            text: "🧑‍💻 程序员故事",
            collapsible: true,
            items: [
                {
                    text: "🐤 小黄鸭调试法",
                    link: "/About/Tale/RubberDuckDebugging",
                },
                { text: "👋 HelloWorld", link: "/About/Tale/HelloWorld" },
                { text: "🤴 master和main", link: "/About/Tale/masterANDmain" },
                { text: "🚲 重复造轮子", link: "/About/Tale/RepeatTheWheel" },
            ],
        },
    ],
};