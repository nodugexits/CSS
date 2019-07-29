document.querySelector('.option').addEventListener('mouseover',function(){
    document.querySelector('.i').classList.add('up');
    document.querySelector('.box-items0').classList.add('show')
    // document.querySelector('.option').classList.add('sty')
})
document.querySelector('.option').addEventListener('mouseout',function(){
    document.querySelector('.i').classList.remove('up')
    document.querySelector('.box-items0').classList.remove('show')
    // document.querySelector('.option').classList.remove('sty')
})