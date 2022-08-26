import { App } from "vue";
import PBtn from "./components/PBtn";
import PInput from "./components/PInput";
import PTextarea from "./components/PTextarea";

export default {
    install: (app: App) => {
        app.component("p-btn", PBtn);
        app.component("p-input", PInput)
        app.component("p-textarea", PTextarea)
    },
};
