import {Checkbox} from 'antd';
import React from 'react';
import {InfoTooltip} from "./Tooltip";

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

export const DefaultLocationCheckbox = () => {
    return <div className='flex items-center'>
        <Checkbox style={{
            padding: `16px 0`
        }} onChange={onChange}>Make This Location Default</Checkbox>
        <InfoTooltip text={'By making this Location the default one, all new team members will be automatically added to this Location.'} />
    </div>
}