import React, { useState } from "react"
import { Switch } from "react-native"

export const SwitchFornecedor = () => {
const [checked, setChecked] = useState(false)
return(

    <Switch
    value={checked}
    onValueChange={
    () => setChecked(!checked)}
    thumbColor={checked ? "white" : "#fff"}
    trackColor={{ false: "red", true: "green" }}
    ios_backgroundColor="#3e3e3e"
    />
)

}