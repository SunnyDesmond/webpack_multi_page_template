import style from "../css/style.scss";
import Vue from 'vue'; // get vue
import { cm } from "../js/page1.js";

new Vue({
    "el": "#page2",
    data: {

        "msg": "hello"

    }
})
cm();