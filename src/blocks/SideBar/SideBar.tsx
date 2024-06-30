import styles from "./SideBar.module.css"
import {IconButton} from "@mui/material";
import {Adjust, Reorder} from "@mui/icons-material";

const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <IconButton
                aria-laber="expand"
                onClick={() => console.log('reorder click')}
            >
                <Reorder />
            </IconButton>
            <IconButton
                aria-label="adjust"
                onClick={() => console.log('adjust click')}
            >
                <Adjust/>
            </IconButton>
        </div>
    )
}

export {
    SideBar,
}