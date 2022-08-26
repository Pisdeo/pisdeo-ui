import { defineComponent, PropType } from "vue";
import "PTextarea.css"

export const textareaProps = {
    size: String as PropType<Size>,
    disabled: Boolean,
};
export default defineComponent({
    name: "PTextarea",
    props: textareaProps,
    setup(props) {
        return () => {
            return <input class={["p-textarea", props.size]} disabled={props.disabled}></input>;
        };
    },
});
