import {LocationsList} from "./LocationsList";
import {useState} from "react";
import 'antd/dist/antd.css';
// import {Modal} from "./Modal/Modal";
import {Button, Modal} from "antd";
import {ModalContent} from "./Modal/ModalContent";

export function Locations() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div className='mt-2 mb-10 flex justify-between items-center'>
                <div className="text">
                    <h2 className='mb-1.5 font-semibold text-2xl'>Locations</h2>
                    <p className='text-sm font-normal text-gray-800'>Create new users or update the existng users. You can then set their permissons here too. </p>
                </div>
                <Button type='primary' onClick={showModal}>Create Location</Button>
            </div>
            <LocationsList />
            <Modal title="Create Location" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ModalContent />
            </Modal>
        </div>
    )
}