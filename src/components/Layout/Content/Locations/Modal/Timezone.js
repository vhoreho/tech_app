import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const timezones = ['(GMT+02:00) Vilnus', '(GMT+02:00) Khartoum', '(GMT+03:00) Nairobi','(GMT+03:00) Syowa','(GMT+03:00) Baghdad','(GMT+03:00) Qatar','(GMT+03:00) Moscow','(GMT+03:00) Minsk',]

export const Timezone = () => (
    <div className='flex flex-col w-full relative'>
        <label className='absolute z-10 -top-2 left-2 bg-white text-xs font-semibold'>Time Zone <span className='text-red-600'>*</span></label>
        <Select
            defaultValue={timezones[0]}
            style={{
                width: '100%'
            }}
            onChange={handleChange}
        >
            {timezones.map((zone,index) => <Option key={index} value={zone}>{zone}</Option> )}
        </Select>
    </div>
);