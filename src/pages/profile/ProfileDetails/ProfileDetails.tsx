import React from 'react';
import './ProfileDetails.scss';
import {ProfileInfo} from "../../../interfaces";
import {IoImageOutline} from 'react-icons/io5';
import {useSelector, connect} from 'react-redux';
import ProfileNav from '../../../components/ProfileNav/ProfileNav';
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";

function ProfileDetails(props: any) {

    const profileDetails = useSelector((state: {p_info: ProfileInfo}) => state.p_info);

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            props.dispatch({type: 'EditProfileImage', payload: {imgBlob: reader.result}});
        };

        reader.onerror = (err) => {
            console.log('Error:', err);
        }
    }

    const handleProfileDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: 'EditProfileDetails', payload: e});
    }

    const isMobile = window.innerWidth <= 395;

    return (
        <div className="main-container-details">
            <ProfileNav />
            <div className="container-md mt-4 layout">
                <div className="row gap-4">
                    {!isMobile &&
                        <div className="col-md-5 bg-white rounded-3">
                            <ProfileSummary />
                        </div>
                    }
                    <div className="col rounded-3 bg-white">
                        <div className="p-1 profile-intro">
                            <h1>Profile Details</h1>
                            <p>
                                Add your details to create a
                                personal touch to your profile
                            </p>
                        </div>
                        <div className="d-flex justify-content-between rounded-3 p-3 profile-upload">
                            <h1>Profile picture</h1>
                            <div className="upload">
                                {profileDetails.profile_img &&
                                    <img
                                        src={profileDetails.profile_img}
                                        alt="preview"
                                    />
                                }
                                <label
                                    style={{color: profileDetails.profile_img && 'white'}}
                                    className="d-flex flex-column align-items-center justify-content-center"
                                    htmlFor="profileInput"
                                >
                                    <IoImageOutline id="icon-upload" />
                                    {profileDetails.profile_img
                                        ? 'Change Image'
                                        : '+ Upload Image'
                                    }
                                </label>
                                <input
                                    className="d-none"
                                    id="profileInput"
                                    type="file"
                                    accept=".jpeg,.jpg,.png"
                                    onChange={(e) =>
                                        handleProfileImageChange(e)
                                    }
                                />
                            </div>
                            <p>
                                Image must be below 1024x1024px.
                                Use PNG or JPG format
                            </p>
                        </div>
                        <div className="mt-3 rounded-3 p-3 profile-details">
                            <div className="d-flex justify-content-between align-items-center">
                                <label>First Name*</label>
                                <input
                                    placeholder="e.g John"
                                    name="first_name"
                                    value={profileDetails.first_name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleProfileDetailsChange(e)
                                    }
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Last Name*</label>
                                <input
                                    placeholder="e.g Appleseed"
                                    name="last_name"
                                    value={profileDetails.last_name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleProfileDetailsChange(e)
                                    }
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Email</label>
                                <input
                                    placeholder="e.g email@example.com"
                                    name="email"
                                    value={profileDetails.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleProfileDetailsChange(e)
                                    }
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center p-0 save-profile">
                            <button id="enabled">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(ProfileDetails);