
# 🗓️ 簡潔行事曆（日/週/月）

這是一個可離線使用、可提醒、支援日/週/月檢視的行事曆網頁。

## 🚀 快速上線（GitHub Pages）

1. 到 GitHub 建立一個公開 Repository，例如：`Calender`
2. 上傳以下檔案：
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `README.md`
3. 上傳後到 **Settings → Pages**
   - Source：選「Deploy from a branch」
   - Branch：`main`
   - Folder：`/(root)`
   - 然後按 **Save**
4. 幾分鐘後，你的網站會出現在：  
   👉 `https://你的帳號.github.io/Calender`

## ✨ 功能
- 日 / 週 / 月 檢視切換
- 點擊格子新增行程
- 拖曳調整 / 禁止重疊
- 分類顏色自訂
- 自動儲存（LocalStorage）
- 提醒功能（HTTPS 網站會顯示系統通知）
- 支援離線使用（PWA 模式）
