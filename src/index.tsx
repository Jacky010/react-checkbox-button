import * as React from 'react';
import './index.scss'


// 默认数据
const list: any[] = []


interface Data {
    key?: string | number;
    value: string | number;
    label: string;
    size: string;
}


interface CheckBoxProps {
    data?: Data[]; // 父组件传入的数据源，若无则使用list数据
    value?: any[];
    size?: string;
    onChange?: (checkList: any[], checked: boolean) => void;
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
        onChange = (checkList: any[]) => {}
    } = props;

    console.log('size', size)


    /**
     * 选中事件
     * @param value
     * @param checked
     */
    const checkItem = (val: string, checked: boolean) => {
        let newCheckedList:any[] = [...value];
        newCheckedList = checked ? [...newCheckedList, val] : newCheckedList.filter(v => v !== val);
        onChange(newCheckedList, true);
    }


    return (
        <div className={['buttonWrap', size].join(' ')}>
            {data.map((item: any, index: number) =>
                <div
                    className={['buttonItem', value.includes(item.value) ? 'isChecked' : ''].join(' ')}
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
