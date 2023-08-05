export const handleCapitalizeFirstLetter = (firstName: string, lastName: string): string => {
    const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

    return `${capitalize(firstName)} ${capitalize(lastName)}`;
}