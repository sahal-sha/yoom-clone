export function extractTime(dataString) {
    const date = new Date(dataString);
    let hours = date.getHours();  // Change from 'const' to 'let'
    const minutes = padZero(date.getMinutes());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = padZero(hours);
    return `${formattedHours}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit number with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}
