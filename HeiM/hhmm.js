//获取一组带超链接的图像
var imageA=document.getElementById("image").children;
console.log(imageA);
//----------利用计时器间隔1s,显示1张图像，其余图像隐藏。
var currentNo=0;
function changImg(){
    //排他原理，去掉同类，突出自己。
    for(var i=0; i<imageA.length;i++){
        imageA[i].className="hiddenImg";
        console.log(imageA[i]);
    }
     //再突出自己
    imageA[currentNo].className="displayImg";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}
////////////////////////////////
var timer=window.setInterval(changImg,1000);
//为按钮添加鼠标移入移出暂停事件
function stopChange(){
    window.clearInterval(timer);
}
function starChange(){
     timer=window.setInterval(changImg,1000)
}
//////////////////////////////////////////////
var imagediv=document.getElementById("image");
console.log(imagediv);
imagediv.addEventListener('mouseover',stopChange);
imagediv.addEventListener('mouseout',starChange);