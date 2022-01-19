var xxTitleDiv = document.querySelectorAll(".xxTitle > div");
let xxTitleDivAnimationIndex = 0.3;
var xxTitle = document.getElementsByClassName("xxTitle")[0];
for (var i = 0; i < xxTitleDiv.length; i++) {
    console.log(xxTitleDiv[i].textContent);
    xxTitleDivAnimationIndex += 0.1;
    xxTitleDiv[i].style.animation = "xxTitleDivAnimation " + xxTitleDivAnimationIndex + "s ease-out";
};

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
var standardRightTitleFlexDiv = $(".standardRightTitleFlex>div");
let standardRightTitleFlexDivIndex = 0.2;
for (var i = 0; i < standardRightTitleFlexDiv.length; i++) {
    standardRightTitleFlexDivIndex += 0.2;
    standardRightTitleFlexDiv[i].style.animation = "standardRightTitleFlexDivAnimation " + standardRightTitleFlexDivIndex + "s ease-out";
}

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
var JGBox = document.getElementsByClassName("JGBox");
let JGBoxIndex = 0.2;
for (var i = 0; i < JGBox.length; i++) {
    JGBoxIndex += 0.1;
    JGBox[i].style.animation = "JGBoxAnimation " + JGBoxIndex + "s ease-out";
}
