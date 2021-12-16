import React from 'react'
import CoursesUnit from './CoursesUnit'

function CoursesRows(props){

    let courses = []
    for(let i = 0; i < props.courses.length; i++){
        courses.push(<CoursesUnit i={i+1} name={props.courses[i].name} img={props.courses[i].img}
        author={props.courses[i].author} rating={props.courses[i].rating} number={props.courses[i].number}
        href={props.courses[i].href} key={i+1}/>)
    }

    return (
        <div>
            {courses}
        </div>
    );
}

export default CoursesRows;