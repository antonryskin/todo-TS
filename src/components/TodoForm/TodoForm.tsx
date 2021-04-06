import React, { useRef, useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}
const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')
    
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
            // console.log(title);
            // setTitle('')
        } 
    }


    return (
        <div className="input-field mt2">
            <input
            // onChange={changeHandler}
            // value={title}
            ref={ref}
            type="text"
            id="title"
            placeholder="Enter task name"
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Enter task name</label>
        </div>
    );
}

export default TodoForm;