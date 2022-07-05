import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

let i = 1;

const date = Array.from({length: 31}, (a,b) => b + 1);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const SelectDate = () => (
    <div className='flex justify-start'>
        <div className='flex flex-col relative'>
            <label className='absolute z-10 -top-2 left-2 bg-white text-xs font-semibold'>Fiscal Year Start</label>
            <Select
                defaultValue={months[0]}
                style={{
                    width: 120,
                    marginRight: 10
                }}
                onChange={handleChange}
            >
                {months.map((month,index) => <Option key={index} value={month}>{month}</Option>)}
            </Select>
        </div>
        <Select
            defaultValue={date[0]}
            style={{
                width: 60
            }}
            onChange={handleChange}
        >
            {
                date.map((item,index) => <Option key={index} value={item}>{item}</Option> )
            }
        </Select>
    </div>
);