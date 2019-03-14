import React from 'react'
export default function () {
    return <div className={"body"}>
        <div className={"test1"}>line1</div>
        <div className={"test2"}>line2</div>
        <div className={"demo3"}>
            <div><span>1</span></div>
            <div><span>2</span></div>
            <div><span>3</span></div>
        </div>
        <div className={"demo4"}>
            <div>中国中国这这这</div>
        </div>
        <style jsx>{`
            .test1 {
                font-size: 0;
                line-height: 30px;
            }
            .test2 {
                font-size: 30px;
                line-height: 0px;
            }
            .body > div {
                border: 1px solid red;
                background: gray;
                margin: 100px auto;
            }
            .demo3 {
                line-height: 100px;
            }
            .demo3 > div {
                border: 1px solid green;
            }
            .demo3 span {
                background: yellow;
                font-size: 50px;
                font-family: SimSun;
            }
            .demo4 {
                line-height: 100px;
                width: 50px;
                height: 100px;
            }
        `}</style>
    </div>
}