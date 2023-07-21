import React from 'react';
import './ProfileLinks.scss';
import Illustration from '../../../components/assets/illustration-empty.svg';
import ProfileNav from '../../../components/ProfileNav/ProfileNav';

function ProfileLinks() {
    return (
        <div className="main-container-links">
            <ProfileNav />
            <div className="container-md mt-4 layout">
                <div className="row gap-4">
                    <div className="col-md-5 bg-white rounded-3">

                    </div>
                    <div className="col rounded-3 bg-white">
                        <div className="introduction p-1">
                            <h1>Customize your links</h1>
                            <p>
                                Add/edit/remove links below and then
                                share all your profiles with the world!
                            </p>
                            <button className="w-100 mt-4">
                                + Add new link
                            </button>
                        </div>
                        <div className="d-flex flex-column align-items-center illustration">
                            <img
                                src={Illustration}
                                alt="illustration-empty"
                            />
                            <h1>Let's get you started</h1>
                            <p className="w-75">
                                Use the "Add new link" button to get started. Once you have more
                                than one link, you can reorder and edit them. We're here to help
                                you share your profiles with everyone!
                            </p>
                        </div>
                        <div className="d-flex justify-content-end align-items-center save-link p-0">
                            <button id="disabled">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLinks;