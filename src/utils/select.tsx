import {SelectItem} from "../interfaces";
import {PiGithubLogoFill, PiYoutubeLogoFill, PiLinkedinLogoFill} from 'react-icons/pi';
import {SiFrontendmentor, SiCodewars} from 'react-icons/si';
import {FaFacebook, FaTwitch} from 'react-icons/fa';

export const selectOptions: SelectItem[] = [
    {
        value: 'Github',
        label: (
            <>
                <PiGithubLogoFill />
                Github
            </>
        )
    },
    {
        value: 'Youtube',
        label: (
            <>
                <PiYoutubeLogoFill />
                Youtube
            </>
        )
    },
    {
        value: 'LinkedIn',
        label: (
            <>
                <PiLinkedinLogoFill />
                LinkedIn
            </>
        )
    },
    {
        value: 'Frontend Mentor',
        label: (
            <>
                <SiFrontendmentor />
                Frontend Mentor
            </>
        )
    },
    {
        value: 'Facebook',
        label: (
            <>
                <FaFacebook />
                Facebook
            </>
        )
    },
    {
        value: 'Twitch',
        label: (
            <>
                <FaTwitch />
                Twitch
            </>
        )
    },
    {
        value: 'Codewars',
        label: (
            <>
                <SiCodewars />
                Codewars
            </>
        )
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