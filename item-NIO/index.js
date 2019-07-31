const lineList = document.querySelectorAll('.list');  //获取 导航栏下拉框li标签  是一个数组
const spanLine = document.querySelectorAll('.sp');  //获取 导航栏下拉框li标签下span标签  是一个数组
const jsOption = document.querySelectorAll('.option');//获取导航栏li标签
const jsI = document.querySelectorAll('.i');  //获取  箭头小标
const jsDropdown = document.querySelectorAll('.dropdown-box');  //获取下拉框
//用数组循环来把触发了导航栏li标签，把下标传给li标签下箭头小标和下拉框还有underline
for(let i = 0;i < jsOption.length;i++){
// 触发事件
jsOption[i].addEventListener('mouseover',() =>{
    jsI[i].classList.add('up');
    jsDropdown[i].classList.add('show')
    jsOption[i].classList.add('underline')    
})
//触发离开事件
jsOption[i].addEventListener('mouseout',() =>{
    jsI[i].classList.remove('up')
    jsDropdown[i].classList.remove('show')
    jsOption[i].classList.remove('underline')
})
}
//用数组循环来把触发了导航栏下拉框li标签，把下标传给li标签下span数组
for(let j = 0;j <= lineList.length;j++ ){
lineList[j].addEventListener('mouseover',() =>{       
    spanLine[j].classList.add('spanline')  
})
lineList[j].addEventListener('mouseout',() =>{   
    spanLine[j].classList.remove('spanline')
})
}