# 🔩 ESLint

> ESLint 是一个用来识别 ECMAScript/JavaScript 并且按照规则给出报告的代码检测工具

它是检查我们代码写得规不规范的一个工具（比如 “=” 号的左右要留有空格）  
这样可以使我们的代码看起来比较美观，比较规范、统一！这是好事！
但！它有时会因为一些不重要的问题就打断命令的执行。
所以通常我会把它关闭！选择 VScode 配置的【格式化 - prettier 插件】。

但还是要了解一下 ESLint 如何配置，来更好的掌控它。

ESLint 两个工具：

1. 模块包【在编译时报错】
1. VSCode 的扩展工具【在写的时候就报错！】

## 安装 - 模块包

```shell
npm i eslint -D
```

在使用 Vue/cli 创建 Vue 项目的时候可以直接选择

## 初始化 生成配置文件 `.eslintrc.js` 👇

```shell
npx eslint --init
```

#### 选项 👇

1. 你想怎样去使用 ESLint?
   1. 选第三个【检查语法/找出问题/强迫你要代码规范！】✅
2. 你当前是使用什么【导入导出的规范】
   1. 第一个是 ES6【import/export】
   1. 第二个是 CommonJS【require/exports】✅
3. 你使用了什么 js 框架
   1. 这里我选择 Vue.js✅
4. 是否使用 TypeScript
5. 规范之后，代码在哪里运行？
   1. 浏览器 ✅
   1. Node
6. 为你当前项目去制定一套规则 👇
   1. 流行的风格（会让你选择人家规定好的风格）✅
   1. 自定义风格
7. 流行的风格 👇
   1. Airbnb
   1. Standard【推荐】✅
   1. Google
   1. XO
8. 以什么形式保存配置文件
   1. JavaScript【推荐】✅
   1. YAML
   1. JSON
9. 是否现在安装？【yes】

## 配置文件

```js
module.exports = {
	//来告诉eslint找当前配置文件不能往父级查找
	root: true,
	//指定eslint解析器的
	parser: 'babel-eslint',

	// 【env】指定代码的运行环境
	env: {
		browser: true, //在浏览器运行的代码【可以使用 windows / document】
		commonjs:true, //使用的是commonjs的导入导出
		es2021:true,
	},

	// 【globals】全局
	globals:[
		"$":true  // 当为true时！ $不声明也可以使用，false时只可以访问
	],

	// 【extends】配置标准的js风格
	extends: 'standard',

	//【parserOptions】指定语言类型和风格
	//sourceType用来指定js导入的方式，默认是script
	parserOptions: {
		ecmaVersion: 12, //这个是说用 js12解析器
		sourceType: 'module'
	},

	// 提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
	plugins: [
		'html'
	],

	//【rules】就是自定义规则，【extends这种是选定人家设置好的规则】
	// rules可以配合上面的【extends】,rules会覆盖【extends】里定义的
	// "off" -> 0 关闭规则
	// "warn" -> 1 开启警告规则
	// "error" -> 2 开启错误规则
	rules: {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}

}
```

## 使用命令进行检查 👇

```shell
npx eslint ./需要检查语法的文件路径
```

一般不这样使用

## VScode 扩展工具 👇

它会帮你启动一个 ESLint 服务器去检查你的代码！
