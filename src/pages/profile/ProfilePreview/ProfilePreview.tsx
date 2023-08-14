import React from 'react';
import './ProfilePreview.scss';
import ProfileSummary from '../../../components/ProfileSummary/ProfileSummary';

function ProfilePreview() {
    return (
        <div className="main-container-preview">
            <div className="preview-header" />
            <ProfileSummary
                mock={false}
            />
        </div>
    )
}

export default ProfilePreview;