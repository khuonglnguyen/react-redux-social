import React from 'react'
import './header.css'

const Header = (props) => {
    const { setIsEdit } = props

    const handleEdit = () => {
        setIsEdit(true)
    }

    return (
        <>
            <header style={{ backgroundColor: "#ff9051", backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051 65%, #181818 100%)' }}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img className='info-ava' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bbad678-25db-4953-aed1-24f458d9e85b/dcmkj95-43c3862c-401d-4d0a-93f3-6f928304051e.png/v1/fill/w_894,h_894,strp/chibi_avatar___akiyama_mio_by_mrtapoz_kun_dcmkj95-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzJiYmFkNjc4LTI1ZGItNDk1My1hZWQxLTI0ZjQ1OGQ5ZTg1YlwvZGNta2o5NS00M2MzODYyYy00MDFkLTRkMGEtOTNmMy02ZjkyODMwNDA1MWUucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kia6Oe2hyd3p4HoY8aaruG3oisSJAa5y2yqxp8mSjmM" />
                    <div className="info-username">Victor Nguyen</div>
                    <div className="info-age">22</div>
                    <div className="info-about">Coder</div>
                </div>
            </header>
        </>
    )
}

export default Header