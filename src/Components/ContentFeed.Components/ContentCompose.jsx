import React from 'react'
function ContentCompose() {
    return <div className='ContentCompose' style={{ border: 'none' }}>
        <input
            placeholder="Write your thing here"
            type='text' class='ThingField'
        >
        </input>
        <button id='compose-button' className='compose' >
            Send that thing
        </button>
    </div>;
}

export default ContentCompose