import {Menu} from "./Menu";
import {Route, Routes} from "react-router-dom";
import {Setting} from "../DropSideMenus/Setting/Setting";
import {Users} from "../DropSideMenus/Users";
import {PL} from "../DropSideMenus/PL";
import {Vacation} from "../DropSideMenus/Vacation";
import {Dashboard} from "../DropSideMenus/Dashboard";

export function Sidebar() {
    return (
        <aside className='min-h-full flex'>
            <Menu />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/users' element={<Users />} />
                <Route path='/pl' element={<PL />} />
                <Route path='/vacation' element={<Vacation />} />
            </Routes>
        </aside>
    )
}