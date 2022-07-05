import {Button} from "../../UI/Button";
import {useState} from "react";

export function Dashboard() {
    const [show, setShow] = useState(true);

    const handleSetShow = () => {
        setShow(!show)
    }

    const isShowClass = show ? 'relative w-60 bg-blue-50 min-h-full px-4 py-6 flex flex-col' : 'w-0 overflow-hidden'

    return (
        <div className={isShowClass}>
            <div className="content">
                <h3 className='text-gray-400 text-base mb-4'>Dashboard</h3>
                <Button handle={handleSetShow} />
            </div>
        </div>
    )
}