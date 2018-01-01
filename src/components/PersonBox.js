import React from 'react'

const PersonBox = (props) => (
    <div className="person-box">
        <div className="person-box__img">
            <div className="person-box__border"></div>
            <img className="img-responsive el-center" src={require("../../assets/worker1.jpg")} alt={props.name} />
        </div>
        <div className="person-box__content">
            <p className="person-box__heading">{`${props.title} ${props.name}`}</p>
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
    </div>
)

export default PersonBox