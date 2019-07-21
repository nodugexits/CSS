const login = document.querySelectorAll('.login-in-on');
// 获取页面
const tabs = document.querySelectorAll('.li-table');
// 获取li标签
const taba = document.querySelectorAll('.not-recrived');
// console.log(login);
for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',function(){
        showtab.call(this);
        // this由window变为tabs的内容
    })
}
function showtab(){
    console.log(this);
    for(var j = 0;j<login.length;j++){
        if(tabs[j]=== this){
            login[j].classList.add('show');
            tabs[j].classList.add('tab');         
        }else{
            login[j].classList.remove('show');
            tabs[j].classList.remove('tab');
        }
    }
}

for(var k = 0;k < taba.length;k++){
    taba[k].addEventListener('click',function(){
        ashow.call(this);
    })
}

function ashow(){
    for(var m = 0;m<login.length;m++)
    console.log(this);
    if(taba[m] === this){
        login[m].classList.remove('show'); 
    }else{
        login[m].classList.add('show');
    }
}
// 第一种方法
// function showtab(){
//     console.log(this);
//     document.querySelector('.tab').classList.remove('tab');
//     this.classList.add('tab');
//     let index = this.getAttribute('data-index');
//     // alert(index);
//     document.querySelector('.show').classList.remove('show');
//     login[index].classList.add('show');
// }