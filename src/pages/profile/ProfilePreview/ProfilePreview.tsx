import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import './ProfilePreview.scss';
import {HiOutlineLink} from 'react-icons/hi';
import ProfileSummary from '../../../components/ProfileSummary/ProfileSummary';
import PreviewNav from "../../../components/PreviewNav/PreviewNav";
import ProfileSubmit from "../../../components/ProfileSubmit";

function ProfilePreview() {

    const [isCopied, setCopied] = useState<boolean>(false);

    const location = useLocation();

    const locationPrefix = 'http://localhost:3000';

    const handleCopyLinkToClipboard = async () => {
        try {
            let profileUrl = locationPrefix + location.pathname;

            await navigator.clipboard.writeText(profileUrl);

            return setCopied(true);
        } catch (err) {
            console.error('Failed to copy URL:', err);
        }
    }

    const handleCloseCopiedAlert = () => {
        setCopied(false);
    }

    const isMobile = window.innerWidth <= 395;

    return (
        <div className="main-container-preview">
            <PreviewNav
                handleCopyLinkToClipboard={handleCopyLinkToClipboard}
            />
            {!isMobile &&
                <div className="preview-header" />
            }
            <ProfileSummary mock={false} />
            <ProfileSubmit
                message={'The link has been copied to your clipboard!'}
                open={isCopied}
                icon={<HiOutlineLink />}
                handleCloseSubmitAlert={handleCloseCopiedAlert}
            />
        </div>
    )
}

export default ProfilePreview;