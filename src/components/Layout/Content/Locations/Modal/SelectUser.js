import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

let users = ['John Doe', 'Alan Walker', 'Trent Alexander', "Paul Parker", "Carl Clark"]

export const SelectUser = () => (
    <Select
        mode="multiple"
        style={{
            width: '100%',
        }}
        placeholder="Add Users"
        onChange={handleChange}
        optionLabelProp="label"
    >
        {
            users.map((user, index) => {
                return <Option key={index} value={user} label={user}>
                    <div className="demo-option-label-item">
                        {user}
                    </div>
                </Option>
            })
        }
    </Select>
);
