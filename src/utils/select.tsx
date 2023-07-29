import {SelectItem} from "../interfaces";
import {PiGithubLogoFill, PiYoutubeLogoFill, PiLinkedinLogoFill} from 'react-icons/pi';
import {SiFrontendmentor, SiCodewars} from 'react-icons/si';
import {FaFacebook, FaTwitch} from 'react-icons/fa';

export const selectOptions: SelectItem[] = [
    {
        value: 'Github',
        label: (
            <>
                <PiGithubLogoFill id="logo" />
                Github
            </>
        ),
        background: '#1A1A1A'
    },
    {
        value: 'Youtube',
        label: (
            <>
                <PiYoutubeLogoFill id="logo" />
                Youtube
            </>
        ),
        background: '#EE3939'
    },
    {
        value: 'LinkedIn',
        label: (
            <>
                <PiLinkedinLogoFill id="logo" />
                LinkedIn
            </>
        ),
        background: '#2D68FF'
    },
    {
        value: 'Frontend Mentor',
        label: (
            <>
                <SiFrontendmentor id="logo" />
                Frontend Mentor
            </>
        ),
        background: '#e1dede'
    },
    {
        value: 'Facebook',
        label: (
            <>
                <FaFacebook id="logo" />
                Facebook
            </>
        ),
        background: '#2442AC'
    },
    {
        value: 'Twitch',
        label: (
            <>
                <FaTwitch id="logo" />
                Twitch
            </>
        ),
        background: '#EE3FC8'
    },
    {
        value: 'Codewars',
        label: (
            <>
                <SiCodewars id="logo" />
                Codewars
            </>
        ),
        background: '#8A1A50'
    }
];

export const selectStyles = {
    control: (provided: any, state: {isFocused: boolean}) => ({
        ...provided,
        borderColor: state.isFocused ? 'hsl(252, 100%, 62%)' : 'hsl(0, 6%, 93%)',
        borderRadius: '0.5rem',
        boxShadow: state.isFocused ? '0 0 5px hsl(252, 100%, 62%)' : 'none',
        padding: '0.15rem'
    }),
    option: (provided: any, state: {isSelected: boolean}) => ({
        ...provided,
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: state.isSelected ? 'hsl(252, 100%, 62%)' : 'hsl(0, 0%, 45%)',
        backgroundColor: 'none',
        cursor: 'pointer',
        borderBottom: '1px solid hsl(0, 6%, 93%)'
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: 'hsl(0, 0%, 45%)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    }),
    dropdownIndicator: (provided: any, state: {isFocused: boolean}) => ({
        ...provided,
        color: 'hsl(252, 100%, 62%)',
        transform: state.isFocused && 'rotate(180deg)'
    })
};