    import { Select } from 'antd';

    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    export const SelectData = () => (
        <div className='flex flex-col w-full relative'>
            <label className='absolute z-10 -top-2 left-2 bg-white text-xs font-semibold'>Leave Quota Reset Based On</label>
            <Select
                defaultValue="Accounting year"
                style={{
                    width: '100%'
                }}
                onChange={handleChange}
            >
                <Option value="Accounting year" >Accounting year</Option>
                <Option value="User Employment Date">User Employment Date</Option>
            </Select>
        </div>
    );