import { Tooltip } from 'antd';
import React from 'react';

export const InfoTooltip = ({text}) => (
    <Tooltip title={text}>
        <span className='w-5 h-5 text-blue-600 ml-3 font-semibold border border-blue-600 items-center justify-center flex rounded-full cursor-pointer'>i</span>
    </Tooltip>
);
