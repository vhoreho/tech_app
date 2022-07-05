import {Consumers} from "./Consumers";

export function LocationItem() {
    return <div className='card p-5 bg-white rounded border border-gray-200' style={{
        width:`32%`
    }}>
        <h5 className='font-semibold text-base hover:text-blue-400 cursor-pointer inline-block'>Belarus</h5>
        <div className='text-xs mt-4 mb-2'>
            <span className='w-24 inline-block'>
                Holidays
            </span>
            <a className='text-blue-400' href="#">
                View Holidays
            </a>
        </div>
        <div className='text-xs mb-6'>
            <span className='w-24 inline-block'>
                Leave Policies
            </span>
            <a className='text-blue-400' href="">
                View Leave Policies
            </a>
        </div>
        <Consumers />
    </div>
}