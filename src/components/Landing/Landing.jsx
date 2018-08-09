import React from 'react'
import {ThemeContext} from '../../theme-context'

export default props => (
    <div className="landing-component">
        <ThemeContext.Consumer>{ theme=>{
            console.log(`
                theme in landing-component: 
                ${JSON.stringify(theme)}
            `)

        return <div className="content-container" style={{background: theme.background, color: theme.color}}>

            <h1>landing_component</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem reiciendis exercitationem, dolorem quidem quia consectetur possimus modi nemo, obcaecati, error cumque laudantium odit esse culpa consequuntur itaque doloremque similique?</p>
        </div>}}
        </ThemeContext.Consumer>
    
    </div>
)