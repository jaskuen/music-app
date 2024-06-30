import styles from "./SideBar.module.css"
import {Adjust, FavoriteBorder, Reorder} from "@mui/icons-material";
import {useState} from "react";
import {ButtonGroup} from "@mui/material";
import {ExpandButton} from "../../components/ExpandButton/ExpandButton.tsx";
import {generateUId} from "../../functions/functions.ts";

const SideBar = () => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className={expanded ? styles.wrapper : styles.expanded}>
            <ButtonGroup orientation="vertical" className={expanded ? styles.expanded : ""}>
                <ExpandButton
                    id={generateUId()}
                    expanded={expanded}
                    img={<Reorder />}
                    onButtonClick={handleExpandClick}
                />
                <ExpandButton
                    id={generateUId()}
                    expanded={expanded}
                    img={<Adjust />}
                    text={"Главная"}
                    onButtonClick={() => console.log('a')}
                />
                <ExpandButton
                    id={generateUId()}
                    expanded={expanded}
                    img={<FavoriteBorder />}
                    text={"Любимое"}
                    onButtonClick={() => console.log('favorite')}
                />
            </ButtonGroup>
        </div>
    )
}

export {
    SideBar,
}