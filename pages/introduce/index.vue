<template>
  <div >
	  <div class="introduce">
		  <h2>GIỚI THIỆU</h2>
	  </div>
	   <div class="container">
		    <el-row style="margin-top: 40px;" :gutter="20">
		<el-col :span="16">
			<div class="content__left">
					<h3>Phí Thịnh Shop</h3>
				<p style="line-height: 1.666667;">
					Phí Thịnh Shop là thương hiệu thời trang Việt Nam với mong muốn đem lại vẻ đẹp hiện đại và sự tự tin cho khách hàng, 
					thông qua các dòng sản phẩm thời trang thể hiện cá tính và xu hướng. Một trong những "tôn chỉ" về thiết kế của Phí Thịnh Shop chính là sự đa dạng, 
					với mong muốn mang đến cho người mặc những sản phẩm phù hợp nhất với ngoại hình và quan trọng hơn cả là cá tính của chính mình.
				</p>
					
				<p style="line-height: 1.666667;">
					Phí Thịnh Shop với đội ngũ người trẻ giàu kinh nghiệm và đam mê sáng tạo, chúng tôi mong muốn đem đến nhiều sản phẩm thời trang có thể phục vụ cho mọi người.
				</p>

			

				<p>
					Nếu có bất kì câu hỏi gì vui lòng liên hệ với chúng tôi.
				</p>

				<p>
					Địa chỉ: Tổ 2, Tân Thịnh, TP Thái Nguyên
				</p>

				<p>
					Hotline: <span style="color:blue">0378888918</span>
				</p>
			</div>

		</el-col>

		<el-col :span="8">
			<div class="image__guide">
				<img src="~/static/images/introduce.jpg">
			</div>
		</el-col>
	</el-row>
	  </div>
	  <div class="container">
		      <el-row style="margin-top: 40px;margin-left:20px" :gutter="20">
				  	<el-col :span="8">
			<div class="image__guide">
				<img src="~/static/images/introduce1.jpg">
			</div>
		</el-col>
		<el-col :span="16">
			<div class="content__left">
					<h3>Lĩnh vực kinh doanh</h3>
				<p>
					Kể từ khi được thành lập, Phí Thịnh Shop kinh doanh chính trong lĩnh vực thời trang cụ thể:
				</p>
					
				<p>
					- Các sản phẩm thời trang quần áo cho nam, nữ.
				</p>

			

				<p>
					- Các sản phẩm thời trang giày dép cho nam, nữ.
				</p>

				<p>
					- Các sản phẩm thời trang túi xách cho nam, nữ.
				</p>

				<p>
					- Các sản phẩm thời trang đồng hồ cho nam, nữ.
				</p>
					<div style="border-left: 3px solid #e6e6e6;    padding-left: 29px;">
						<p style="line-height: 1.666667;">
						"Chúng tôi nhất định sẽ đem lại vẻ đẹp hiện đại và sự tự tin cho khách hàng thông qua các
						dòng sản phẩm thời trang thể hiện cá tính và xu hướng. Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ của chúng tôi."<br>
						- Phí Thịnh Shop -
						</p>
						
				</div>
			</div>

		</el-col>

	
	</el-row>
	  </div>
  </div>
</template>

<script>
export default {
 data() {
      return {
	
      }
    }
}
</script>

<style>
.introduce{
	background-image: url(http://meiboutiques.work/images/bg-01.jpg);
	height: 240px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.introduce h2{
	margin: 0;
	font-size: 50px;
	color: white;
}

.content__left p{
	margin: 40px 0;
	   font-family: Verdana;
		color: #888;
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