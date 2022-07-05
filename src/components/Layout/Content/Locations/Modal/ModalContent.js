import {LocationNameInput} from "./Input";
import 'antd/dist/antd.css';
import {CheckBoxGroup} from "./CheckboxGroup";
import {SelectData} from "./SelectData";
import {InfoTooltip} from "./Tooltip";
import {SelectDate} from "./SelectDate";
import {ExpiryDate} from "./ExpiryDate";
import {DayStarts} from "./DayStarts";
import {Timezone} from "./Timezone";
import {SelectUser} from "./SelectUser";
import {DefaultLocationCheckbox} from "./DefaultLocationCheckbox";
import {ModalNotification} from "./ModalNotification";

export function ModalContent() {
    return (
            <form>
                <LocationNameInput placeholder='Location Name' />
                <CheckBoxGroup />
                <div className='w-full flex items-center justify-between pb-6'>
                    <SelectData />
                    <InfoTooltip text={'This setting will determine if your leave balance will be reset based on the accounting year (company\'s fiscal year) or based on the employee\'s start date. Besides quotas, your roll-over policy will also be affected according to this setting.'} />
                </div>
                <SelectDate />
                <ExpiryDate />
                <DayStarts />
                <div className='w-full flex items-center justify-between pb-6'>
                    <Timezone />
                    <InfoTooltip text={'This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.'} />
                </div>
                <SelectUser />
                <DefaultLocationCheckbox />
                <ModalNotification />
            </form>)
}