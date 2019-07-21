- emmet语法基本规则如下:

1. E 代表HTML标签。
2. E#id 代表id属性。
3. E.class 代表class属性。
4. E[attr=foo] 代表某一个特定属性。
5. E{foo} 代表标签包含的内容是foo。
6. E>N 代表N是E的子元素。
7. E+N 代表N是E的同级元素。
8. E^N 代表N是E的上级元素。
9. 如果想Css缩写的语法请参考这里https://docs.emmet.io/css-abbreviations/
10. 一个比较方便的语法：自动计数(numbering)
这个功能挺方便的对于生成重复项时增加一个序号,只需要加上$符号即可.
Copy
ul>li.item${item number:$}*3
<ul>
    <li class="item1">item number:1</li>
    <li class="item2">item number:2</li>
    <li class="item3">item number:3</li>
</ul>
如果生成两位数则使用两个连续的$$,更多位数以此类推...