    const COOKIE_KEY = 'pharmalire_cookies_v2';
    const cookieBanner = document.getElementById('cookieBanner');
    const openChatBtn = document.getElementById('openChatBtn');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatBox = document.getElementById('chatBox');

    
    function clearCookiesOnLoad() {
        localStorage.removeItem(COOKIE_KEY);
        console.log("Cookies u fshinë automatikisht në load");
    }
    
    function checkCookieBanner() {
        clearCookiesOnLoad();
        
        setTimeout(() => {
            cookieBanner.style.display = 'flex';
        }, 500);
        
        openChatBtn.style.display = 'none';
    }

    function applyCookiePreferences(prefs) {
        console.log('Applying cookie preferences for current session:', prefs);
    }

    function savePreferences(prefs) {
        localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
        cookieBanner.style.display = 'none';
        applyCookiePreferences(prefs);
        
        if(prefs.accepted) {
            openChatBtn.style.display = 'inline-block';
        }
        
    }

    function handleAcceptAllCookies() {
        savePreferences({
            accepted: true,
            analytics: true,
            marketing: true,
            preferences: true,
            date: new Date().toISOString()
        });
    }

    function handleOnlyNecessary() {
        savePreferences({
            accepted: true,
            analytics: false,
            marketing: false,
            preferences: false,
            date: new Date().toISOString()
        });
    }

    function handleSaveCookieSettings() {
        const analytics = document.getElementById('analyticsCookies').checked;
        const marketing = document.getElementById('marketingCookies').checked;
        const preferences = document.getElementById('preferenceCookies').checked;
        
        savePreferences({
            accepted: true,
            analytics,
            marketing,
            preferences,
            date: new Date().toISOString()
        });
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('cookieSettingsModal'));
        if (modal) {
            modal.hide();
        }
    }

    function handleSearch() {
        const q = document.getElementById('bigSearchInput').value.trim();
        if(!q) {
            alert('Shkruaj emrin e barnës.');
            return;
        }
         window.location.href = "krahasimi.html?query=" + encodeURIComponent(q);
    }

    function openChat() {
        chatBox.style.display = 'block';
        openChatBtn.style.display = 'none';
    }

    function closeChat() {
        chatBox.style.display = 'none';
        openChatBtn.style.display = 'inline-block';
    }

    document.addEventListener('DOMContentLoaded', function(){
        console.log("Page loaded - cookies will be cleared automatically");
        
        const cookieModal = document.getElementById('cookieSettingsModal');
        if(cookieModal){
            cookieModal.addEventListener('show.bs.modal', function(){
                const saved = JSON.parse(localStorage.getItem(COOKIE_KEY) || '{}');
                document.getElementById('analyticsCookies').checked = saved.analytics || false;
                document.getElementById('marketingCookies').checked = saved.marketing || false;
                document.getElementById('preferenceCookies').checked = saved.preferences || false;
            });
        }

        document.getElementById('bigSearchBtn').onclick = handleSearch;
        document.getElementById('acceptAllCookies').onclick = handleAcceptAllCookies;
        document.getElementById('onlyNecessary').onclick = handleOnlyNecessary;
        document.getElementById('saveCookieSettings').onclick = handleSaveCookieSettings;
        openChatBtn.onclick = openChat;
        closeChatBtn.onclick = closeChat;

        checkCookieBanner();
    });
