$(document).ready(function () {
    setTimeout(() => {
        let agreeButton = $('#person_agree_terms');
        if (agreeButton.length > 0) {
            agreeButton.click();
            console.log("已自動點擊同意條款按鈕");
        } else {
            console.log("未找到按鈕");
        }
    }, 500); // 等待 2 秒確保頁面載入
});
