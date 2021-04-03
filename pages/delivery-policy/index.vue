<template>
  <div class="container">
	  <el-row style="margin-top: 40px;" :gutter="20">
		<el-col :span="16">
			<div class="content__left">
					<h2 style="font-size:15px">CHÍNH SÁCH GIAO HÀNG</h2>
				
				<h4>
					1. Quý khách hàng vui lòng thanh toán mọi chi phí liên quan tới tiền vận chuyển theo cách thức sau:
				</h4>
					
				<p>
					+ Thanh toán trực tiếp chi phí vận chuyển cho nhân viên vận chuyển hàng hóa.
				</p>

				<p>
					+ Thanh toán chuyển khoản/ thanh toán trực tuyến cho Phí Thịnh Shop
					 bao gồm tiền hàng và tiền vận chuyển. Bảng cước phí vận chuyển được áp dụng theo bảng cước của đối tác vận chuyển.
				</p>
				
				<h4>
					2. Q&A
				</h4>

				<h4>
					Tôi có thể nhận được đơn hàng ở đâu?
				</h4>
				<p>
					- Đơn hàng có thể được gửi tới địa chỉ do quý khách chọn (nhà riêng, cơ quan)
				</p>

				<h4>
					Quốc gia giao hàng có được khác với quốc gia mua hàng không?
				</h4>
				<p>
					- Không. Quốc gia giao hàng phải luôn giống với quốc gia mua hàng.
				</p>

				<p>
					Bước 5: Xác nhận đơn hàng.
				</p>

				<h4>
					Cảm ơn bạn đã yêu thích sản phẩm 
					và đồng hành cùng Phí Thịnh Shop! Mọi thắc mắc liên quan đến chính sách đổi hàng, vui lòng liên hệ 0378888918.
				</h4>
			</div>

		</el-col>

		<el-col :span="8">
			<div class="image__guide">
				<img src="~/static/images/delivery.jpg">
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

p{
	margin: 40px 0;
}

.content__left{
	
	padding-right: 30px;
}
.content__left h2{
	margin: 0;
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