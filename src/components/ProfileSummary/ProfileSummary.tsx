import React from 'react';
import './ProfileSummary.scss';
import {ProfileLink, ProfileInfo} from "../../interfaces";
import {useSelector} from 'react-redux';
import {selectOptions} from "../../utils/select";
import {FiArrowRight} from 'react-icons/fi';
import PhoneMockup from '../assets/illustration-phone-mockup.svg';

function ProfileSummary({mock}: {mock: boolean}) {

    const profileLinks = useSelector((state: {links: ProfileLink[]}) => state.links);

    const profileDetails = useSelector((state: {p_info: ProfileInfo}) => state.p_info);

    return (
        <div className={`d-flex justify-content-center summary ${!mock && 'preview'}`}>
            {mock &&
                <img
                    src={PhoneMockup}
                    alt="mockup"
                />
            }
            <div
                className="d-flex flex-column align-items-center info-container"
                style={{position: mock ? 'absolute' : 'relative'}}
            >
                {profileDetails.profile_img &&
                    <img
                        src={profileDetails.profile_img}
                        alt="avatar"
                    />
                }
                <h1 id="name">
                    {profileDetails.first_name} {profileDetails.last_name}
                </h1>
                <h1 id="email">
                    {profileDetails.email}
                </h1>
            </div>
            <div
                className="d-flex flex-column position-absolute"
                style={{top: mock ? '43.5%' : '57.5%'}}
            >
                {profileLinks.map((link) => {
                    const selectedLinks = selectOptions.find((option) => option.value === link.platform);
                    return (
                        <div
                            className="d-flex summary-link"
                            style={{backgroundColor: `${selectedLinks?.background}`}}
                            key={link.id}
                        >
                            {selectedLinks &&
                                <span className="d-flex align-items-center gap-2">
                                    {selectedLinks.label}
                                    <a href={link.link}>
                                        <FiArrowRight id="link-location" />
                                    </a>
                                </span>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileSummary;