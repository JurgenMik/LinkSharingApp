import React from 'react';
import {Link} from 'react-router-dom';
import './PreviewNav.scss';

function PreviewNav() {
    return (
        <div className="d-flex align-items-center justify-content-between preview-nav">
            <Link id="link" to="/*">
                Back to Editor
            </Link>
            <button>
                Share Link
            </button>
        </div>
    )
}

export default PreviewNav;