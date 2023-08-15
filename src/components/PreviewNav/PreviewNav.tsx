import React from 'react';
import {Link} from 'react-router-dom';
import './PreviewNav.scss';

interface Props {
    handleCopyLinkToClipboard: () => void
}

function PreviewNav({handleCopyLinkToClipboard}: Props) {
    return (
        <div className="d-flex align-items-center justify-content-between preview-nav">
            <Link id="link" to="/*">
                Back to Editor
            </Link>
            <button onClick={handleCopyLinkToClipboard}>
                Share Link
            </button>
        </div>
    )
}

export default PreviewNav;