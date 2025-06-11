export const kelvinToCelsius = kelvin => +(kelvin - 273.15).toFixed(1);

export const capitalizeFirstLetters = (texts) => {
    return texts.replace(/\b\w/g, c => c.toUpperCase());
}