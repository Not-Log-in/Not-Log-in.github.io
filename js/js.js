var xxTitle = document.getElementsByClassName("xxTitle")[0];
/*控制前台颜色 引入 vue date 进行循环的数据*/
let colorList = [
        [{
            color: '#2B4653'
        }, {
            color: '#439D8F'
        }, {
            color: '#E5C467'
        }, {
            color: '#EDA260'
        }, {
            color: '#DE7051'
        }], /*下一个*/
        [{
            color: '#cb997e'
        }, {
            color: '#ddbea9'
        }, {
            color: '#ffe8d6'
        }, {
            color: '#b7b7a4'
        }, {
            color: '#a5a58d'
        }, {
            color: '#6b705c'
        }], /*下一个*/
        [{
            color: '#87b38d'
        }, {
            color: '#87b38d'
        }], /*下一个*/
        [{
            color: '#003049'
        }, {
            color: '#d62828'
        }, {
            color: '#f77f00'
        }, {
            color: '#fcbf49'
        }, {
            color: '#eae2b7'
        }], /*下一个*/
        [{
            color: '#03045e'
        }, {
            color: '#023e8a'
        }, {
            color: '#0077b6'
        }, {
            color: '#0096c7'
        }, {
            color: '#00b4d8'
        }, {
            color: '#48cae4'
        }, {
            color: '#90e0ef'
        }, {
            color: '#ade8f4'
        }, {
            color: '#caf0f8'
        }], /*下一个*/
        [{
            color: '#cdb4db'
        }, {
            color: '#ffc8dd'
        }, {
            color: '#ffafcc'
        }, {
            color: '#bde0fe'
        }, {
            color: '#a2d2ff'
        }],
    ]
    /*控制前台颜色*/
function AnimationD(Element, time, GoTime, animationName) { //动画延迟function
    //参数一 元素, 参数二时间,参数三 跨距,参数四 动画名称
    var Element = Element;
    var time = time;
    for (var i = 0; i < Element.length; i++) {
        time += GoTime;
        Element[i].style.animation = animationName + " " + time + "s ease-out";
    }
}
AnimationD(document.querySelectorAll(".xxTitle > div"), 0.3, 0.1, "xxTitleDivAnimation");

function myvideoByeFun() {
    for (var j = 0; j < myVideo.length; j++) {
        myVideo[j].pause();
        myVideo[j].style.transform = "scale(1)";
        myVideo[j].style.margin = "0px";
        myVideo[j].style.boxShadow = "0px 0px 0px rgba(0,0,0,0.2)";
        myVideo[j].style.zIndex = "10";
    }
}
window.onresize = function() {
    if (document.body.clientWidth > 650) {
        xxTitle.style.height = "60px";
    } else {
        xxTitle.style.height = "40px";
        myvideoByeFun();
    }
}
var standardLeftFixed = document.getElementsByClassName("standardLeftFixed")[0];
var standardLeft = document.getElementsByClassName("standardLeft")[0];
var standardRight = document.getElementsByClassName("standardRight")[0].clientHeight;

function bodyleftbox() {
    if (document.documentElement.scrollTop > 60) {
        // standardLeftFixed.style.marginTop = document.documentElement.scrollTop - 60 + "px";
        standardLeftFixed.style.position = "fixed";
        standardLeftFixed.style.top = "0px";
        standardLeftFixed.style.left = "0px";
        standardLeftFixed.style.width = standardLeft.clientWidth + "px";
    } else {
        standardLeftFixed.style.position = "relative";
        // standardLeftFixed.style.marginTop = "0px";
    }
}
bodyleftbox();

var myVideo = document.getElementsByClassName("kepuVideo");
window.onscroll = function() {
    bodyleftbox();
    myvideoByeFun();
}

for (var i = 0; i < myVideo.length; i++) {
    var pointA = myVideo[i];
    pointA.index = i;
    pointA.onclick = function() {
        if (myVideo[this.index].paused) {
            myvideoByeFun();
            myVideo[this.index].play();
            myVideo[this.index].style.transform = "scale(2)";
            myVideo[this.index].style.margin = "40px 0px 0px 200px";
            myVideo[this.index].style.boxShadow = "0px 0px 20px rgba(0,0,0,0.2)";
            myVideo[this.index].style.zIndex = "9999";
        } else {
            myVideo[this.index].pause();
            myVideo[this.index].style.transform = "scale(1)";
            myVideo[this.index].style.margin = "0px";
            myVideo[this.index].style.boxShadow = "0px 0px 0px rgba(0,0,0,0.2)";
            myVideo[this.index].style.zIndex = "10";
        }
    }
}

AnimationD($(".standardRightTitleFlex>div"), 0.2, 0.2, "standardRightTitleFlexDivAnimation");

function ClickContentBox(number) {
    var xxTitleDiv = $(".xxTitle> div");
    var xxContent = $(".xxContent");
    for (var i = 0; i < xxTitleDiv.length; i++) {
        xxTitleDiv[i].className = "xxTitleBtn";
        xxContent[i].style.display = "none";
    }
    xxTitleDiv[number].className = "xxTitleBtnHover";
    xxTitleDiv[number].style.transition = "all .2s ease-out";
    xxContent[number].style.display = "inline-block";
}
AnimationD(document.getElementsByClassName("JGBox"), 0.2, 0.1, "JGBoxAnimation");
AnimationD(document.querySelectorAll(".standardLeftFixedContent2 div"), 0.1, 0.05, "standardLeftFixedContent2DivAnimation");
AnimationD(document.getElementsByClassName("ColorMatchBox"), 0.2, 0.1, "ColorMatchBoxAnimation");

function CopyFun() {
    navigator.clipboard.writeText('Yoawdw');
    document.execCommand('Copy');
    console.log("123");
}
