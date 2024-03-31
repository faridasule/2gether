import {Pane, TextInput} from "evergreen-ui"
import {CiSearch} from "react-icons/ci"
import style from "./searchcomponent.module.scss"

interface searchProps {
    placeholder?: string
}

export const Search = (props: searchProps) => {
    const {placeholder} = props
    return (
        <Pane className={style["input-wrapper"]}>
            <TextInput name="text-input-name" placeholder={placeholder || "Search Name, Place and Jobs"}
                className={style["input"]} />
                        <CiSearch size={24} color="grey"/>

        </Pane>
    )
}



