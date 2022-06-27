import * as React from "react";
import {useState} from "react";
import {createRoot} from 'react-dom/client';
// import ReactCheckBox from "../../src/index";
import ReactCheckBox from "react-checkbox-button/src/index";
import 'react-checkbox-button/lib/index.min.css';

const list: any[] = [
    {id: 1, value: '上海', label: '上海'},
    {id: 2, value: '北京', label: '北京'},
    {id: 3, value: '成都', label: '成都'},
    {id: 4, value: '广州', label: '广州'},
    {id: 5, value: '杭州', label: '杭州'}
]


const App = () => {
    const [value, setValue] = useState<any[]>([]);
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '300px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div>large：</div>
                <ReactCheckBox
                    data={list}
                    value={value}
                    size="large"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <div>default：</div>
                <ReactCheckBox
                    data={list}
                    value={value}
                    size="default"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <div>small：</div>
                <ReactCheckBox
                    data={list}
                    value={value}
                    size="small"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
