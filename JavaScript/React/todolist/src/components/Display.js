import React from 'react';

const Display = (props) => {

    const {list, setList} = props;

    const handleCompleted = (item) => {
        item.markedDelete = !item.markedDelete;
        let updateList = [...list];
        setList(updateList);
    }

    const style = (markedDelete) => {
        if (markedDelete === true) {
            return "completed"
        } else {
            return "notCompleted"
        }
    }

    const deleteButton = (contentFromBelow) => {
        setList(
            list.filter((item,index) => {
                return item.content !== contentFromBelow;
            })
        )

    }

    return (
        <div>
            {
                list.map((item, index)=>(
                    <div className={style(item.markedDelete)} key={index}>
                        <p>{item.content}</p>
                        <input type="checkbox" onChange={(e) => handleCompleted(item)}/>
                        <button onClick={(e)=>deleteButton(item.content)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
    }
    

export default Display;