import React, { Component } from 'react';
import TodoItem from './TodoItem';

//TodoItem 컴포넌트를 여러개를 렌더링하여 리스트를 보여주는 컴포넌트
//클래스형 컴포넌트 (성능 최적화를 위해서.)
class TodoItemList extends Component {

    //todos가 업데이트 되는 경우에만 리렌더랑!!
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }



    render() {
        const{todos, onToggle, onRemove} = this. props;
        
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;