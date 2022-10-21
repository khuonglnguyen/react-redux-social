import React from 'react'
import { useSelector } from 'react-redux'
import './header.css'

const Header = (props) => {
    const user = useSelector((state) => state.user)
    const { setIsEdit } = props

    const handleEdit = () => {
        setIsEdit(true)
    }

    return (
        <>
            <header style={{
                backgroundColor: `${user.themeColor}`,
                backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor} 65%, #181818 100%)`
            }}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img className='info-ava' src={user.avaUrl} />
                    <div className="info-username">{user.name}</div>
                    <div className="info-age">{user.age}</div>
                    <div className="info-about">{user.about}</div>
                </div>
            </header>
        </>
    )
}

export default Header