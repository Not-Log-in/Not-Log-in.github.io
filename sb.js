let sbString = [{
    title: '效果',
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>折叠菜单</title>
    </head>
    
    <body>
        <div class="HiddenDiv">
            <ul>
                <li>首页</li>
                <li>喜欢</li>
                <li>收藏</li>
                <li>聊天</li>
                <li>我的</li>
            </ul>
        </div>
        <div class="BoxBtn"></div>
    </body>
</html>`,
    css: `
    * {
        padding: 0;
        margin: 0;
        transition: all .2s ease-out;
        list-style: none;
        text-decoration: none;
    }
    
    body,
    html {
        width: 100%;
        height: 100%;
        background-color: #95BBFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .BoxBtn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        transform-origin: center;
        color: #95BBFF;
        background-color: white;
        position: relative;
    }
    
    .BoxBtn::before {
        position: absolute;
        border-radius: 5px;
        left: 25%;
        top: 45%;
        width: 50%;
        content: '';
        height: 10%;
        background-color: #ccc;
    }
    
    .BoxBtn::after {
        position: absolute;
        border-radius: 5px;
        left: 45%;
        top: 25%;
        width: 10%;
        content: '';
        height: 50%;
        background-color: #ccc;
    }
    
    li {
        margin-bottom: 5px;
    }
    
    ul {
        width: 70px;
        color: #629afa;
        font-weight: bold;
        text-align: center;
        background-color: white;
        border-radius: 20px;
        padding: 10px 0px;
        transform: translateY(-5px);
    }
    
    .HiddenDiv {
        height: 0px;
        overflow: hidden;
        border-radius: 20px;
    }`,
    javascript: `    var BoxBtn = document.getElementsByClassName("BoxBtn")[0];
    var HiddenDivUl = document.querySelector(".HiddenDiv > ul");
    var HiddenDiv = document.getElementsByClassName("HiddenDiv")[0];
    let BoxBtnIndex = 1;
    BoxBtn.onclick = () => {
        BoxBtnIndex++;
        if (BoxBtnIndex % 2 == 0) {
            BoxBtn.style.transform = 'rotateZ(180deg)';
        BoxBtn.style.background = "#629afa";
        HiddenDiv.style.height = HiddenDivUl.clientHeight + "px";
        console.log(HiddenDivUl.clientHeight);
        return;
        }
        BoxBtn.style.transform = 'rotateZ(0deg)';
        BoxBtn.style.background = "white";
        HiddenDiv.style.height = "0px";
    }`
}]
