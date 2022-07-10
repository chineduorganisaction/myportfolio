import React, { memo } from 'react'

const Contact = () => {
    return (
        <div className='contactparent'>
            <div className="contactadult">
                <div className="contactchild reveal">
                    <div className="r-contact">
                        <h1>CONTACT ME.</h1>
                    </div>
    
                    <div className="l-contact">
                        <div className="l-contactchild">
                            <form >

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default memo(Contact);