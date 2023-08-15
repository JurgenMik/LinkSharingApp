import React, {useState} from 'react';
import './ProfileDetails.scss';
import {ProfileInfo} from "../../../interfaces";
import {IoImageOutline, IoSaveOutline} from 'react-icons/io5';
import {useSelector, connect} from 'react-redux';
import {detailsValidationSchema} from "../../../utils/validation";
import {handleMobileDetection} from "../../../utils";
import ProfileNav from '../../../components/ProfileNav/ProfileNav';
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import ProfileSubmit from "../../../components/ProfileSubmit";

function ProfileDetails(props: any) {

    const [fieldError, setFieldError] = useState<ProfileInfo | null>();
    const [isFileError, setFileUploadError] = useState<boolean>();
    const [isSaved, setSaved] = useState<boolean>();

    const validationSchema = detailsValidationSchema();

    const profileDetails = useSelector((state: {p_info: ProfileInfo}) => state.p_info);

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const allowedFileTypes = ['image/png', 'image/jpeg'];

        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        if (!allowedFileTypes.includes(file.type)) {
            return setFileUploadError(true);
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setFileUploadError(false);

            props.dispatch({type: 'EditProfileImage', payload: {imgBlob: reader.result}});
        };

        reader.onerror = (err) => {
            console.log('Error:', err);
        }
    }

    const handleProfileDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: 'EditProfileDetails', payload: e});
    }

    const handleValidateProfileDetails = (): boolean => {
        const {error} = validationSchema.validate(profileDetails, {abortEarly: false});

        if (error) {
            const newFieldErrors: any = {};

            error.details.forEach((err) => {
                const fieldName = err.path[0];
                const errorMessage = err.message;

                newFieldErrors[fieldName] = errorMessage;
            });

            setFieldError(newFieldErrors);
            return false;
        } else {
            setFieldError(null);
            return true;
        }
    };

    const handleSubmitProfileDetails = () => {
        let fieldsAreValid = handleValidateProfileDetails();

        if (fieldsAreValid) {
            setSaved(true);
        }
    };

    const handleCloseSubmitAlert = () => {
        setSaved(false);
    }

    const isMobile = handleMobileDetection();

    return (
        <div className="main-container-details">
            <ProfileNav />
            {isSaved &&
                <ProfileSubmit
                    message={'Your changes have been successfully changed!'}
                    open={isSaved}
                    icon={<IoSaveOutline />}
                    handleCloseSubmitAlert={handleCloseSubmitAlert}
                />
            }
            <div className="container-md mt-4 layout">
                <div className="row gap-4">
                    {!isMobile &&
                        <div className="col-md-5 bg-white rounded-3">
                            <ProfileSummary mock={true} />
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
                            <h1>Profile picture*</h1>
                            <div
                                style={{border: fieldError?.profile_img ? '1px solid red' : 'none'}}
                                className="upload"
                            >
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
                            <p id={isFileError ? 'error' : ''}>
                                Image must be below 1024x1024px.
                                Use PNG or JPG format
                            </p>
                        </div>
                        <div className="mt-3 rounded-3 p-3 profile-details">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <label>First Name*</label>
                                {fieldError &&
                                    <h1 id="error">
                                        {fieldError.first_name}
                                    </h1>
                                }
                                <input
                                    placeholder="e.g John"
                                    name="first_name"
                                    value={profileDetails.first_name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleProfileDetailsChange(e)
                                    }
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <label>Last Name*</label>
                                {fieldError &&
                                    <h1 id="error">
                                        {fieldError.last_name}
                                    </h1>
                                }
                                <input
                                    placeholder="e.g Appleseed"
                                    name="last_name"
                                    value={profileDetails.last_name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleProfileDetailsChange(e)
                                    }
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <label>Email*</label>
                                {fieldError &&
                                    <h1 id="error">
                                        {fieldError.email}
                                    </h1>
                                }
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
                            <button id="enabled" onClick={handleSubmitProfileDetails}>
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