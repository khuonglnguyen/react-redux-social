import React from 'react'
import '../Edit/edit.css'

const Input = (props) => {
    const { label, data, setData, inputType, classStyle } = props
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? <textarea className={classStyle} onChange={(e) => setData(e.target.value)}></textarea>
                : <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)}
                />}
        </>
    )
}

export default Input