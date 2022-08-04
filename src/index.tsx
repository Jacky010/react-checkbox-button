import * as React from 'react';
import './index.scss'


// 默认数据
const list: any[] = [];


interface Data {
    key?: string | number;
    value: string | number;
    label: string;
    size: string;
    disabled: boolean;
}


interface CheckBoxProps {
    data?: Data[]; // 父组件传入的数据源，若无则使用list数据
    value?: any[]; // 选中的值
    size?: string; // 组件大小 默认default
    onChange?: (checkList: any[], checked: boolean) => void; //选中值变化时，调用此函数
    disabled?: boolean; // 是否禁用 默认false
}


/**
 * 专业多选组件
 * @constructor
 */
const ReactCheckBox = (props: CheckBoxProps) => {
    const {
        data = list,
        value = [],
        size = 'default',
        disabled=false,
        onChange = (checkList: any[]) => {}
    } = props;

    console.log('size', size)


    /**
     * 选中事件
     * @param value
     * @param checked
     */
    const checkItem = (val: string, checked: boolean) => {
        if(disabled) return;
        let newCheckedList:any[] = [...value];
        newCheckedList = checked ? [...newCheckedList, val] : newCheckedList.filter(v => v !== val);
        onChange(newCheckedList, true);
    }

    return (
        <div className={['buttonWrap', size,disabled ? 'isDisabled':'' ].join(' ')}>
            {data.map((item: any, index: number) =>
                <div
                    className={['buttonItem', value.includes(item.value) ? 'isChecked' : '' ].join(' ')}
                    onClick={() => checkItem(item.value, !value.includes(item.value))}
                    key={index}
                >
                    {item.label}
                </div>
            )}
        </div>
    )
}


export default ReactCheckBox;
