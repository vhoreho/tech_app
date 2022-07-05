import {Checkbox} from 'antd';
import React from 'react';
import {InfoTooltip} from "./Tooltip";

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

export const ExpiryDate = () => {
    return <div className='flex items-center'>
        <Checkbox style={{
            padding: `20px 0`
        }} onChange={onChange}>No Brought Forward Expiry Date</Checkbox>
        <InfoTooltip text={'Each year, the user\'s rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.'} />
    </div>
}