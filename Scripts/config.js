// فك التشفير باستخدام js-base64
const encryptedUrl = "aHR0cHM6Ly9sbnh5anRwbnZvd2JwdGJvbnpodC5zdXBhYmFzZS5jbw==";
const encryptedKey = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbVZ0WVdsc0lqb2lNREF3TWpVd05ETTJPVGswTWprNU5qRTJOamMxSWl3aWFXRjBJam94TmpReU9UZ3dOell3ZlEuekp0d2IxNEZRdlJyT01sc1ZxelJSZUZTd3VKNjZIWjRZX1RxMER2bTVJcw==";

const SUPABASE_URL = Base64.decode(encryptedUrl);
const SUPABASE_ANON_KEY = Base64.decode(encryptedKey);
