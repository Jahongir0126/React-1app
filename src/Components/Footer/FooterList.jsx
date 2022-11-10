import React from 'react'


export default function FooterList(props) {
    return (
        <>
            <div className="case">
                <h5 className="case__h5">{props.title}</h5>
                <p className="case__p">{props.text1}</p>
                <p className="case__p">{props.text2}</p>
                <p className="case__p">{props.text3}</p>
                <p className="case__p">{props.text4}</p>
            </div>
        </>
    )
}
