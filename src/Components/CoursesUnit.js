import React from 'react'


function CoursesUnit(props){
    return (
        <div className="courses_unit">
            <div className="courses_numeration">
                {props.i}
            </div>
            <div className="course_info">
                <div className="top_line"></div>
                <div className="courses_info_image">
                        <a href={props.href} className="courses_name">
                            {props.name}
                        </a>
                        <div className="courses_author">
                            {props.author}
                        </div>
                        <div className="rating_image">
                            <div className="courses_rating_number">
                                <span className="courses_rating">
                                    Рейтинг: {props.rating},&ensp;
                                </span>
                                <span className="courses_number">
                                    Прошли курс: {props.number}
                                </span>
                            </div>
                            <div className="courses_image">
                                <img src={props.img} alt=""/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesUnit;