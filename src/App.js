import React from 'react';
import './App.css';
import CoursesCap from './Components/CoursesCap'
import CoursesRows from './Components/CoursesRows'

export function App(props){
  return (
    <div className="container-sm">
      <CoursesCap/>
      <CoursesRows courses={props.data}/>
    </div>
  );
}