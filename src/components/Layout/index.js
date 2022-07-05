import {Sidebar} from './Sidebar';
import {Content} from "./Content";

export function Layout() {
    return (
        <div className='h-screen flex'>
            <Sidebar />
            <Content />
        </div>
    )
}