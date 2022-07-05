export function Button({handle}) {
    return <button
        onClick={handle}
        className=' absolute -right-2.5 w-6 h-6 flex items-center justify-center bg-white text-gray-400 top-20 drop-shadow-2xl rounded-full border-blue-100 border'>
        &#129104;
    </button>
}