import React from 'react';
import './Selected.css'

const Selected = (props) => {
    return (
        <div className="selected-actors">
            <div>
                <img style={{ borderRadius: "30%", width: "100px", height: "100px" }} src={props.img} alt="" />
            </div>
            <div>
                <p><em> {props.name}</em></p>
            </div>
        </div>
    );
};

export default Selected;