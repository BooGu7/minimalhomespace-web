# Mẫu Blog Stablo - Next.js & Sanity CMS

Stablo là mẫu blog JAMStack được xây dựng bằng Next.js, Tailwind CSS & Sanity CMS

## [Cài đặt ↓](#cài đặt)

## Tính năng

<!-- prettier-ignore -->
| Tính năng | Phiên bản miễn phí | Phiên bản chuyên nghiệp |
| --- | ------ | --- |
| Next.js v13 | ✅ | ✅ |
| /app Directory | ✅ | ✅ |
| Tailwind CSS | ✅ | ✅ |
| Sanity CMS (v3) | ✅ | ✅ |
| Xác thực theo yêu cầu | ❌ | ✅ |
| Tự động cập nhật bài đăng mới | Theo thời gian | ✅ |
| Phản hồi trên thiết bị di động | ✅ | ✅ |
| Chế độ tối & sáng | ✅ | ✅ |
| Trang liên hệ đang hoạt động | ✅ | ✅ |
| Lưu trữ (Phân trang) | ✅ | ✅ |
| Trang danh mục | ❌ | ✅ |
| Trang tác giả | ❌ | ✅ |
| Trang tìm kiếm | ❌ | ✅ |
| Trang chủ - Mặc định | ✅ | ✅ |
| Trang chủ - Thay thế | ❌ | ✅ |
| Trang chủ - Tối giản | ❌ | ✅ |
| Trang chủ - Phong cách sống | ❌ | ✅ |
| Trang chủ - Hai cột | ❌ | ✅ |
| Bài đăng trên blog - Mặc định | ✅ | ✅ |
| Bài đăng trên blog - Tối giản | ❌ | ✅ |
| Bài đăng trên blog - Phong cách sống | ❌ | ✅ |
| Bài đăng trên blog - có thanh bên | ❌ | ✅ |
| Hỗ trợ 6 tháng| ❌ | ✅ |
| Cập nhật miễn phí | ✅ | ✅ |
| Giấy phép | GPL-2.0 | Thương mại |

###### Nhấp vào nút ở trên để sao chép và triển khai bằng một cú nhấp chuột cho mẫu này. Đọc hướng dẫn [bắt đầu nhanh](#quick-start) bên dưới.

#### Bản xem trước mẫu

[![Bản xem trước giao diện Next.js](https://user-images.githubusercontent.com/1884712/169838344-e32b7426-621a-45a4-aba8-afedf3377e1f.jpeg)](https://web3templates.com/preview/stablo)

#### Bản xem trước CMS Sanity

![Bản xem trước CMS Sanity Backend](https://user-images.githubusercontent.com/1884712/170030678-c6e32d47-0b92-42b7-ac2d-f3cf800c0969.png)

# Cài đặt

## Bước 1: Triển khai lên Vercel

Sử dụng Nút Triển khai bên dưới. Nó sẽ cho phép bạn triển khai trình khởi động bằng Vercel cũng như kết nối nó với Sanity Studio của bạn bằng Sanity Vercel Integration.

[![Triển khai bằng Vercel](https://vercel.com/button)](https://vercel.com/new/web3templates/clone?demo-title=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&demo-description=A%20minimal%20blog%20website%20template%20built%20with%20Next.js%2C%20TailwindCSS%20%26%20Sanity%20CMS%0A&demo-url=https%3A%2F%2Fstablo-template.vercel.app%2F&demo-image=%2F%2Fimages.ctfas sets.net%2Fe5382hct74si%2F6p72KDrdJ8SjyvOBrgRbnr%2F0760db43f2cb08504a2f67601e74d986%2FCleanShot_2022-07-15_at_16.54.17.png&project-name=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&repository-name=stablo-blog&repository-url=https%3A%2F%2Fgithub.com%2Fweb3templates%2Fstablo&from=templates&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

** triển khai ở trên sẽ tự động cấu hình những mục sau:**

- Tạo Repository mới trong Github
- Tạo Sanity Project
- Cài đặt Sanity Integration trong Vercel
- Thêm các thiết lập CORS & API cần thiết vào dự án
- Triển khai Frontend vào Vercel

Ngoài ra, bạn có thể triển khai vào các dịch vụ khác như Netlify hoặc Cloudflare Pages hoặc AWS Amplify.

[![Triển khai vào Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/web3templates/stablo/)

## Bước 2: Thiết lập dự án cục bộ.

Sau khi triển khai trang web, trang web sẽ trông như trống hoặc không được cấu hình đúng cách. Điều này là bình thường. Chúng ta cần thực hiện thêm một vài bước nữa để làm cho nó giống như trong bản demo.

Đầu tiên, hãy sao chép kho lưu trữ github vercel đã tạo vào máy cục bộ của bạn. Sử dụng cấu trúc lệnh sau. Đảm bảo terminal nằm đúng thư mục trước khi thực hiện lệnh này.

```bash
git clone https://github.com/<usename>/<repo>.git your-project-name
```

Sau khi clone, hãy chạy lệnh sau từ thư mục gốc của dự án. Lệnh này sẽ liên kết dự án vercel của bạn.

```bash
npx vercel link
```

Bây giờ, hãy chạy lệnh sau để kéo các biến `.env` vào hệ thống cục bộ của bạn.

```bash
npx
```
