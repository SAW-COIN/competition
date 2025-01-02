// config.js
function decode(encoded) {
    return atob(encoded);
}

const encryptedUrl = "aHR0cHM6Ly9sbnh5anRwbnZvd2JwdGJvbnpodC5zdXBhYmFzZS5jbw==";
const encryptedKey = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbVZ0WVdsc0lqb2lNREF3TWpVd05ETTJPVGswTWprNU5qRTJOamMxSWl3aWFXRjBJam94TmpReU9UZ3dOell3ZlEuekp0d2IxNEZRdlJyT01sc1ZxelJSZUZTd3VKNjZIWjRZX1RxMER2bTVJcw==";

export const SUPABASE_URL = decode(encryptedUrl);
export const SUPABASE_ANON_KEY = decode(encryptedKey);
