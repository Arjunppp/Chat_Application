

export const isAboveAge = (date) => {
    const birthYear = parseInt(date.slice(0, 4), 10);
    const currentYear = parseInt(new Date().toISOString().slice(0, 4), 10);
    const age = currentYear - birthYear;
    return age >= 18;



};




