z1、HTML



## 1.1、概念



HTML , Hyper Text Markup Language ，超文本标记语言。



HTML 解决 网页 上内容的 结构 ( structure )问题。



### 1.1.1、标记语言



HTML 标准由 [W3C](https://www.w3.org/) 负责指定并发布。( 万维网联盟 , World Wide Web Consortium , W3C )

W3C : http://www.w3.org

China W3C : http://www.chinaw3c.org



- GML , Generalized Markup Language 。通用标记语言
- SGML , Standard Generalized Markup Language ，标准通用标记语言
  - HTML 4.01 基于SGML ，需要声明DTD
- XML , eXtensible Markup Language ，可扩展标记语言
- XHTML ， eXtensible Hyper Text Markup Language ， 可扩展的超文本标记语言
- SVG , Scalable Vector Graphics , 可缩放的矢量图形
  - 是由 W3C 开发的基于 XML 的图形技术



### 1.1.2、标记和属性



标记( Mark )，也叫标签 ( Tag )，是标记语言的核心，其使用形式是:

```HTML
<标记名称 属性名称="属性值" >
	内容
</标记名称>
```

其中:

- `<标记名称>` 是开始部分，因此被称作 `开始标记`

- `属性名称="属性值"` 用于指定标记(标签)的属性( attribute ) ，必须书写在开始标记中

  - 如果一个标记由多个属性组成，可以使用 空格隔开，比如 

    ```html
    <h1 color="red" align="center">内容</h1>
    ```

- `</标记名称>` 是结束部分，被称作 `结束标记`

在鬼子那边，通常写作:

```HTML
<tagName attributeName="attributeValue" >
    Content
</tagName>
```



### 1.1.3、标记分类



- 由 开始标记 和 结束标记 成对出现，并且其内部还有可以其它内容的标记

```HTML
<div>
	<h1>hello</h1>
</div>
```



- 如果某个标记既是开始也是结束，则这种标记不可能包含其它内容

```html
<input type="text" >
<br>
```

在 HTML 5 中将这类标记称作 自封闭标记 ( 自封闭标签 或 自关闭标签 )



### 1.1.4、元素



元素，就是HTML中开始标记到结束标记以及其中所有内容组成的对象。



- 成对标签

对于成对出现的标签来说，从开始标签到结束标签以及两者之间所有的内容，称作一个元素( Element ):

```html
<div>
	<p>
		<h3>
			<b>hello<b>
		</h3>
	</p>
</div>
```

处于嵌套层次外部的元素，称作父元素( parent element ) ，

而处于嵌套层次内部的元素，则被称作子元素( child element )。

- 独体标签

对于 自封闭标记来说，它本身就是一个元素，比如:

```HTML
<input type="text" name="username" >
```





## 1.2、常用标记



学习常用标记的网站:

- http://www.w3school.com.cn
- https://www.runoob.com



### 1.2.1、内联元素



所谓内联元素( inline element )，是指那些在 HTML 文档中**默认**并不是独占一行的标记对应的元素。

比如:  `<input>`、`<b>`、`<span>` 等标记。



这一类标记在 HTML 文档中默认不会独占一行，同时它们会根据自己所包含内容来确定它们所占用的空间。



- `<u>` 
  - 定义下划线文本
- `<i>` 
  - 定义斜体字
- `<s>`
  - 定义加删除线的文本 
- `<b>`
  - 定义粗体字
- `<a>`
  - 定义锚点 anchor
  - 定义超链接
- `<q>`
  - 用来定义短的引用 ( 就是为文本添加双引号 )
- `<span>`
  - 标签被用来组合文档中的行内元素( inline element )
- `<font>`
  - 用于定义字体样式
- `<label>`
  - 定义 input 元素的标注 ( 通常与 表单元素 配合使用 )

- `<big>`
- `<em>`
- `<strong>`
- `<tt>`



### 1.2.2、块元素



所谓块元素(  block element )，是指那些在 HTML 文档中**默认**独占一行的标记对应的元素。

比如:  `<div>`、`<p>`、`<h1>` 等标记。



这一类标记在 HTML 文档中**默认独占一行**。

- `<div>`
  - `<div>` 标签可定义文档中的 分区 或 节（ division /section )
  - `<div>` 标签可以把文档分割为独立的、不同的部分
- `<p>`
  - 定义段落
- `<ul>`
  - 定义无序列表( unordered list )
- `<ol>`
  - 定义有序列表 ( ordered list )
- `<li>`
  - 用于定义列表中的项目 ( list item )
- `<hx>`
  - 用于定义标题，其中的 x 可以是 1 ~ 6 ，比如 h1 表示一级标题，h6表示六级标题
- `<header>`
- `<footer>`
- `<pre>`
- `<hr>`









## 1.3、表单标记



- form
  - `action` 用于指定将表单中的内容提交给那个程序 ( 用URL表示 )
  - `method` 用于指定发送表单内容时所使用的请求方式
    - GET 
    - POST
  - `enctype` 用于指定表单中内容的编码方式 ( 采用那种 MIME 类型对表单内容进行处理 )
    - application/x-www-form-urlencoded (默认值)
    - multipart/form-data
    - text/plain
  - `autocomplete` 规定表单是否应该启用自动完成功能
  - `target` 用于指定提交表单后所显示的页面在哪里打开
    - _self 表示当前窗口 ( 默认值 )
    - _blank 表示新的窗口
    - _parent
    - _top
    - *framename*
- input
  - "type=text"  单行文本输入框
    - 使用 name 指定 文本框的名称
    - 使用 placeholder 指定提示信息 ( 当开始输入时，这些提示信息会消失 )
    - 使用 value 指定可以指定在 单行文本框 中显示的初始值
  - "type=password" 
    - 使用 name 指定 密码框的名称
    - 使用 placeholder 指定提示信息 ( 当开始输入时，这些提示信息会消失 )
    - 使用 value 指定可以指定在 密码框 中显示的初始值 ( 以特殊符号形式显示 )
  - "type=radio" 
    - 使用 name 指定单选按钮的名称
      -  描述同一个事物特征的一组 radio 的名称相同，从而形成互斥选择
    - 使用 value 指定单选按钮对应的取值
    - 使用 `checked="checked"` 标识该按钮默认是被选中的，可以简写为 `checked`
  - "type=checkbox" 
    - 使用 name 指定复选按钮的名称 (描述同一个事物特征的一组 checkbox的名称相同)
    - 使用 `checked="checked"` 标识该按钮默认是被选中的，可以简写为 `checked`
  - "type=file" 
  - "type=hidden" 表示隐藏表单域，在页面上不显示，但是可以提交给服务器
    - 使用 name 指定隐藏表单域的名称
    - 使用 value 指定隐藏表单域对应的取值
  - "type=reset" 
    - 使用 value 指定按钮上显示的文本
  - "type=submit" 
    - 使用 value 指定按钮上显示的文本
  - "type=button" 
    - 使用 value 指定按钮上显示的文本
- button 标记用来表示按钮，`<button>`和 `</button>`之间的文本就是按钮上显示的文本
  - "type=reset" 
  - "type=submit" 
  - "type=button" 
- select 表示下拉框，其内部使用 option 表示各个选项
  - 使用 name 指定下拉框的名称
- option 必须使用在 select 内部，表示下拉框的选项
  - 使用 value 指定 option 的取值 ( 也就是向服务器提交的数值 )
  - 在 `<option>` 和 `</option>` 之间的文本，就是在页面上显示的文本
- textarea
  - 使用 name 指定 文本域 的名称
  - 使用 value 指定可以指定在 文本域 中显示的初始值



## 1.4、表格



- table 表示表格
  - `border` 属性用于设置 表格外边框的粗细 和 各个单元格的边框是否显示
  - `bordercolor` 属性用于设置表格边框和各个单元格边框的颜色
  - `width` 属性用于设置表格的宽度，可以使用 像素 或 百分比 的方式设置
  - `align` 属性用于设置表格的水平排列方式，可以是 left 、center 、right
  - `bgcolor`属性用于设置整个表格的背景颜色
  - `background` 属性用于设置整个表格的背景图片
  - `cellspacing` 用于设置 表格内部的单元格之间的间距、以及单元格与表格边框之间的间距
  - `cellpadding` 用于指定表格内部的各个单元格的内边距(单元格内部的内容到单元格边框的距离)
- tr 表示表格中的行 ( table row )
  - `bgcolor`属性用于设置当前行的背景颜色
  - 通常，除了通过 tr 设置 表格行 的 背景颜色 外，不建议设置其它样式
- td 表示行中的列(单元格)  ( table data )
  - `width` 属性用于设置单元格宽度，可以使用 像素 或 百分比 的方式设置
  - `height` 属性用来设置单元格的高度，建议同一行的各个单元格高度相同
  - `bgcolor`属性用于设置当前单元格的背景颜色
  - `background` 属性用于设置当前单元格的背景图片
  - `align` 属性用于设置单元格内部的内容的水平排列方式，可以是  left 、center 、right
  - `valign` 属性用于设置单元格内部内容的垂直排列方式，可以是 top 、middle 、bottom
- th 表示表头 ( table head )，用法与 td 类似





# 2、CSS



## 2.1、概念



CSS , Cascading Style Sheets ，层叠样式表(级联样式表)。



CSS 解决 网页 上内容的 样式 问题。



## 2.2、基本语法

CSS的基本用法是:

```CSS
css-property-name : css-property-value ;
```

其中:

- `css-property-name` 表示 CSS 属性名称，比如 font-size 、color 、background-image 等
- `:` 属性名称和属性值之间使用 冒号 隔开
- `css-property-value` 表示相应的CSS属性值，比如 12px 、blue、url('abc.jpg') 等。
- `;` 表示当前属性设置结束，可以设置其它属性了

比如:

```CSS
font-size : 12px ;
color : blue ;
background-image : url('abc.jpg');
```



## 2.3、使用方式



### 2.3.1、内联样式

内联样式，也称作 行内样式 ，就是在 HTML 标记中直接使用 style 属性来指定样式:

```HTML
<tagName  style="CSS样式" ></tagName >
```

比如:

```HTML
<div style=" border : 1px solid blue ; padding : 15px ; color : red ; ">
	在DIV中的内容
</div>
```

需要特别注意的是 `style` 是 `<div>` 标记的 属性 ( attribute )，而在 `style` 属性取值中包含了多个 CSS 属性( property ) ，它们之间使用 分号 隔开



### 2.3.2、内嵌样式

内嵌样式，也称作内部样式，就是在 HTML 文档中使用 `<style>` 标记嵌入的样式。

嵌入的样式通过 CSS 选择器，选择页面上的元素后，再设置样式。

```HTML
<style type="text/css">
	
</style>
```

其中的 type 用于指定 `<style>` 内部的内容类型 ( MIME 类型 )。

比如:

```html
<html> <!-- HTML根标签 -->
    
    <head>
        <meta charset="UTF-8"> <!-- 元标记 -->
       	<title>标题</title>
        
        <!-- 内嵌样式 -->
        <style type="text/css">
            #first { font-size : 20px ; color : blue ; }
            #second { font-size : 30px ; color : green ; }
        </style>
        
    </head>
    
    <body>
        
        
        <div id="first">
            <p>hello</p>
        </div>
    
        <div id="second">
            <p>你好</p>
        </div>
        
    </body>

</html>
```





### 2.3.3、链接样式

链接样式是指在 HTML 文档中通过 `<link>`标记来链接外部样式文件:

```html
<link rel="stylesheet" href="外部CSS文件路径和名称" >
```

比如与 `hello.html` 在同一个目录下，存在一个名称为 `hello.css` 的文件，则在 `hello.html` 中可以使用:

```html
<link rel="stylesheet" href="hello.css" >
```



> 链接外部样式文件的方式，是目前主要应用方式。



### 2.3.4、导入样式

导入样式是指在 HTML 文档中通过 `<style>`标记来导入( import )外部样式文件:

```html
<style type="text/css">
	@import url( '外部CSS文件的路径和名称');
	.....
	@import url( '外部CSS文件的路径和名称');
</style>
```

比如与 `hello.html` 在同一个目录下，存在一个名称为 `hello.css` 的文件，则在 `hello.html` 中可以使用:

```HTML
<style type="text/css">
	@import url( 'hello.css');
</style>
```





## 2.4、选择器



### 2.4.1、基本选择器



#### 2.4.1.1、tag selector



tag selector 即 标签选择器，也称作 元素选择器 。(  或者 称作 标记选择器 / 标签选择符 / 标记选择符 )。

```html
标记名称 {
    CSS属性名称 :  CSS属性值 ;
}
```

**标记选择器选择页面上匹配于指定标记名称的所有元素。**

比如:

```css
div {
    border : 1px solid blue ;
    margin : 15px ; 
    padding : 15px ;
}
```

将会选择页面上所有 的 div 标记对应的元素:

```HTML
<div>
	<div>hello</div>
</div>
<div></div>
<div></div>
```





#### 2.4.1.2、class selector



class selector 即 class 选择器 或 称作 class 选择符。



> 王八蛋才把 class selector 称作 类选择器。
>
> 王八蛋才把 class selector 称作 类选择器。
>
> 王八蛋才把 class selector 称作 类选择器。



**class选择器<font color='red'>以英文圆点为前缀</font>，并在其后紧跟 className:**

```CSS
.className {
    name : value ;
    ...
}
```

**class选择器选择页面上那些在class属性中<font color="red">包含</font>了指定className的元素**

比如，对于以下样式:

```CSS
.odd { 
    background : #dedede ; 
    height : 100px ; 
}
```

如果在页面上存在以下 HTML 片段:

```HTML
<div class="wrapper">
	<div class="first"></div>
	<div class="second odd"></div>
	<div class="third"></div>
	<div class="fourth odd"></div>
</div>
```

则此时的 first 和 third 不会套用 odd 对应的样式，而 second 和 fourth 会套用 odd 样式。

> 同一个 HTML 标记 的 class 属性中可以包含多个 className ，其中使用 空格隔开即可:
>
> `<div class='second odd active'>`
>
> 其中的 second 、odd 、active 都是 className 。





#### 2.4.1.3、id selector



id selector 即 id 选择器 或 称作 id 选择符。

**id选择器<font color='red'>以英文#为前缀</font>，并在其后紧跟元素的 id :**

```CSS
#elementId { 
    name : value ;
    .....
}
```

**理论上，id选择器应该选择页面上id等于指定值的首个元素。**

但事实上，id选择器会选择页面上id等于指定值的所有元素，所以，应该保证页面上所有对元素的id是惟一的。

比如，在HTML文档中，每个元素的id都是惟一的:

```html
<div class="wrapper">
    <div class="first" id="hello">hello</div>
    <p class="second odd" id="world">world</p>
    <div class="third" id="ecut">ecut</div>
    <div class="fourth odd" id="niubi">牛逼</div>
</div>
```

强烈反对的写法是:

```HTML
<div class="wrapper">
    <div class="first"    id="hello">hello</div>
    <p class="second odd" id="hello">world</p>
    <div class="third"    id="hello">ecut</div>
    <div class="fourth odd" id="hello">牛逼</div>
</div>
```



#### 2.4.1.4、attribute selector

attribute selector 即 属性选择器 或 属性选择符，

是根据 HTML 标记的属性( attribute )来选择页面上的元素。

比如在HTML文档中存在以下内容:

```HTML
<form>
    <label for="username">用户名:</label>
    <input type="text" name="username" id="username" >
    <br>
    <label for="password">密码:</label>
    <input type="password" name="password" id="password" >
    <br>
    <label for="confirm">确认密码:</label>
    <input type="password" name="confirm" id="confirm" >
</form>
```

如果使用 `input`标记选择器选择元素，则会选择 表单中所有的 `input` 元素。

此时如果仅需要选择 `<input type="text">` 的元素，则可以使用:

```CSS
input[type=text] {
    name : value ;
}
```

此时，将选择页面中所有 input 中 type取值为 text 的元素。



属性选择器的用法有以下几种:

- 用于选取带有指定属性的元素

```CSS
[attributeName] {
    
}
```

选择页面上那些含有指定属性的元素，

比如 `[type]` 就会选择页面上所有的包含 `type`属性的元素(不考虑属性值)，比如会选中以下元素:

```HTML
<input type="text" >
<input type="radio" >
<button type="button">按钮</button>
```



- 用于选取带有指定属性和值的元素

```CSS
[attributeName=attributeValue] {
    
}
```

选择页面上那些既包含指定属性、且该属性值等于指定值的元素，

比如 `[type=button]` 将选择页面上所有的包含 type 属性并且type属性值为 button 的那些元素:

```HTML
<input type="button" value="按钮">
<button type="button">按钮</button>
```

如果此时仅需要选择 `input`标记中 `type="text"` 的元素，则可以在属性选择器之前使用标记名称:

```CSS
input[type=text] {
    
}
```



> 注意，在 `input` 和 `[type=text]`  之间不能包含任何其它字符，也不能包含空格。




[attribute~=value]	用于选取属性值中包含指定词汇的元素。
[attribute|=value]	用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[attribute^=value]	匹配属性值以指定值开头的每个元素。
[attribute$=value]	匹配属性值以指定值结尾的每个元素。
[attribute*=value]	匹配属性值中包含指定值的每个元素。





#### 2.4.1.5、wildcard

使用CSS选择器选择元素时，允许使用 `*` 来匹配任意元素。

比如选择页面上所有的的元素，可以使用:

```
* {
    font-size : 20px ; 
}
```







### 2.4.2、派生选择器



#### 2.4.2.1、后代选择器



后代选择器 ( descendant selector )，也称作子孙选择器 ( 或者 层次选择器 、包含选择器 ) ，其使用方法为:

```CSS
祖先选择器  子孙选择器 {
    
}
```

使用以上选择器，可以选择 `祖先选择器` 选择的元素内部的所有匹配于 `子孙选择器` 的那些元素。

> 需要注意的是 ，祖先选择器 与 子孙选择器 之间使用 空格 隔开。

比如，对于HTML文档中的元素:

```html
<div class="outer">
    <div class="box">
        <div class="first"> </div>
        <div class="second"> </div>
    </div>
    <div class="box">
        <div class="third"> </div>
        <div class="fourth"> </div>
    </div>
</div>
```

则使用 `.outer div` 可以选择 `.outer`元素内部的所有的 div 元素，

包括但不仅限于 `.box` 、 `.first` 、`.second`、`third`、`.fourth` 元素，

其中 `.outer div ` 中的 `.outer`部分属于选择 祖先 的选择器 ，而 `div` 部分则用于选择 子孙后代。





#### 2.4.2.2、亲子选择器



亲子选择器，也称作直接子元素选择器，其使用方法为:

```css
父元素选择器>子元素选择器 {
    
}
```

使用以上选择器，可以选择 `父元素选择器` 所命中的元素的所有直接子元素中匹配于 `子元素选择器`的元素。

> 注意，父元素选择器 与 子元素选择器 之间使用 <b style="color:red;font-weight:bold;">></b> 隔开，在 <b style="color:red;font-weight:bold;">></b> 前后不要留多余的空白。

比如，对于HTML文档中的元素:

```html
<div class="outer">
    <header class="header">
        <div class="first"> </div>
        <div class="second"> </div>
    </header>
    <div class="box">
        <div class="third"> </div>
        <div class="fourth"> </div>
    </div>
    <footer class="footer">
        <div class="fifth"> </div>
        <div class="sixth"> </div>
    </footer>
</div>

<div class="box"></div>
```

则使用  `.outer>div` 可以选择 `.outer`内部的直接子元素 `.box` 元素，

而最后的 `<div class="box"></div>` 则不会被命中，因为它不是 `.outer` 的直接子元素。

也不会选中 `.first` 、`.second`、`third`、`.fourth` 、`.fifth` 、`sixth`元素，因为它们是 `.outer` 的孙子。





#### 2.4.2.3、并联选择器



并联选择器，也称作 并列选择器、分组选择器 或 组合选择器，其用法为:

```css
selectorA , selectorB , selectorC [ , .... ] {
}
```

其中:

- `selectorA` 、 `selectorB` 、 `selectorC` 表示不同的选择器，中间使用 逗号 隔开
- 如果有更多个选择器需要并列出来，中间依然使用 逗号 隔开

比如:

```css
div  { border : 1px solid blue ; }
p   { border : 1px solid blue ; }
span  { border : 1px solid blue ; }
```

可以使用并联选择器简写为:

```css
div , p , span {
    border : 1px solid blue ;
}
```





#### 2.4.2.4、兄弟选择器



- 相邻兄弟选择器 ( adjacent sibling selector )

```css
current-selector+after-selector {
}
```

其中:

1. `current-selector` 表示选择当前元素的选择器
2. `after-selector` 表示选择与 `current-selector`具有相同父元素的元素 (兄弟元素)
3. `+` 表示 `after-selector` 是紧随`current-selector`之后的兄弟元素

比如对于以下HTML片段来说:

```html
<ol class="items">
    <li id="first">宋远桥</li>
    <li id="second">俞莲舟</li>
    <li id="third">俞岱岩</li>
    <li id="fourth">张松溪</li>
    <li id="fifth">张翠山</li>
    <li id="sixth">殷梨亭</li>
    <li id="seventh">莫声谷</li>
</ol>
```

使用 `#third`选择 `<li id="third">俞岱岩</li>`，

而通过 `#third+li`或`#third+*`可以选择 `<li id="fourth">张松溪</li>` 。



- 所有兄弟选择器 ( sibling selector )

```css
current-selector~after-selector {
}
```

其中:

1. `current-selector` 表示选择当前元素的选择器
2. `after-selector` 表示选择与 `current-selector`具有相同父元素的元素 (兄弟元素)
3. `~` 表示`current-selector`之后的所有匹配于 `after-selector` 的兄弟元素

比如，对于以下HTML文档来说:

```html
<div class="blocks">
    <p id="one">宋远桥</p>
    <div id="two">俞莲舟</div>
    <p id="three">俞岱岩</p>
    <div id="four">张松溪</div>
    <p id="five">张翠山</p>
    <p id="six">殷梨亭</p>
    <div id="seven">莫声谷</div>
</div>
```

使用  `#three~div` 可以选择`.blocks`内部处于 `#three`之后的所有 `div`元素:

```css
#three~div { background: #FFFF00 ; }
```

使用   `#three~p` 可以选择`.blocks`内部处于 `#three`之后的所有 `p`元素:

```css
#three~p { background: #b0d0ff; }
```





#### 2.4.2.5、伪类选择器

伪类选择器 ( pseudo-classes selector )，用于向某些选择器选择的元素添加特殊效果，其用法为:

```css
selector:pseudo-class {
	property : value ;
}
```

其中:

- 冒号之前的  `selector` 用于选中元素
- 冒号之后的 `pseudo-class` 用于确定  `selector` 所命中的元素的某种 **状态** ( status )
- **需要特别注意的是 冒号 前后不要有任何空白**

常用的 pseudo-class 有:

- `:link` 表示 <b style="color:blue;">未访问的</b>超链接
- `:visited` 表示 <b style="color:blue;">已经被访问过的</b> 超链接
- `:hover` 表示 <b style="color:blue;">鼠标悬浮到元素上时对应的状态</b>，对于超链接来说，就是鼠标悬浮到超链接时对应的状态
- `:active` 表示  <b style="color:blue;">激活状态</b> 的超链接
  - 所谓激活状态就是鼠标悬浮到超链接并按下鼠标左键但未释放左键时的状态
- `:focus` 表示  <b style="color:blue;">获得键盘输入焦点</b> 的输入框或文本域
- `:first-child` 表示匹配于 `selector` 选择器的那些元素中的第一个元素
  - 比如 `div:first-child` 会选择所有的 div 中具有相同父元素的第一个 div 元素
- `:last-child` 表示匹配于 `selector` 选择器的那些元素中的最后一个元素
  - 比如 `div:last-child` 会选择所有的 div 中具有相同父元素的最后一个 div 元素
- `:lang` 伪类允许您为不同的语言定义特殊的规则 ( 与属性选择器中 `attribute|=value` 作用相同 )



#### 2.4.2.6、伪元素选择器

伪元素选择器 ( pseudo-element selector )，用于向某些选择器选择的元素添加特殊效果，其用法为:

```css
selector:pseudo-element {
	property:value;
}
```

其中:

- 冒号之前的  `selector` 用于选中元素
- 冒号之后的 `pseudo-element` 用于确定  `selector` 所命中的元素内部满足某些条件的文本
  - 这些满足某些条件的文本被当作元素来使用，因此就属于假的元素，即伪元素
- **需要特别注意的是 冒号 前后不要有任何空白**

常用的 pseudo-element 有:

- `:first-letter` 表示文本中的第一个字符 ( 将这个字符当作一个假元素来使用 )
  - 下面的属性可应用于 "first-letter" 伪元素：
    - font
    - color
    - background
    - margin
    - padding
    - border
    - text-decoration
    - vertical-align (仅当 float 为 none 时)
    - text-transform
    - line-height
    - float
    - clear
- `:first-line` 表示文本中的第一行字符 ( 将这行文本当作一个假元素来使用 )
  - 下面的属性可应用于 "first-line" 伪元素：
    - font
    - color
    - background
    - word-spacing
    - letter-spacing
    - text-decoration
    - vertical-align
    - text-transform
    - line-height
    - clear
- `:before` 用于在  `selector` 匹配的元素内部前方添加内容
- `:after` 用于在  `selector` 匹配的元素内部后方追加内容



> 怎么区分 pseudo-class selector 和 pseudo-element selector ?



## 2.5、常用的CSS属性



### 2.5.1、width

控制元素的宽度。

```css
width : Npx | N% ;
```





### 2.5.2、height

控制元素的高度。

```css
height : Npx | N% ;
```





### 2.5.3、color

控制元素前景色(就是文本颜色)。

```css
color : value ;
```

其中 value 可以是表示颜色的代码、表示颜色的单词。



### 2.5.4、background



使用 background 可以设置元素的背景颜色、背景图片的。



#### 2.5.4.1、background-color



控制元素背景颜色，可以使用表示颜色的单词，比如 gray ，也可以使用颜色代码，比如 #dedede 



#### 2.5.4.2、background-image



控制元素的背景图片。

```css
background-image : url( 图片路径 ) ;
```



#### 2.5.4.3、background-position



控制背景图片的位置。

- 可以使用表示位置的单词控制背景图片的位置

```css
background-position : top center ;
```

可以表示左右位置的单词: left 、center 、right

可以表示上下位置的单词: top 、center 、bottom



- 也可以使用像素控制背景图片的位置

```css
background-position : 左右偏移   上下偏移 ;
```





#### 2.5.4.4、background-attachment



控制背景图片的滚动方式。

- scroll 表示背景图片随元素内容滚动而滚动
- fixed 表示背景图片固定在浏览器窗口中，**不**随元素内容滚动而滚动



#### 2.5.4.5、background-repeat



- repeat 上下左右都重复
- repeat-x 左右重复
- repeat-y 上下重复
- no-repeat 不重复



#### 2.5.4.6、background-size



CSS 3 中增加的属性，用于控制背景图片的尺寸。

- 覆盖

```css
background-size : cover ;
```

背景图片等比例拉伸，以便于覆盖整个元素。(背景图片可能会有部分不显示)

- 包含

```css
background-size : contain ;
```

背景图片等比例拉伸，但是背景图片恰好能够完全显示在元素内部 ( 元素中可能有一部分区域没有被覆盖 )。

- 使用像素值确定背景图片的尺寸

```css
background-size : 宽度 高度 ;
```



#### 2.5.4.7、background

用于批量设置背景的各个属性值:

```css
background :  bgcolor  bgimage  bgposition  bgrepeat  attachment ;
```

比如:

```css
background : #eeeeee  url("yangmou.jpg")  no-repeat  center  fixed ;
```





### 2.5.5、border



#### 2.5.5.1、border

通过 border 属性可以一次设置元素四边的边框粗细、样式、颜色:

```css
border : 粗细 样式  颜色 ;
```



#### 2.5.5.2、边框粗细 

通过 border-width 属性可以一次设置元素四边的边框粗细:

```css
border-width : Npx | N% ;
```

或按照顺时针依次设置各边粗细:

```css
border-width : 上  右  下  左 ;
```





#### 2.5.5.3、边框样式

通过 border-style 属性可以一次设置元素四边的边框样式:

```css
border-style : none | hidden | solid | dotted | double | dashed ;
```

比如:

```css
border-style : solid ;
```

或按照顺时针依次设置各边样式:

```css
border-style : 上  右  下  左 ;
```

比如:

```css
border-style : dotted solid double dashed ; 
```

此时:

- 上边框是点状 ( dotted )
- 右边框是实线 ( solid )
- 下边框是双线 ( double )
- 左边框是虚线 ( dashed )



#### 2.5.5.4、边框颜色

通过 border-style 属性可以一次设置元素四边的边框颜色:

```css
border-color : color-value ;
```

或按照顺时针依次设置各边颜色:

```
border-color : 上  右  下  左 ;
```





#### 2.5.5.5、上边框



- border-top :  width  style  color ;
- border-top-width : width ;
- border-top-style : style ;
- border-top-color : color ;





#### 2.5.5.6、下边框



- border-bottom :  width  style  color ;
- border-bottom-width : width ;
- border-bottom-style : style ;
- border-bottom-color : color ;



#### 2.5.5.7、左边框

- border-left :  width  style  color ;
- border-left-width : width ;
- border-left-style : style ;
- border-left-color : color ;



#### 2.5.5.8、右边框



- border-right :  width  style  color ;
- border-right-width : width ;
- border-right-style : style ;
- border-right-color : color ;



#### 2.5.5.9、边框半径

border-radius 属性用于控制边框拐角处的半径。

```css
border-radius : length | % ;
```

- length  定义圆角的形状
- % 以百分比定义圆角的形状



1. border-top-left-radius 控制边框的左上角形状
2. border-top-right-radius 控制边框的右上角形状
3. border-bottom-left-radius 控制边框的左下角形状
4. border-bottom-right-radius 控制边框的右下角形状











### 2.5.6、margin



#### 2.5.6.1、设置四周外边距



- 分别设置四周外边距

```css
margin : 上 右 下 左 ; 
```

- 分 上下 和 左右 设置外边距

```css
margin :   上下    左右 ;
```

- 四边外边距相同

```css
margin : 值 ;
```



#### 2.5.6.2、设置单侧外边距



- margin-top



- margin-bottom



- margin-left



- margin-right





### 2.5.7、padding



#### 2.5.7.1、设置四周内边距



- 分别设置四周内边距

```css
padding : 上 右 下 左 ; 
```



- 分 上下 和 左右 设置内边距

```css
padding : 上下  左右 ;
```



- 四边内边距相同

```css
padding : 值 ; 
```





#### 2.5.7.2、设置单侧内边距



- padding-top



- padding-bottom



- padding-left



- padding-right





### 2.5.8、阴影

box-shadow 用于设置元素的阴影。



- 外部阴影

```css
box-shadow : 左右偏移量   上下偏移量   模糊距离   阴影距离   阴影颜色 ;
```

比如:

```css
box-shadow :  0   0   6px   5px  #dedede ;
```





- 内部阴影

```css
box-shadow : 左右偏移量   上下偏移量   模糊距离   阴影举例  阴影颜色 inset ;
```



### 2.5.9、 overflow

用于指定当元素内部的内容超出元素边界后的处理方式。

- `overflow : visible ; ` 当元素内容超出元素边界时，直接在边界之外显示超出的内容 【默认值】
- `overflow : hidden ;` 如果元素内部的内容超出元素的边界，则隐藏超出部分 
- `overflow : scroll ; ` 不论元素内部的内容是否超出元素的边界，都则显示滚动条 
- `overflow : auto ; ` 根据元素内容是否超出边界来确定是否显示滚动条



### 2.5.10、content

content 属性用于配合 `:before` 、`:after` 伪元素选择器生成内容:

```css
selector:before {
    content : "生成的内容" ;
}
```

其中 `selector` 用于选择相应的元素，通过 `:before`选择 `selector`元素内部的最前方并插入 content 对应的内容。



### 2.5.11、text-decoration

text-decoration 属性用于装饰文本:

```css
text-decoration : none | overline | line-through | underline ;
```

其中:

- none 表示没有任何装饰
- overline 表示 **上划线**
- line-through 表示 **中划线** ( 删除线 )
  - 默认 `<s>` 标记中的文本具有 中划线 装饰效果
- underline 表示 **下划线**
  - 默认 `<u>` 标记中的文本具有 下划线 装饰效果



### 2.5.12、字体设置



- font-style 控制字体风格 , normal 表示正常显示 , italic 或 oblique 表示斜体
  - 默认 `<i>` 标记中的文本是斜体

- font-size 
- font-weight 用于控制字体粗细，normal 表示正常显示 
  - 默认 `<b>` 标记中的文本是粗体
  - 默认 `<em>` 标记中的文本是粗体
  - 默认 `<strong>` 标记中的文本是粗体
- ....



### 2.5.13、display

控制元素应该生成的框的类型:

```css
display : none | block | inline | inline-block | ... ;
```

其中:

- none 表示元素在页面上不显示 ( 并释放相应的空间 )
- block 表示以块元素形式显示
- inline 表示以内联元素形式显示
- inline-block 表示以内联块形式显示





### 2.5.14、visibility

visibility 属性用于指定一个元素是否是可见的。

```css
visibility : visible | hidden | collapse ;
```

其中:

- visible 是默认值，表示元素是可见的
- hidden 表示元素是不可见的
- collapse  当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。
  - 被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"

>  当为元素指定  `visibility : hidden;` 后即使元素不可见的也会占据页面上的空间 。
>
> ( 使用 `display:none`可以创建不占据页面空间的不可见元素 )





### 2.5.15、transform

transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

```css
transform: none | transform-functions ;
```

其中:

- none 是默认值，表示元素没有任何 2D 或 3D 转换效果
- transform-functions 表示  2D 或 3D 转换函数
  - translate(  xoffset , yoffset ) 控制元素在 左右方向 和 上下方向 的 移动 
  - translateX( xoffset )
  - translateY( yoffset )
  - translateZ( zoffset )
  - translate3d( x , y , z )
  - scale( xzoom , yzoom ) 控制元素缩放
  - scaleX(  xzoom ) 
  - scaleY(  yzoom ) 
  - scaleZ(  zzoom ) 
  - scale3d( xzoom , yzoom , zzoom ) 
  - rotate( angle )  控制元素的旋转 ( 沿圆周方向旋转 )
  - skew( xAngle , yAngle )



### 2.5.16、transition



transition 属性是一个简写属性，用于设置四个过渡属性：

- transition-property 规定设置过渡效果的 CSS 属性的名称
- transition-duration 规定完成过渡效果需要多少秒或毫秒
  - 使用**秒**为单位时，以 `s` 为后缀，允许使用 小数，比如 0.4s 可以表示 400ms 。
  - 使用**毫秒**为单位时，以 `ms` 为后缀
- transition-timing-function 规定速度效果的速度曲线
  - linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
  - ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
  - ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
  - ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
  - ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
  - cubic-bezier( n , n , n , n )  在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
- transition-delay 定义过渡效果何时开始
  - 规定在过渡效果开始之前需要等待的时间，以秒或毫秒计

其使用语法为:

```css
transition : css-property duration timing-function delay ;
```

其中各项的默认值分别为:  ` all   0   ease   0` 。







## 2.6、列表



### 2.6.1、list-style-position

用于确定列表中列表项目标记的位置：

```css
list-style-position : inside | outside ;
```

其中:

- inside 表示列表项目标记放置在文本以内，且环绕文本根据标记对齐。
- outside 是默认值，保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。





### 2.6.2、list-style-type

list-style-type属性用于设置列表项标记的类型:

```css
list-style-type : none | circle | disc ;
```

其取值可以为:

- none	无标记。
  disc	默认。标记是实心圆。
  circle	标记是空心圆。
  square	标记是实心方块。
  decimal	标记是数字。
  decimal-leading-zero	0开头的数字标记。(01, 02, 03, 等。)
  lower-roman	小写罗马数字(i, ii, iii, iv, v, 等。)
  upper-roman	大写罗马数字(I, II, III, IV, V, 等。)
  lower-alpha	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
  upper-alpha	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
  lower-greek	小写希腊字母(alpha, beta, gamma, 等。)
  lower-latin	小写拉丁字母(a, b, c, d, e, 等。)
  upper-latin	大写拉丁字母(A, B, C, D, E, 等。)
  hebrew	传统的希伯来编号方式
  armenian	传统的亚美尼亚编号方式
  georgian	传统的乔治亚编号方式(an, ban, gan, 等。)
  cjk-ideographic	简单的表意数字
  hiragana	标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
  katakana	标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
  hiragana-iroha	标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
  katakana-iroha	标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）



### 2.6.3、list-style-image

list-style-image 属性使用图像来替换列表项的标记:

```css
list-style-image : none | url( "图片" );
```



### 2.6.4、list-style

使用 list-style 属性可以一次设置 list-style-type、list-style-position 、list-style-image :

```css
list-style : type  position  image  ;
```

其中:

- type 对应 list-style-type ，默认值是 disc
- position 对应 list-style-position ，默认值是 outside
- image 对应 list-style-image ，默认值是 none



### 2.6.5、列表的边距问题



- 默认情况下 ul 、ol 上下是有外边距的

  - 如果不需这个外边距，可以通过 设置 ul  或 ol 的 上下外边距来实现

- 在 ul 内部的左侧，ul  和 li 之间有一部分空白，在现代浏览器中，它属于 ul 的内边距

  - 因此如果需要取消该部分空白，可以设置 ul 的 左侧内边距 ( padding-left )

  - 为了兼容所有浏览器，建议除了为ul指定左侧内边距外，再为li指定左侧外边距

    ```css
    ul { pading-left : 0px ; }
    ul>li { margin-left : 0px ; }
    ```

- 在 ol 内部的左侧，ol 和 li 之间有一部分空白，它的处理方式与 ul 相同





## 2.7、表格



### 2.7.1、border-spacing

border-spacing 属性用于控制相邻单元格之间的间距以及处于四周的单于格与表格边框之间的间距。

```css
border-spacing : value ;
```



### 2.7.2、caption-side

caption-side 属性用于控制表格标题的显示位置:

```css
caption-side : top | bottom ; 
```





### 2.7.3、empty-cells

empty-cells 用于控制是否显示表格中空单元格的边框和背景:

```css
empty-cells : hide | show ; 
```

其中:

- hide 表示隐藏
- show 表示显示，属于默认值



### 2.7.4、border-collapse

border-collapse 属性用于控制是否合并表格边框:

```css
border-collapse : collapse | separate ;
```

其中:

- separate 是默认值，边框会被分开，同时不会忽略 border-spacing 和 empty-cells 属性的值
- collapse 表示尽可能将边框合并为一个单一的边框，此时会忽略 border-spacing 和 empty-cells 属性的值





### 2.7.5、text-align

使用 text-align 属性可以控制任意元素内部内容的水平排列方式:

```css
text-align : left | center | bottom ; 
```

对于 表格中的 单元格 ( td 或 th ) 来说，也可以通过 `text-align`来设置单元格中内容的水平排列方式。



### 2.7.6、vertical-align

使用 vertical-align 属性可以控制表格单元格的垂直排列方式(也称作竖直排列方式):

```css
vertical-align: top | middle | bottom | baseline ;
```

其中，主要使用三个值:

- top 表示顶边
- middle 表示中间 ( 这是默认值 )
- bottom 表示底边



# 3、Layout



Layout 即布局，这里主要是指确定页面布局。

所谓页面布局，就是合理规划元素的存放位置。



>  默认情况下，所有元素按照其默认的样式，从左向右，从上向下排列，这种排列方式就是**默认文档流**。



## 3.1、浮动



### 3.1.1、float

使用 float 可以实现元素的浮动:

```css
float : none | left | right ;
```

其中:

- `float : left ;` 向左浮动
- `float : right ;` 向右浮动
- `float : none ;` 默认值。元素不浮动



### 3.1.2、文字环绕

CSS 中的 float 属性本来是用来实现图片的文字环绕效果:

```html
<div>
  <img src="twg.jpg" style="float : left ; ">
  豫章故郡，洪都新府。星分翼轸，地接衡庐。
  襟三江而带五湖，控蛮荆而引瓯越。
  物华天宝，龙光射牛斗之墟；
  人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。
  台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；
  宇文新州之懿范，襜帷暂驻。
  十旬休假，胜友如云；千里逢迎，高朋满座。
  腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。
  家君作宰，路出名区；童子何知，躬逢胜饯。
  时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。
  俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。
  层峦耸翠，上出重霄；飞阁流丹，下临无地。
  鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。
</div>
```



### 3.1.3、"浮动"定位

CSS中的 float 属性本来是实现 图片的文字环绕效果的，

所以采用 float 实现所谓的 "浮动" 定位是一种**不务正业**的定位方式。

比如，将一个 div 对应的一整行，划分成左右两部分，左右各站 50% :

```html
<div class="row">
	<div class="left">左边的</div>
	<div class="right">右边的</div>
</div>
```

可以采用以下样式:

```css
.row { 
    border : 1px solid blue ; 
    overflow : hidden ; 
}
.row .left { 
    float : left ; 
    width : 50% ; 
    background : #dedede ; 
}
.row .right { 
    float : left ; 
    width : 50% ; 
    background : #ffff00 ; 
}
```



> 浮动后的元素，会脱离原来默认的文档流，从而影响页面布局。





### 3.1.4、栅格系统



```css
.x-row {
    display: block; /* 以块元素形式显示 .x-row 匹配的元素 */
    overflow: hidden ; /* 解决所有子元素都浮动后导致的父元素塌陷问题 */
}

.x-cell-1 ,
.x-cell-2 ,
.x-cell-3 ,
.x-cell-4 ,
.x-cell-5 ,
.x-cell-6 ,
.x-cell-7 ,
.x-cell-8 ,
.x-cell-9 ,
.x-cell-10 ,
.x-cell-11 { float: left ; min-height: 1px ; }

.x-cell-1 { width : 8.333333333%  ; }
.x-cell-2 { width : 16.666666667%  ; }
.x-cell-3 { width : 25%  ; }
.x-cell-4 { width : 33.333333333%  ; }
.x-cell-5 { width : 41.666666667%  ; }
.x-cell-6 { width : 50%  ; }
.x-cell-7 { width : 58.333333333%  ; }
.x-cell-8 { width : 66.666666667%  ; }
.x-cell-9 { width : 75%  ; }
.x-cell-10 { width : 83.333333333%  ; }
.x-cell-11 { width : 91.666666667%  ; }


.x-cell-5-1 ,
.x-cell-5-2 ,
.x-cell-5-3 ,
.x-cell-5-4 { float: left ; min-height: 1px ; }

.x-cell-5-1 { width: 20% ; }
.x-cell-5-2 { width: 40% ; }
.x-cell-5-3 { width: 60% ; }
.x-cell-5-4 { width: 80% ; }
```







### 3.1.5、clear

clear 用于清除浮动。

- `clear : left ;` 清除当前元素左侧的浮动
- `clear : right ;` 清除当前元素右侧的浮动
- `clear : both ;` 清除左右两侧的浮动
- `clear : none ;` 默认值，表示不清除浮动。





## 3.2、定位



在 CSS 中通过 position 属性来规定元素的定位类型，其中定位类型，可以是:

- static 
  - 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）
- absolute
  - 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
- relative
  - 生成相对定位的元素，相对于其正常位置进行定位
- fixed
  - 生成固定定位的元素，相对于浏览器窗口进行定位
- sticky
  - 粘性定位，该定位基于用户滚动的位置。



### 3.2.1、static



static 是 position 定位中的一种类型，它是默认值。( 国内英文不好的人将其翻译为静态定位 ) 。



如果一个元素采用  `position : static ;` 方式进行定位 或 从未显式指定 `position` 属性值，

则一律采用 static 方式进行定位，此时元素按照 **默认文档流** 中的顺序进行排列:

- 从左向右依次排列

- 从上向下逐行排列

此时，即使设置了 `left`、`bottom`、`top`、`right` 、`z-index` 等属性的值，浏览器也会忽略这些设置:

```css
.first {
    position : static ;
    left : 200px ;
    top : 200px ;
    z-index : 1000 ;
}
```



### 3.2.2、relative

元素采用 relative方式定位时，称作 **相对定位**。

所有的相对定位都是**相对于当前元素本身原来的位置**(在默认文档流中的位置)进行定位。

使用方法:

```css
position : relative ;
left | right  : xOffset ;
top  | bottom : yOffset ;
```

如果仅仅指定了  `position : relative ;` 却没有指定 `left`、`right`、`top`、`bottom` 的值，

则元素的位置不发生变化 ，这样=做的目的是为了让子元素参照自己进行定位 ( absolute 定位 )



### 3.2.3、absolute

元素采用 absolute 方式定位时，称作**绝对定位**，此时:

- 元素相对于第一个非 static 定位的父元素进行定位
- 如果某个元素的所有父元素都是 static 定位，则相对于 浏览器窗口进行定位

使用方法:

```css
position : absolute ;
left | right  : xOffset ;
top  | bottom : yOffset ;
```







### 3.2.4、fixed

采用 fixed 定位的元素，参照浏览器窗口进行定位，并且位置是固定不变的。

使用方法:

```css
position : fixed ;
left | right  : xOffset ;
top  | bottom : yOffset ;
```

与 absolute 中参照浏览器定位的方式不同的是:

- 采用 fixed 定位时，元素**不会**随页面上其它内容的滚动而滚动
- 采用 absolute 方式并参照浏览器窗口定位时，元素**会**随页面上其它内容的滚动而滚动



### 3.2.5、sticky

sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。

`position: sticky;` 基于用户的滚动位置来定位。

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。

它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

**注意:** Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix。