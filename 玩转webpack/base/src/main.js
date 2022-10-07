import { helloworld } from "./hello";
import { search } from "./search";

import './style/text.less';
import img from './assets/小镇建筑-介绍.gif'

document.write(
    `<div>
        <h1>${helloworld()}</h1>
        <div>${search()}</div>
        <img src="${img}" />
    </div>`
);
