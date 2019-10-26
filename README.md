This is a demo. I want to become a good developer, but at the moment, i'm facing some problem... This is my dream... i hope it will come true !

git init: Khởi tạo git trong project đó.
git status: Thể hiện trạng thái có files mới để add hoặc files mới đc chỉnh 			sửa tiếp theo đó để commit
git add: Thêm file đó vào staging area (khu vực sau khi thêm)
git commit: Đóng gói lại và ghi chú thích là đã đc thêm vào git repository

git log: Hiện ra tất cả lịch sử đã commit.
git show + id: sẽ hiện ra file đó đã đc chỉnh sửa bao nhiêu dòng.
git diff: hiện ra sự thay đổi của những ở đang working directory (modified: tên_file)

working directory: tức ra khu vực mà file mới đc chỉnh sửa, chưa đc add vào 					staging area
staging area: là file đã đc add, nhưng chưa đc commit
git repository: khu vực đã commit file xong.

git checkout --fileName: bỏ nội dung mà file vừa mới đc thêm vào (đang ở 							modified)
git reset HEAD --fileName: một file mới nếu add vào có thể reset để  trở về 					trạng thái trc đó (từ staging xuống working directory)

git restore: Phục hồi lại trạng thái, từ staging xuống working directory 				kèm theo nội dung (gần giống như git reset HEAD ở trên, khi đã 				commit r thì k thể restore)

git checkout -b newBranch (branching): tiến hành tạo nhánh mới nếu, nhánh 				đó chưa tồn tại. node file cuối sẽ cùng trỏ vào 2 branch
git checkout branchName: Chuyển sang branch đc chỉ định đó để làm việc. 

git merge: A <---B 		git checkout A (chọn nhánh chính, gộp nhánh phụ vào 						nhánh chính)
	git checkout A
	git merge B 		master <---feature/dog

git branch -D branchName: Xóa nhánh	

git --soft 'SHA1 ID của commit trc đó' (lấy ở giao diện gitk): để quay lại commit của sha1 trc đó. file sau khi soft xong sẽ ở trạng thái staging

git --mixed 'SHA1 ID của commit trc đó': sẽ ở trạng thái working directory

git --hard 'SHA1 ID của commit trc đó': xóa hẳn những commit ở trên và quay 				lại SHA1 ID đc truyền vào.

git revert  'SHA1 ID của commit muốn commit lại': sẽ xóa tất cả các chỉnh sửa trc đó (green). Và sẽ tự tạo ra 1 node ở dạng working directory

git ignore(làm lơ, bỏ qua): viết tên file vào trong để bỏ qua file đó (file 		đc viết)