import React from 'react'
export function ContentCompose() {
    return <div className='ContentCompose' style={{ border: 'none' }}>
        <input
            type='text'
            style={{
                borderRadius: '5px',
                width: '100%',
                margin: 0,
                height: '8vh',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '0px',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '0px'
            }}>
        </input>
        <button id='compose-button' className='compose'>
            Compose
            </button>
    </div>;
}

export default ContentCompose