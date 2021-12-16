import React from 'react';
import {OverlayTrigger} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Tooltip} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function CoursesCap(props){
    return (
        <div className="cap">
            <span className="cap_text">Рекомендуемые курсы</span>
            <OverlayTrigger key={'left'} placement={'left'} overlay={<Tooltip id="tooltip-left">Курсы сформированы на основе курсов с классрума либо ваших проектов</Tooltip>}>
                <span style={{borderRadius: '50%', width: '20px', height: '20px'}} className="d-inline-block">
                    <Button disabled style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding:0, border:'none', pointerEvents: 'none', borderRadius: '50%', width: '20px', height: '20px', background: 'gray' }}>?</Button>
                </span>
            </OverlayTrigger>
        </div>
    );
}

export default CoursesCap;