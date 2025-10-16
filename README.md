
# 🗓️ 行事曆 Pro（日/週/月）

精簡、穩定、可離線使用的行事曆。支援：日/週/月、就地編輯、拖曳、禁止重疊、提醒、自動儲存。

## 🚀 GitHub Pages 發佈
1. 建立（或進入）你的 Repo，例如 `Calender`
2. 上傳本資料夾的所有檔案到根目錄：`index.html`, `manifest.webmanifest`, `sw.js`, `README.md`
3. 進入 **Settings → Pages**：
   - Source：Deploy from a branch
   - Branch：main
   - Folder：/(root)
   - Save
4. 之後網址會是 `https://<你的帳號>.github.io/Calender`

## 🔔 通知
- 在 HTTPS（或 localhost）上，使用系統通知
- 若非 HTTPS，會使用頁面提醒＋音效（無錯誤訊息）

## 💾 資料保存
- 使用 LocalStorage：`calendar.pro.all.v1`
- 任一操作（新增/編輯/拖曳/刪除）都會自動保存
