# **A. GIT**

## # 1. Khởi tạo (Initialize):

    > git init

- Ý nghĩa: khởi tạo thư mục được quản lý bởi GIT

## 2. Cấu hình (config):

- _git config user.name "name"
  git config user.email "email"_\*

\*Ý nghĩa: đặt cấu hình cho 1 repo có tên và email

    _git config -- global user.name "name"
    git config --global user.email "email"_

\*Ý nghĩa: flag **--global** là tạo name và email cho toàn bộ repo trên máy tính (default là --global)

## 3. Thêm file vào vùng staging:

    Thêm 1 file: *git add file-name*
    Thêm tất cả các file: *git add .*

## 4. Remove file khỏi vùng staging:

    Remove 1 file: *git restore --stagged file-name* hoặc *git rm --cached file-name*

## 5. Kiểm tra trạng thái các file:

- _git status_

  - Các file có chữ **A** (index added) có nghĩa là đã được added vào vùng STAGING
  - Các file có chữ **U** (Untracked file) có nghĩa là vẫn còn ở working directory, chưa thêm vào vùng nào cả.
  - Các file có chữ **M** (Untracked file) có nghĩa là file đó đã có chỉnh sửa nhưng vẫn còn ở working directory, chưa thêm vào vùng nào cả.

## 6. Commit files:

    *git commit -m"message"* --> Ý nghĩa: -m có nghĩa là message của cái commit đó.
    *git log * --> Ý nghĩa: Xem lại lịch sử tất cả các commit.

## 6. Commit convention:

- Convention: Nghĩa là quy tắc đặt tên trong một project
- Ý nghĩa: giúp cả team làm việc với nhau theo một quy tắc nhất quán. Giúp code được gọn gàng, sạch đẹp, dễ đọc sau này
- Cú pháp: <type> <short_description> (tối đa 50 ký tự)
- **Feat:** features mới
- **Fix**: sửa lỗi 1 file test trước đó (sửa nhiều dòng)
- **Chore**: sửa linh tinh như chính tả, xóa file k dùng,...

==================================================================================================================================================
**# B. JAVASCRIPT**

# 1. Giới tiệu:

- Công dụng: giúp website hoạt động

# 2. Cách chạy file javascript:

    *node filename.js*

# 3. Cách khai báo biến:

    *var tenbien = <giatri>*
    *let tenbien = <giatri>*
    *constant tenbien = <giatri>*

- Sự khác nhau var & let:
  **var** khai báo biến toàn cục. Var gán lại biến được.
  **let** phạm vi trong một hàm (trong dấu ngoặc { }). Let không khai báo, k gán lại được

- Nên dùng **let** để dễ kiểm soát các biến
- **Constant**: khai báo các giá trị không thay đổi. Gán lại sẽ báo lỗi

# 4. Kiểu dữ liệu (datatype)

- Có 3 kiểu phổ biến: **number**, **string**, **boolean**
- Ngoài ra có các kiểu khác: Object, Undefined, Bigint, Symbol và Null

# 5. Toán tử so sánh (Comparison operation)

- Hơn kém: > , < 
- So sánh bằng: ==, === , !=, !==, >=, <= 
- Ý nghĩa: Dùng để so sánh giá trị giữa 2 biến. Kết quả trả về sẽ là **Boolean**

//=== : so sánh value + kiểu dữ liệu xem có bằng nhau k
//== : chỉ so sánh value thôi

- **Unary Operator:** Toán tử 1 ngôi
    i++ : i = i+1
    i-- : i = i-1
- **Ý nghĩa**: dùng để tăng hoặc giảm giá trị
# 6. Conditional:
- Cú pháp
    if(dieukien) {//codes} -> Nếu đk đúng sẽ chạy đoạn codes. Sai thì k làm gì cả