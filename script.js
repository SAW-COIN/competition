// استخدام Supabase مع import
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = "https://lnxyjtpnvowbptbonzht.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueHlqdHBudm93YnB0Ym9uemh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwMjg2ODksImV4cCI6MjA0MzYwNDY4OX0.Aznwb14FQvRrOMlsVqzLReFSwuJ66HZ4Y_Tq0Dvm5Is";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const paymentSection = document.getElementById("paymentSection");
const usernameElement = document.getElementById("username");
const balanceElement = document.getElementById("balance");
const statusElement = document.getElementById("participationStatus");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("participantCount");

// إنشاء عنصر الإشعار
const notification = document.createElement("div");
notification.className = "notification";
document.body.appendChild(notification);

// دالة عرض الإشعار
function showNotification(message, type = "error") {
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.className = "notification"; // إعادة الإشعار للوضع الافتراضي
    }, 3000);
}

// مساعد لتنسيق اسم المستخدم
function formatUsername(username) {
    const maxLength = 5;
    return username.length > maxLength ? username.slice(0, maxLength) + "..." : username;
}

// مساعد لتنسيق الرصيد
function formatBalance(balance) {
    if (balance >= 1_000_000_000_000) {
        return (balance / 1_000_000_000_000).toFixed(2) + "T";
    } else if (balance >= 1_000_000_000) {
        return (balance / 1_000_000_000).toFixed(2) + "B";
    } else if (balance >= 1_000_000) {
        return (balance / 1_000_000).toFixed(2) + "M";
    } else if (balance >= 1_000) {
        return (balance / 1_000).toFixed(2) + "K";
    }
    return balance.toString();
}

// جلب بيانات المستخدم من Telegram
async function fetchUserDataFromTelegram() {
    try {
        const telegramApp = window.Telegram.WebApp;
        telegramApp.ready();

        const userTelegramId = telegramApp.initDataUnsafe.user?.id;
        const userTelegramName = telegramApp.initDataUnsafe.user?.username || `user_${userTelegramId}`;

        if (!userTelegramId) {
            throw new Error("Failed to fetch Telegram user ID.");
        }

        // تحديث اسم المستخدم
        usernameElement.textContent = formatUsername(userTelegramName);

        // جلب رصيد المستخدم وحالة المشاركة من قاعدة البيانات
        await fetchUserBalance(userTelegramId);
        await updateProgressBar();
    } catch (error) {
        console.error("Error fetching Telegram data:", error);
        showNotification("Failed to fetch Telegram data.", "error");
    }
}


// تعديل دالة جلب رصيد المستخدم وحالة المشاركة
async function fetchUserBalance(userTelegramId) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("balance, is_participating")
            .eq("telegram_id", userTelegramId)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        if (data) {
            // تحديث الرصيد
            balanceElement.textContent = formatBalance(data.balance);

            // تحديث حالة المشاركة
            if (data.is_participating) {
                statusElement.textContent = "Participant";
                statusElement.style.color = "#2D83EC";

                // إخفاء قسم الدفع إذا كان المستخدم مشتركًا
                paymentSection.style.display = "none";
            } else {
                statusElement.textContent = "Not Participated";
                statusElement.style.color = "red";

                // عرض قسم الدفع إذا لم يكن المستخدم مشتركًا
                paymentSection.style.display = "block";
            }
        } else {
            balanceElement.textContent = "0";
            showNotification("No balance found for this user.", "error");
        }
    } catch (error) {
        console.error("Error fetching user balance:", error);
        balanceElement.textContent = "Error";
        showNotification("Failed to fetch user balance.", "error");
    }
}

// تحديث شريط التقدم
async function updateProgressBar() {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("is_participating", true);

        if (error) throw new Error(error.message);

        const participantCount = data.length;

        // تحديث النص
        progressText.textContent = `${participantCount} Participants`;

        // تحديث عرض شريط التقدم
        const progressPercentage = Math.min((participantCount / 5000) * 100, 100);
        progressBar.style.width = `${progressPercentage}%`;

        // إخطار عند اكتمال العدد
        if (participantCount >= 5000) {
            showNotification("The minimum participants have been reached!", "success");
        }
    } catch (error) {
        console.error("Error updating progress bar:", error);
        showNotification("Failed to update progress bar.", "error");
    }
}

// معرف البوت الخاص بك (يجب أن تحصل عليه من بوت فاذر)
const TELEGRAM_BOT_TOKEN = "7540338527:AAH4A_gOp_FTR3jRdtNa-QcfCCLRMIN0FDo";
const ADMIN_TELEGRAM_ID = 6793556284;

// دالة إرسال رسالة إلى الأدمن
async function notifyAdmin(userId, username) {
    const message = `User Participation Confirmed:
- ID: ${userId}
- Username: ${username}

This user has successfully joined the competition.`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
        chat_id: ADMIN_TELEGRAM_ID,
        text: message,
        parse_mode: "Markdown",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (!data.ok) {
            console.error("Error sending message to admin:", data.description);
        } else {
            console.log("Message sent to admin successfully.");
        }
    } catch (error) {
        console.error("Error notifying admin:", error);
    }
}

// تعديل دالة تسجيل المشاركة
async function registerParticipation() {
    const telegramApp = window.Telegram.WebApp;
    const telegramId = telegramApp.initDataUnsafe.user?.id;
    const username = telegramApp.initDataUnsafe.user?.username || `user_${telegramId}`;

    try {
        const { data, error } = await supabase
            .from("users")
            .update({ is_participating: true })
            .eq("telegram_id", telegramId);

        if (error) throw new Error(error.message);

        // تحديث الحالة
        statusElement.textContent = "Participant";
        statusElement.style.color = "#2D83EC";

        // تحديث شريط التقدم
        await updateProgressBar();

        // إخطار الأدمن
        await notifyAdmin(telegramId, username);

        showNotification("Participation confirmed successfully!", "success");
    } catch (error) {
        console.error("Error updating participation:", error);
        showNotification("Failed to register participation.", "error");
    }
}


window.Telegram.WebApp.setHeaderColor('#101010');
document.addEventListener("DOMContentLoaded", fetchUserDataFromTelegram);

// إعداد TonConnect
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://sawcoin.vercel.app/json/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});


async function connectToWallet() {
    try {
        // التحقق مما إذا كانت المحفظة مربوطة بالفعل
        const isConnected = tonConnectUI.wallet !== null;
        if (isConnected) {
            showNotification("Wallet is already connected.", "info");
            return;
        }

        // إذا لم تكن مربوطة، قم بمحاولة الربط
        const connectedWallet = await tonConnectUI.connectWallet();
        console.log(connectedWallet);
        showNotification("Wallet connected successfully", "success");
    } catch (error) {
        console.error("Error connecting wallet:", error);
        showNotification("Failed to connect wallet.", "error");
    }
}


tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/SAWCOIN_BOT/GAME'
};

async function makePayment() {
    try {
        const requiredAmount = '100000000'; 
        const walletAddress = 'UQBOBIEGLWuaMNLBy3HTaYU-F-3Py8q7o0kGw7S_2vLxRmqr';

        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 600, // صالح لمدة 10 دقائق
            messages: [
                {
                    address: walletAddress,
                    amount: requiredAmount,
                },
            ],
        };

        await tonConnectUI.sendTransaction(transaction);
        showNotification('The operation was completed successfully', 'success');
        await registerParticipation();
    } catch (error) {
        console.error('Error making payment:', error);
        showNotification(`Payment failed: ${error.message}`, 'error');
    }
}

// ربط الأزرار بالأحداث
document.getElementById("ton-connect").addEventListener("click", connectToWallet);
document.getElementById("payNow").addEventListener("click", makePayment);


