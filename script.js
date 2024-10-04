console.log('WeChat QR code script loaded');

document.addEventListener('DOMContentLoaded', function() {
    var wechatIcon = document.getElementById('wechat-icon');
    var wechatQRContainer = document.getElementById('wechat-qr-container');
    var closeWechatQR = document.getElementById('close-wechat-qr');
    var wechatQROverlay = document.getElementById('wechat-qr-overlay');

    if (wechatIcon && wechatQRContainer && closeWechatQR && wechatQROverlay) {
        wechatIcon.addEventListener('click', function(e) {
            e.preventDefault();
            wechatQRContainer.style.display = 'block';
        });

        function closeQR() {
            wechatQRContainer.style.display = 'none';
        }

        closeWechatQR.addEventListener('click', closeQR);
        wechatQROverlay.addEventListener('click', closeQR);
    } else {
        console.error('Some WeChat elements not found');
    }
});
