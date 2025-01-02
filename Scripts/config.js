// config.js
function decode(encoded) {
    return atob(encoded);
}

const encryptedUrlParts = [
    "aHR0cHM6Ly9sbnh5",
    "anRwbnZvd2JwdGJv",
    "bnpodC5zdXBhYmFz",
    "ZS5jbw=="
];

const encryptedKeyParts = [
    "ZXlKaGJHY2lPaUpJ",
    "VXpJMU5pSXNJbVZ0",
    "WVdsc0lqb2lNREF3",
    "TWpVd05ETTJPVGsw",
    "TWprNU5qRTJOamMx",
    "SWl3aWFXRjBJam94",
    "TmpReU9UZ3dOell3",
    "ZlEuekp0d2IxNEZR",
    "dlJyT01sc1ZxelJS",
    "ZUZTd3VKNjZIWjRZ",
    "X1RxMER2bTVJcw=="
];

export const SUPABASE_URL = decode(encryptedUrlParts.join(""));
export const SUPABASE_ANON_KEY = decode(encryptedKeyParts.join(""));
