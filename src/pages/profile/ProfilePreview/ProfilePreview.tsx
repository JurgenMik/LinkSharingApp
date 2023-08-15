import React from 'react';
import './ProfilePreview.scss';
import ProfileSummary from '../../../components/ProfileSummary/ProfileSummary';
import PreviewNav from "../../../components/PreviewNav/PreviewNav";

function ProfilePreview() {

    const isMobile = window.innerWidth <= 395;

    return (
        <div className="main-container-preview">
            <PreviewNav />
            {!isMobile && <div className="preview-header" />}
            <ProfileSummary
                mock={false}
            />
        </div>
    )
}

export default ProfilePreview;