import React, {useState} from 'react';

const Form = (props) => {
    const [text, setText] = useState("");

    const {list, setList} = props;

const submitHandler = (e) => {
    e.preventDefault();

    setList([...list,{
        content: text,
        markedDelete: false
    }])

    setText("");
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input value={text} onChange={(e) => setText(e.target.value)} type='text'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form