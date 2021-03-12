"use strict"

// the size of resume
let resumeWidth = 800;
let resumeHeight = 1000;

function initFrame() {
    // set attribute of resume
    let resume = document.getElementById("resume");
    resume.setAttribute("style", `
        height: ${resumeHeight}px; 
        width: ${resumeWidth}px;
        margin: auto;
        padding: 0px;
    `);
    
    // set left column
    let leftCol = document.getElementById("leftCol");
    leftCol.setAttribute("style", `
        margin: 0px;
        padding: ${resumeWidth / 20}px;
        width: 30%;
        background-color: rgba(137, 212, 187, 0.918);
        height: ${resumeHeight - resumeWidth / 5}px;
        position:relative;
        float: left;
    `);
    
    // set table in left column
    let leftColTable = document.getElementById("leftColTable");
    leftColTable.setAttribute("style", `
        width: 100%;
        height: ${resumeHeight / 6}px;
        font-size: 0.8em;
    `);
    const number = 10;
    let initHTML = " ";
    const contents = [0, "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "SCSS", "Three.js", "WebGL", "Web Audio", "Web RTC"];
    const progress = [0, 90, 80, 75, 60, 55, 53, 35, 32, 31, 20];
    for(let i = 1; i <= number; i++) {
        initHTML += `
        <tr>
            <td align="right" style="color: white; height: 10%; width: 40%; font-weight: bold;">${contents[i]}</td>
            <td align="left" style="height: 10%; width: 60%;">
                <div id="leftColTable${i}1" style="background-color: rgba(88, 206, 167, 0.918); height: 60%; width: 100%;">
                    <div id="leftColTable${i}2" style="height: 100%; width: ${progress[i]}%; background-color: white;"></div>
                </div>
            </td>
        </tr>`;
    }
    document.getElementById("leftColTable").innerHTML = initHTML;
    for(let i = 1, initName = "leftColTable"; i <= number; i++) {
        document.getElementById(initName + i + 1).style.borderRadius = `1em`;
        document.getElementById(initName + i + 2).style.borderRadius = `1em 0px 0px 1em`;
    }
    
    // position of links in the bottom of left column
    //document.getElementById("leftColBottom").style.paddingBottom = "1px";
    
    
    // set right Column
    let rightCol = document.getElementById("rightCol");
    rightCol.setAttribute("style", `
        margin: 0px;
        padding: ${resumeWidth / 20}px;
        width: 50%;
        background-color: rgba(137, 212, 187, 0.918);
        height: ${resumeHeight - resumeWidth / 5}px;
        float: right;
        background-color: rgba(230, 241, 203, 0.959);
    `);
    
    // add function to two buttons in the top
    document.getElementById("enlarge").onclick = function() {
        resumeHeight *= 1.2;
        resumeWidth *= 1.2;
        initFrame();
    }
    document.getElementById("narrow").onclick = function() {
        if(resumeHeight < 1000)
            return;
        resumeHeight /= 1.2;
        resumeWidth /= 1.2;
        initFrame();
    }
}

window.onload = initFrame;