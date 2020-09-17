import React, { useState } from 'react';

export default ({ postId }) => {
    const [content, setContent] = useState('')

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>New Comment</label>
                    <input className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )  
}
