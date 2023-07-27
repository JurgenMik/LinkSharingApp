export interface ProfileLink {
    id: number,
    platform: string,
    link: string
}

export interface SelectItem {
    value: string,
    label: any
}

export interface ErrorMessage {
    link: string,
    platform: string
}