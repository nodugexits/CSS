##BFC  概念
Block Formatting Content (块级格式化上下文)

##BFC的创建条件
    比较常见的有overflow: hidden; 、display: inline-block;floa的值不为none  都能成为BFC  容器
    还有其他1.overflow: hidden|auto|。。。|。。。|（除了visible、initial、unset）
            2.表格单元display:table-cell
            3.绝对定位（absolute，fixed）
    
##BFC 的渲染规则
1. BFC在页面上是一个独立的容器，最显著的效果是建立一个隔绝的空间，外面的元素不会影响BFC里面的元素，反之，里面的元素也不会影响外面的元素
2. BFC的区域不会与浮动元素的box重叠
3. 解决垂直方向上的外边距会发生边距重叠（包括父子元素，兄弟元素）

