import { useState, useEffect } from 'react';
import { SkillsTypes } from './Skills.types';

export default function Skills(props: SkillsTypes) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 500);
    }, []);

    return (
        <div>
            <ul>
                {props.skills?.map(skills => {
                    return <li key={skills}>{skills}</li>
                })}
            </ul>
            {
                isLoggedIn ?
                    <button>Start learning</button> :
                    <button onClick={() => setIsLoggedIn(true)}>login</button>
            }
        </div>
    )
}
