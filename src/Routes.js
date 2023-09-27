import { Route, Routes } from "react-router-dom"
import Pending from "./Pending"

export const Router = () => {
    return(
        <Routes>
            <Route path="/abhi" element={<Pending />} />
        </Routes>
    )
}