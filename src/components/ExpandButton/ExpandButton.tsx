import styles from "./ExpandButton.module.css"
import {joinClassName} from "../../functions/functions.ts";

type ExpandButtonProps = {
    id: string,
    expanded: boolean,
    img: JSX.Element,
    text?: string,
    onButtonClick: () => void,
}
const ExpandButton = (props: ExpandButtonProps) => {
    const {
        id,
        expanded,
        img,
        text,
        onButtonClick,
    } = props

    return (
        <div className={joinClassName(id, styles.wrapper)}>
            <button className={expanded ? styles.expanded : ""} onClick={onButtonClick} >
                {img}
                {expanded ? text : null}
            </button>
        </div>
    )
}

export {
    ExpandButton,
}