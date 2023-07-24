import React, {useState} from 'react';
import './ProfileLinks.scss';
import Select from 'react-select';
import Illustration from '../../../components/assets/illustration-empty.svg';
import {ProfileLink, SelectItem} from "../../../interfaces";
import {useSelector, connect} from 'react-redux';
import {selectOptions, selectStyles} from "../../../utils/select";
import {LiaGripLinesSolid} from 'react-icons/lia';
import {HiOutlineLink} from 'react-icons/hi';
import ProfileNav from '../../../components/ProfileNav/ProfileNav';

function ProfileLinks(props: any) {

    const [link, setNewLink] = useState<ProfileLink>({
        id: 1,
        link: '',
        platform: ''
    });

    const profileLinks = useSelector((state: {links: ProfileLink[]}) => state.links);

    const handleAddNewProfileLink = () => {
        props.dispatch({type: 'AddNewProfileLink', payload: {...link, id: link.id++}});
    }

    const handleProfileLinkChange = (id: number, profileChange: string, selector: string) => {
        props.dispatch({type: 'EditProfileLink', payload: {targetLink: id, value: profileChange, property: selector}});
    }

    const handleRemoveProfileLink = (id: number) => {
        props.dispatch({type: 'RemoveProfileLink', payload: {targetLink: id}});
    }

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
                            <button className="w-100 mt-4" onClick={handleAddNewProfileLink}>
                                + Add new link
                            </button>
                        </div>
                        {profileLinks.length ? profileLinks.map((link: ProfileLink) => {
                                return (
                                    <div className="d-flex flex-column mt-4 rounded-3 links" key={link.id}>
                                        <div className="w-100 d-flex justify-content-between mb-2">
                                            <h1>
                                                <LiaGripLinesSolid id="link-icon" />
                                                Link #{link.id}
                                            </h1>
                                            <h1 id="remove" onClick={() => handleRemoveProfileLink(link.id)}>
                                                Remove
                                            </h1>
                                        </div>
                                        <label>Platform</label>
                                        <Select
                                            isSearchable={false}
                                            className="mb-2"
                                            styles={selectStyles}
                                            value={selectOptions.find((item: SelectItem) =>
                                                item.value === link.platform)
                                            }
                                            options={selectOptions}
                                            onChange={(e: any) =>
                                                handleProfileLinkChange(link.id, e.value, 'platform')
                                            }
                                        />
                                        <div className="d-flex flex-column position-relative">
                                            <label>Link</label>
                                            <input
                                                name="link"
                                                id="link-input"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    handleProfileLinkChange(link.id, e.target.value, 'link')
                                                }
                                            />
                                            <HiOutlineLink
                                                id="input-icon"
                                            />
                                        </div>
                                    </div>
                                );
                            })
                            :
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
                        }
                        <div className="d-flex justify-content-end align-items-center save-link p-0">
                            <button
                                id={profileLinks.length ? 'enabled' : 'disabled'}
                                disabled={profileLinks.length === 0}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(ProfileLinks);