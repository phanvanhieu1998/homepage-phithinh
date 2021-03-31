<template>
  <div class="container">
	  <el-row style="margin-top: 40px;" :gutter="20">
		<el-col :span="16">
			<div class="content__left">
					<h2>CHÍNH SÁCH ĐỔI TRẢ</h2>
					<h4>
					1. THỜI GIAN ĐỔI TRẢ
					</h4>
				<p>
					Trong vòng 15 ngày kể từ ngày mua sản phẩm (theo ngày trên hóa đơn) - Đối với các KH đặt mua ONLINE tính từ ngày KH nhận được sản phẩm.
				</p>
				<h4>
					2. ĐIỀU KIỆN ĐỔI TRẢ
				</h4>
					
				<p>
					- Hàng đổi phải còn nguyên nhãn mác, mã vạch, chưa qua sử dụng và có hóa đơn mua hàng nguyên 
				</p>

				<p>
				- Sản phẩm chỉ được đổi 01 lần theo đúng quy định.
				</p>

				<p>
					- Giá trị sản phẩm đổi/trả được tính theo đơn giá trên hóa đơn mua hàng.
				</p>

				<h4>
					3. CÁC TRƯỜNG HỢP TỪ CHỐI ĐỔI TRẢ
				</h4>
				<p>
				- Thời gian mua hàng quá 15 ngày.
				</p>

				<p>
					- Nhãn mác, mã vạch không còn nguyên vẹn.
				</p>

				<p>
					- Sản phẩm đã chỉnh sửa, đã qua sử dụng (bị bẩn, rách, hỏng, rút sợi, phai màu, có mùi hôi, mùi hóa chất khác thường) hoặc bị lỗi
					 do những tác động bên ngoài sau khi mua, hoặc các phụ kiện/chi tiết gắn liền của sản phẩm không còn đầy đủ/hư hại.
				</p>

				<p>
					- Sản phẩm giảm giá trong các CTGG trên 50%, các sản phẩm thuộc chương trình đồng giá (từ 49k, 99k…).
				</p>

				<h4>
					Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng Phí Thịnh Shop! Mọi thắc mắc liên quan đến chính sách đổi hàng, vui lòng liên hệ 0378888918
				</h4>
			</div>

		</el-col>

		<el-col :span="8">
			<div class="image__guide">
				<img src="~/static/images/refunds.jpg">
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