import React from 'react'
import PersonBackground from './PersonWidget.Components/PersonBackground'
import PersonDetails from './PersonWidget.Components/PersonDetails';
export function PersonWidget(){
return <div className=' personWidget'><PersonBackground/><PersonDetails/></div>;
}

export default PersonWidget