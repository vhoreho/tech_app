import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const DayStarts = () => (
    <div className='flex flex-col w-full relative mb-6'>
        <label className='absolute z-10 -top-2 left-2 bg-white text-xs font-semibold'>Week Starts On</label>
        <Select
            defaultValue={days[1]}
            style={{
                width: '30%'
            }}
            onChange={handleChange}
        >
            {
                days.map((day,index) => <Option key={index} value={day}>{day}</Option>)
            }
        </Select>
    </div>
);