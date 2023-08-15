export const handleMobileDetection = () => {
    return window.innerWidth <= 395;
}

export const handleCapitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}