// إنشاء متغير يحتوي على محتوى HTML
var htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Win</title>
    <link href="style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tonweb/dist/tonweb.min.js"></script>
    <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://sad.adsgram.ai/js/sad.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="top-bar">
            <div class="user-name">
                <img alt="User Image" class="userrr-imagee" src="https://i.ibb.co/9G46ZFT/User.jpg">
                <span id="username">Jo</span>
            </div>
            <div class="user-Balance">
                <img alt="Balance Icon" class="balance-icon" src="https://image-six-tawny.vercel.app/m.png">
                <span id="balance">0</span>
            </div>
            <div id="ton-connect"></div>
        </div>
        <header class="header">
            <h1>Win a weekly reward of $8,000 worth of TON coin!</h1>
            <p>Your chance to win a grand prize! 5 winners are selected randomly every week. Entry fee is only 0.5 TON.</p>
        </header>
        <section class="additional-section">
            <h2>Participation Details:</h2>
            <div class="details">
                <p>Status: <strong id="participationStatus">Not Participated</strong></p>
            </div>
            <p id="Statustxtprogress">You have no chances to win!</p>
        </section>
        <section class="payment-section" id="paymentSection">
            <h2>How to Participate:</h2>
            <p>Send <strong>0.5 TON</strong> via the <strong>TON Network</strong> to confirm your subscription.</p>
            <button id="payNow">Join now for only 0.5 TON</button>
        </section>
        <section class="winners-section">
            <h2>Top 5 Winners</h2>
            <div class="winners">
                <div class="winner">
                    <span class="position">1st Place</span>
                    <span class="reward">2,000$</span>
                </div>
                <div class="winner">
                    <span class="position">2nd Place</span>
                    <span class="reward">1,800$</span>
                </div>
                <div class="winner">
                    <span class="position">3rd Place</span>
                    <span class="reward">1,500$</span>
                </div>
                <div class="winner">
                    <span class="position">4th Place</span>
                    <span class="reward">1,200$</span>
                </div>
                <div class="winner">
                    <span class="position">5th Place</span>
                    <span class="reward">1,000$</span>
                </div>
            </div>
        </section>
        <section class="progress-section">
            <h2>Current Participants:</h2>
            <p id="participantCount">0 Participants</p>
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>
            <p id="participant">limit. The minimum number to start the draw is 10,000 contestants</p>
        </section>
        <section class="vip-section" id="vipSection"></section>
        <section class="terms-section">
            <h2>Terms and Conditions:</h2>
            <ul>
                <li>The participation fee is non-refundable.</li>
                <li>Winners will be chosen randomly, and 5 winners will be selected every week.</li>
                <li>If a participant does not win, they will receive 100,000 $SAW coins as a consolation prize.</li>
                <li>Participants will be contacted through their <strong>Telegram username</strong>.</li>
                <li>Each account can participate with 0.5 TON once per week.</li>
                <li>Incorrect or invalid payments will not be eligible.</li>
                <li>A minimum of 10,000 participants is required for the draw to take place.</li>
            </ul>
        </section>
        <footer class="footer">
            <p>© 2024 All rights reserved to <strong>SawToken</strong>.</p>
        </footer>
    </div>
    <script src="competition.js" type="module"></script>
    <script src="api.js" type="module"></script>
</body>
</html>
`;

// تعيين المحتوى إلى الصفحة
document.documentElement.innerHTML = htmlContent;
