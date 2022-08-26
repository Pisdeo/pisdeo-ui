import { defineComponent, PropType } from "vue";
import "PBtn.css"

export const buttonProps = {
    size: String as PropType<Size>,
    disabled: Boolean,
};
export default defineComponent({
    name: "PBtn",
    props: buttonProps,
    setup(props) {
        return () => {
            return <button class={["p-btn", props.size]} disabled={props.disabled}></button>;
        };
    },
});
