import { helloworld } from "./hello";
import './style/text.less';
import img from './assets/小镇建筑-介绍.gif'

document.write(
    `<div class="text">
        <h1>${helloworld()}</h1>
        <img src="${img}" />
    </div>`
);
