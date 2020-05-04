import React, { Component } from 'react';
import './Form.css';
//Todo-list 기록 및 추가하는 컴포넌트
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className ="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick = {onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form;