import {Route, Routes} from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./Pages/Home"
import { Checkout } from "./Pages/Checkout"
import { Success } from "./Pages/Success"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Checkout/>}/>
                <Route path="/success" element={<Success/>}/>
            </Route>
        </Routes>
    )
}