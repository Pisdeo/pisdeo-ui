import { defineComponent, PropType } from "vue";
import "PInput.css"

export const inputProps = {
    size: String as PropType<Size>,
    disabled: Boolean,
};
export default defineComponent({
    name: "PInput",
    props: inputProps,
    setup(props) {
        return () => {
            return <input class={["p-input", props.size]} disabled={props.disabled}></input>;
        };
    },
});
