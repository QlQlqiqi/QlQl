"use strict"

// 自动 + 手动轮播图
const number = 4;
const click = "click";
const noclick = "noclick";
const active = "active";
const inactive = "inactive";
const rollContainer = document.getElementById("rollContainer");
const rollLabel = [null, rollContainer.childNodes[3], rollContainer.childNodes[7], 
        rollContainer.childNodes[11], rollContainer.childNodes[15]];
const rollUl = rollContainer.childNodes[17];
const rollUlLi = [null, rollUl.childNodes[1], rollUl.childNodes[3], rollUl.childNodes[5], rollUl.childNodes[7]];

// 当前轮播图所在的位置
let nowIdx = 1;
// 每interval时间自动播放一次，点击button会延迟定时interval时间
const interval = 2000;
// 定时器ID
let ID = undefined;
function start() {
    ID = setInterval(function() {
        rollLabel[nowIdx].id = null;
        rollUlLi[nowIdx].id = null; 
        nowIdx = (nowIdx === number? 1: nowIdx + 1);
        rollLabel[nowIdx].id = click;
        rollUlLi[nowIdx].id = active;
    }, interval);
}
start();
function rollButton(idx) {
    for(let i = 1; i <= number; i++) {
        if(i === idx) {
            rollLabel[i].id = click;
            rollUlLi[i].id = active;
            nowIdx = i;
            // 如果点击了button，那么清除之前的定时器，重新设置一个定时器
            // 这样可能会造成很多不必要的系统开销，待以后会了再解决
            clearInterval(ID);
            start();
            continue;
        }
        rollLabel[i].id = null;
        rollUlLi[i].id = null;
    }
}

// 内容变换

const left = [null, "10%", "20%", "30%"];
const right = [null, "80%", "70%", "60%"];
const contentClick = "contentClick";
const contentContainer = document.getElementsByClassName("contentContainer")[0];
const contentLabel = [null, contentContainer.childNodes[5], contentContainer.childNodes[9], contentContainer.childNodes[13]];
const contentNumber = 3;
const contentActive = "contentActive";
const content = document.getElementsByClassName("content");
function contentButton(idx) {
    document.getElementById("left").style.width = left[idx];
    document.getElementById("right").style.width = right[idx];
    for(let i = 1; i <= contentNumber; i++) {
        if(i === idx) 
            contentLabel[i].id = contentClick;
        else 
            contentLabel[i].id = null;
        content[i - 1].id = null;
    }
    content[idx - 1].id = contentActive;
}

