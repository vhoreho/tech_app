import {LocationItem} from "./LocationItem";

export function LocationsList() {
    return (
        <div className='flex flex-wrap gap-4 justify-between'>
            <LocationItem />
            <LocationItem />
            <LocationItem />
        </div>
    )
}