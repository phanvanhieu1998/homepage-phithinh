<template>
  <div class="container">
	  <el-row style="margin-top: 40px;" :gutter="20">
		<el-col :span="24" :md="16">
			<div class="content__left">
				<h2 style="font-size:15px">CHÍNH SÁCH VÀ ĐIỀU KHOẢN</h2>
				<h4>
					1. Phí Thịnh Shop là website của thương hiệu may mặc
				</h4>
				<p>
					- Phí Thịnh Shop  là kênh mua sắm và hỗ trợ đắc lực công tác chăm sóc Khách Hàng của Thương hiệu thời trang may mặc.
				</p>
					
				<p>
					- Kể từ khi ra mắt, Phí Thịnh Shop  đã - đang và sẽ không ngừng cải tiến và nâng cấp để ngày một hoàn thiện tính năng, thân thiện nhất với Khách Hàng.
				</p>

				<h4>
					2. Chính sách bảo mật và chia sẻ thông tin
				</h4>
				<h4>
					2.1 Mục đích áp dụng
				</h4>
				<p>
					- Chính sách bảo mật và chia sẻ thông tin này (“Chính Sách”) nhằm đảm bảo an toàn thông tin liên quan đến các tổ chức,
					
				</p>

				<p>
					- Chính Sách này mô tả cách Phí Thịnh Shop  tiếp nhận, tổng hợp, lưu giữ, sử dụng và bảo vệ
					 thông tin của các tổ chức, cá nhân tham gia truy cập, giao dịch trên Website và Ứng dụng (“Khách Hàng”).
					  Việc Khách Hàng truy cập hoặc thực hiện giao dịch trên Website và Ứng dụng được hiểu là Khách Hàng đã đọc,
					   hiểu và đồng ý tuân thủ Chính Sách này, kể cả các phiên bản sửa đổi, bổ sung của Chính Sách. Phiên bản sửa đổi,
					    bổ sung Chính Sách này (nếu có) sẽ có hiệu lực ngay khi được cập nhật chính thức trên Website và không cần phải thông báo trước.


				</p>

			
			</div>

		</el-col>

		<el-col :span="24" :md="8">
			<div class="image__guide">
				<img src="~/static/images/policies_terms.png">
			</div>
		</el-col>
	</el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
h2{
	margin: 0;
}
.content__left p{
	margin: 40px 0;
	line-height: 30px;
}
.content__left{
	
	padding-right: 30px;
}
.image__guide{
	position: relative;
}
.image__guide img{
	width: 100%;
	height: 100%;
}
.image__guide::before{
	content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 3px solid #ccc;
	    bottom: -21px;
    left: -21px;
	
}
</style>