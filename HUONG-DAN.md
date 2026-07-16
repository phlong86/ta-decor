# Website TA-Decor — Hướng dẫn đưa lên mạng (miễn phí)

Trang web tĩnh, chạy trực tiếp trên trình duyệt — **không cần cài đặt, không cần build**.
Chỉ cần upload là chạy.

## Các file trong gói
- `index.html` — trang chủ (mở file này là ra web).
- `Header.jsx, Hero.jsx, Sections.jsx, Sections2.jsx, Sections3.jsx` — các phần giao diện.
- `data.js` — **toàn bộ nội dung & thông tin liên hệ** (sửa ở đây, xem mục dưới).
- `netlify.toml` — cấu hình cho Netlify.

---

## Bước 1 — Đưa code lên GitHub
1. Vào https://github.com → **New repository** → đặt tên `ta-decor` → **Create**.
2. Trong repo mới, bấm dòng **"uploading an existing file"**.
3. Kéo-thả TẤT CẢ file trong gói này vào → bấm **Commit changes**.

## Bước 2 — Đưa web lên mạng bằng Netlify (miễn phí + có domain)
1. Vào https://netlify.com → đăng nhập bằng GitHub.
2. **Add new site → Import an existing project → GitHub →** chọn repo `ta-decor`.
3. Phần build để trống (**không cần lệnh build**), Publish directory để `/` → **Deploy**.
4. Sau ~30 giây web chạy tại địa chỉ dạng `random-name.netlify.app`.
   Vào **Site settings → Change site name** để đổi thành `ta-decor.netlify.app` (tùy ý).
5. (Tùy chọn) Gắn tên miền riêng `tadecor.vn`: **Domain settings → Add domain**.

## Bước 3 — Nhận dữ liệu khi khách "Gửi yêu cầu tư vấn"
Form đã cấu hình sẵn theo **Netlify Forms** (miễn phí 100 lượt/tháng). Sau khi deploy:
- Khách điền form → dữ liệu tự về **Netlify → tab Forms → tu-van**.
- Bật email báo về: **Forms → Settings & notifications → Add notification → Email**,
  nhập email của bạn. Mỗi lần có khách gửi, bạn nhận mail ngay.
- Không cần viết thêm code hay server nào cả.

---

## Sửa nội dung & hình ảnh — mở file `data.js`
Toàn bộ chữ, dịch vụ, dự án, đánh giá, thông tin liên hệ nằm trong `data.js`.
Mở bằng bất kỳ trình soạn thảo nào (kể cả sửa trực tiếp trên GitHub).

**Thông tin liên hệ** (đầu file):
```js
company: {
  hotline: '0846 316 316',
  email: 'lienhe@tadecor.vn',   // ← thay email thật
  address: 'TP. Hồ Chí Minh',   // ← thay địa chỉ thật
  ...
}
```

**Thêm hình cho dự án** — tìm mục `projects` và thêm đường dẫn ảnh:
```js
{ title: 'Showroom Ô tô Minh Phát', category: 'Showroom',
  location: 'Quận 7, TP.HCM', year: 2024,
  image: 'anh/showroom.jpg' },   // ← thêm dòng này
```
Cách để ảnh: tạo thư mục `anh/` trong repo, upload ảnh lên đó, rồi ghi
`image: 'anh/ten-file.jpg'`. Ảnh hero/giới thiệu cũng thay tương tự trong `Hero.jsx`
và `Sections.jsx` (chỗ có ô placeholder).

> Mẹo: nén ảnh (tinypng.com) và dùng định dạng `.webp` để web tải nhanh hơn.

---

## Lưu ý kỹ thuật
Đây là bản dựng **HTML + React chạy trên trình duyệt** (không phải Next.js production).
Ưu điểm: upload là chạy, ai cũng sửa được, miễn phí hoàn toàn. Nếu sau này cần bản
Next.js/TypeScript đầy đủ (SEO nâng cao, tốc độ tối ưu hơn), có thể dựng lại từ bộ
design system này.
