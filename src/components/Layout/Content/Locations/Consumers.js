export function Consumers() {
    const initialConsumers = [
        {
            name: 'UT'
        },
        {
            name: 'LB'
        },
        {
            name: 'KL'
        },
        {
            name: 'CE'
        },
        {
            name: 'PB'
        },
        {
            name: 'HF'
        },
        {
            name: 'LF'
        },{
            name: 'WS'
        },{
            name: 'PP'
        },
        {
            name: 'PP'
        },
        {
            name: 'PP'
        },{
            name: 'PP'
        },
        {
            name: 'PP'
        },{
            name: 'PP'
        },{
            name: 'PP'
        },



    ]
    return (<ul className='flex mt-4 gap-1 items-center'>
        {initialConsumers.map((item, index) => {
            if(index === 7) {
                return <span key={index} className='cursor-pointer text-blue-400 font-semibold ml-1'>+{initialConsumers.length-7}</span>;
            }
            if (index < 7)
                return <li key={index} className='cursor-pointer hover:bg-blue-600 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white'>
                    {item.name}
                </li>
            return null;
            })
        }
    </ul>)
}