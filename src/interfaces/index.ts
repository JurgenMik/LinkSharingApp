export interface ProfileLink {
    id: number,
    platform: string,
    link: string
}

export interface ProfileInfo {
    profile_img: string,
    first_name: string,
    last_name: string,
    email: string
}

export interface SelectItem {
    value: string,
    label: any
    background: string
}

export interface ErrorMessage {
    link: string,
    platform: string
}