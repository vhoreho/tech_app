import { Checkbox, Row, Col } from 'antd';
import React from 'react';

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};

export const CheckBoxGroup = () => (
    <div className='py-6 flex justify-between'>
        <h6>Workweek <span className='text-red-600'>*</span> </h6>
        <div className='w-80'>
            <Checkbox.Group
                style={{
                    width: '100%',
                }}
                onChange={onChange}
            >
                <Row>
                    <Col span={8}>
                        <Checkbox value="Sunday">Sunday</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="Monday">Monday</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="Tuesday">Tuesday</Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Checkbox value="Wednesday">Wednesday</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="Thursday">Thursday</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="Friday">Friday</Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Checkbox value='Saturday'>Saturday</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </div>
    </div>
);
