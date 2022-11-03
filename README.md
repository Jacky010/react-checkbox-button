<h1 align="center">Welcome to react-checkbox-button 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> React多选按钮组

> 仿elemntUI多选按钮checkbox的React多选按钮组件，可应用于Antd的form表单场景

## Install

```sh
npm install
```

## Start

```sh
npm run dev
```

## Run Build

```sh
npm run build
```

## 使用

```sh
import ReactCheckboxButton from 'react-checkbox-button/src/index';
```
（注：如果没有安装sass，请先安装sass。`npm install node-sass sass --save-dev` 或者 `cnpm install node-sass@latest`）

不在Antd表单中使用方法：

```$xslt
import React, {useState} from 'react';
import { render } from 'react-dom';
import ReactCheckboxButton from 'react-checkbox-button/src/index';


// 数据源
const list: any[] = [    
    {id: 1, value: '上海', label: '上海'},    
    {id: 2, value: '北京', label: '北京'},    
    {id: 3, value: '成都', label: '成都'},    
    {id: 4, value: '广州', label: '广州'},    
    {id: 5, value: '杭州', label: '杭州'}
]


const App = () => { 
    // value 为默认选中数组
    const [value, setValue] = useState<any[]>([]);    

    return (        
        <>            
            <ReactCheckboxButton   
                data={list}
                value={value}                    
                size="large"                    
                onChange={(values:any[]) => setValue(values)}               
             />            
            <ReactCheckboxButton 
                data={list}
                value={value}                    
                size="default"                    
                onChange={(values:any[]) => setValue(values)}                
             />            
             <ReactCheckboxButton    
                data={list}
                value={value}                    
                size="small"                    
                onChange={(values:any[]) => setValue(values)}                
              />
        </>
    );
}

render(<App />, document.querySelector('#app'));
```

在Antd表单中使用方法：

```$xslt
import React, {useState} from 'react';
import {  Form, Select } from 'antd';
import ReactCheckboxButton from 'react-checkbox-button/src/index';


// 数据源
const list: any[] = [    
    {id: 1, value: '上海', label: '上海'},    
    {id: 2, value: '北京', label: '北京'},    
    {id: 3, value: '成都', label: '成都'},    
    {id: 4, value: '广州', label: '广州'},    
    {id: 5, value: '杭州', label: '杭州'}
]

const App = () => { 
    const [form] = Form.useForm();
    const {Option} = Select;

    
    /** 
     * 查询事件 
     * @param values 
     */
    const onFinish = (values: any) => 
    {    
        console.log(values)
    }


    return (        
        <>            
            <Form className="search-form-wrapper" form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item label="公司：" name="company">    
                    <Select        
                        showSearch        
                        allowClear        
                        style={{width: 200}}        
                        placeholder="请选择"    
                    >        
                        <Option value="jack">Jack</Option>        
                        <Option value="lucy">Lucy</Option>        
                        <Option value="tom">Tom</Option>    
                    </Select>
                </Form.Item>
                // initialValue 为默认选中值
                <Form.Item label="专业：" name="level" initialValue={['北京', '成都']}>    
                    <ReactCheckboxButton data={list} />
                </Form.Item>
            </Form>
        </>
    );
}

render(<App />, document.querySelector('#app'));
```

在Antd表单和不在Antd表单中一起使用代码：

```$xslt
import React, {useState} from 'react';
import './App.css';
import {Form} from 'antd';
import ReactCheckBoxButton from "react-checkbox-button/src/index";

const list = [  
    {id: 1, value: '上海', label: '上海'},  
    {id: 2, value: '北京', label: '北京'},  
    {id: 3, value: '成都', label: '成都'},  
    {id: 4, value: '广州', label: '广州'},  
    {id: 5, value: '杭州', label: '杭州'}
]


function App() {
    const [value, setValue] = useState(['上海', '成都']);
    return (
        <div className="App">
        
            {/*不在antd表单中*/}
            <header className="App-header">
                <ReactCheckBoxButton
                    data={list}
                    size="small"
                    value={value}
                    onChange={(values) => setValue(values)} 
                />
                    
            <div>----------------------------------------------------</div>

             {/*antd表单中*/}
             
            <Form
                name="basic"
            >
                <Form.Item
                    initialValue={['上海']}
                    name="citys"
                    rules={[{ required: true, message: 'Please select your citys!' }]}
                >
                    <ReactCheckBoxButton data={list}/>
                </Form.Item>
            </Form>
            </header>
        </div>
    );
}

export default App;
```

增加disabled属性的使用方法：

```
import React, {useState} from 'react';
import './App.css';
import ReactCheckBoxButton from "react-checkbox-button/src/index";

const list = [  
    {id: 1, value: '上海', label: '上海'},  
    {id: 2, value: '北京', label: '北京'},  
    {id: 3, value: '成都', label: '成都'},  
    {id: 4, value: '广州', label: '广州'},  
    {id: 5, value: '杭州', label: '杭州'}
]

const listBak: any[] = [
  {id: 1, value: '上海', label: '上海', disabled: false},
  {id: 2, value: '北京', label: '北京', disabled: false},
  {id: 3, value: '成都', label: '成都', disabled: false},
  {id: 4, value: '广州', label: '广州', disabled: true},
  {id: 5, value: '杭州', label: '杭州', disabled: false}
]


function App() {
    const [value, setValue] = useState<any[]>([]);
    const [valueDisabled, setValueDisabled] = useState<any[]>(['成都', '杭州']);
    return (
        <div className="App">
        
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
                        value={valueDisabled}
                        size="default"
                        disabled={true}
                        onChange={(values:any[]) => setValueDisabled(values)}
                    />
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                    <div>small：</div>
                    <ReactCheckBox
                        data={listBak}
                        value={value}
                        size="small"
                        onChange={(values:any[]) => setValue(values)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
```

## Result 

![test.gif](https://i.loli.net/2020/08/30/Tqh762QoeIrn3g5.gif)

![test1.gif](https://i.loli.net/2020/08/30/RCGBtOKcSHUP9pT.gif)

![test2.gif](https://s2.loli.net/2022/11/03/y2wPmn31LrHtDYE.gif)

## API

| 参数 | 说明 | 类型 | 示例 | 版本 |
| --- | --- | --- | --- | --- |
| data | 数据源(必传)  | Array | data={[{value: '成都', label: '成都'}, {value: '上海', label: '上海'}]} | - |
| value | 默认选中值(不在Antd表单场景必传， antd表单中使用表单initialValue)  | Array | value={['成都']}或者initialValue={['成都', '北京']} | - |
| size | 选择按钮大小(默认default，非必传)  | String | size="default" | - |
| disabled | 是否禁用(默认false，非必传)  | Boolean | disabled="true" | - |
| onChange | 选中按钮时调用此函数(不在Antd表单场景，必传)  | function(arr: any[], checked: boolean) | onChange={(values) => setValue(values)} | 0.1.7 |

如果要禁用选中某个选项，在数据中增加disabled属性即可，如下：

```
const listBak: any[] = [
  {id: 1, value: '上海', label: '上海', disabled: false},
  {id: 2, value: '北京', label: '北京', disabled: false},
  {id: 3, value: '成都', label: '成都', disabled: false},
  {id: 4, value: '广州', label: '广州', disabled: true},
  {id: 5, value: '杭州', label: '杭州', disabled: false}
]
```


## Author

👤 **jacky010**

* Github: [@jacky010](https://github.com/jacky010)

* 仓库地址：[react-checkbox-button](https://github.com/Jacky010/react-checkbox-button)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
