<template>
  <div class="container">
	  <el-row style="margin-top: 40px;" :gutter="20">
		<el-col :span="16">
			<div class="content__left">
					<h2>CÁCH MUA HÀNG</h2>
				<p>
					Mua sắm tại Phí Thịnh Shop thật dễ dàng. Quý khách chỉ cần làm theo các bước sau:
				</p>
					
				<p>
					Bước 1: Chọn sản phẩm mà khách hàng muốn xem.
				</p>

				<p>
					Bước 2: Xem sản phẩm quý khách quan tâm rồi nhấp vào ảnh để xem mọi chi tiết, kích cỡ hiện có, thành phần, và giá.
				</p>

				<p>
					Bước 3: Chọn mặt hàng và thêm mặt hàng vào giỏ. Sau đó, quý khách có thể chọn tiếp tục mua sắm hoặc xử lý đơn hàng.
				</p>

				<p>
					Bước 4: Nếu muốn xử lý đơn hàng, quý khách có thể thực hiện bằng cách chọn hình thức giao hàng, hình thức thanh toán và nhập thông tin liên hệ.
				</p>

				<p>
					Bước 5: Xác nhận đơn hàng.
				</p>

				<h4>
					Đơn hàng Online sẽ được xác nhận qua điện thoại trong vòng 48h làm việc.
					Nếu Phí Thịnh Shop không thể liên hệ được Quý khách, đơn hàng sẽ tự động huỷ trên hệ thống. Phí Thịnh Shop
					cũng có quyền từ chối hoặc hủy bỏ bất kỳ đơn hàng nào vì bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách khách quan vào bất kỳ lúc nào.
				</h4>
			</div>

		</el-col>

		<el-col :span="8">
			<div class="image__guide">
				<img src="~/static/images/shopping-guide.jpg">
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
p{
	margin: 40px 0;
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