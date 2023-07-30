export interface ProfileLink {
    id: number,
    platform: string,
    link: string
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