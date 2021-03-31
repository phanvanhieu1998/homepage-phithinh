<template>
  
<div >
	<div class="contact">
		<h2>LIÊN HỆ</h2>
	</div>
	<div class="container">
		<div class="content__contact">
			<div class="content__contact__left">
				<p class="send">Gửi tin nhắn</p>
			
						<el-input type="password" v-model="ruleForm.fullName" autocomplete="off"
						placeholder="Nhập họ tên của bạn"></el-input>
				
						<div class="icon__contact" >
							<i class="el-icon-user"></i>
						</div>
						<el-input type="password" v-model="ruleForm.phoneNumber" autocomplete="off"
						placeholder="Nhập số điện thoại của bạn"></el-input>

							<div class="icon__contact1" >
							<i class="el-icon-phone-outline"></i>
							</div>
				
						<el-input v-model.number="ruleForm.email"
						placeholder="Nhập địa chỉ email của bạn"></el-input>
						<div class="icon__contact2" >
							<i class="el-icon-edit-outline"></i>
							</div>

				
						<el-input  type="textarea" v-model="ruleForm.problems"
						 :rows="4"
						placeholder="bạn gặp vấn đề gì?"></el-input>
					

			
						<el-button type="primary" >Gửi</el-button>
		
		
			</div>
			<div class="content__contact__right">

			</div>
		</div>
	</div>
	
</div>
</template>

<script>
export default {
	data(){
		return{
			 ruleForm: {
          fullName: '',
          phoneNumber: '',
          email: '',
		  problems:''
        },

		}
	},
	// layout:'public'
}
</script>

<style>
.contact{
	background-image: url(http://meiboutiques.work/images/bg-01.jpg);
	height: 240px;
	display: flex;
	justify-content: center;
	align-items: center;
}
h2{
	font-size: 50px;
	color: white;

	margin-top: 50px;
}
.content__contact{
	display: flex;
	margin: 60px 0;
}
.content__contact__left{
	position: relative;
	width: 50%;
	height: 400px;
	border: 1px solid #e6e6e6;
	padding: 30px ;

	
}
.content__contact__right{
	width: 50%;
	height: 400px;
	    border: 1px solid #e6e6e6;
}
.send{
	font-size: 30px;
	text-align: center;
	margin: 0;

}
.el-input__inner{
	margin: 20px 0;
	padding: 0 40px;
}
.icon__contact{
	position: absolute;
	top:92px;
	left: 40px;
		font-size: 20px;
}
.icon__contact1{
	position: absolute;
	top:38%;
	left: 40px;
	z-index: 1;
		font-size: 20px;
}
.icon__contact2{
	position: absolute;
	top:55%;
	left: 40px;
	z-index: 1;
	font-size: 20px;
}
</style>