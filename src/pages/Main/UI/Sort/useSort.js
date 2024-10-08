import { useState } from "react"

export const useSort = (setValue) => {
    const [open, setOpen] = useState(false)

    const list = [
        { name: "алфавиту", sortProperty: "alphabet" },
        { name: "популярности", sortProperty: "popularity" },
        { name: "цене", sortProperty: "price" },
    ]

    const onClickList = (obj) => {
        setValue(obj)
        setOpen(false)
    }

    return {
        open,
        setOpen,
        list,
        onClickList,
    }
}
