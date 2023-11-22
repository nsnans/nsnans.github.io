- 查看提交的历史 commit
```shell
git log
```
- 到达到指定版本
```shell
git checkout xxxxxxxxx
```
- 重回主分支当前版本
```shell
git checkout master


```

```
因为git默认的设置是忽略文件大小写的，这就会有可能导致不同分支拉取下来的同一文件的文件名大小写却不同，从而导致代码中对应的路径找不到而报错
 git config core.ignorecase 命令来检查当前git配置的是否忽略大小写的配置，默认情况下应该是返回true，表示是忽略大小写的，不区分大小写
  git config core.ignorecase false 修改
```
![image-20230202140803124](\img\image-20230202140803124.png)