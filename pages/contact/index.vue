<template>
  
<div >
	<div class="contact">
		<h2>LIÊN HỆ</h2>
	</div>
	<div class="container">
		<div class="content__contact">
			<div class="content__contact__left">
				<p class="send">Gửi tin nhắn</p>
			
						<el-input type="text" v-model="ruleForm.name" autocomplete="off"
						placeholder="Nhập họ tên của bạn"></el-input>
				
						<div class="icon__contact" >
							<i class="el-icon-user"></i>
						</div>
						<el-input type="text" v-model="ruleForm.phone" autocomplete="off"
						placeholder="Nhập số điện thoại của bạn"></el-input>

							<div class="icon__contact1" >
							<i class="el-icon-phone-outline"></i>
							</div>
				
						<el-input type="email" v-model.number="ruleForm.email"
						placeholder="Nhập địa chỉ email của bạn"></el-input>
						<div class="icon__contact2" >
							<i class="el-icon-edit-outline"></i>
							</div>

				
						<el-input  type="textarea" v-model="ruleForm.message"
						 :rows="4"
						placeholder="bạn gặp vấn đề gì?"></el-input>
					

			
						<el-button style="margin: 20px 0" @click="handleSubmit" type="primary" >Gửi</el-button>
		
		
			</div>
			<div class="content__contact__right">
				<div class="hihi">
					<h5>Địa chỉ</h5>
					<p>
						Tổ 2, Tân Thịnh, TP Thái Nguyên
					</p>
				</div>
					
				<div>
					<h5>Hotline</h5>
					<p style="color:blue">
						0378888918
					</p>
				</div>

				<div>
					<h5>Email</h5>
					<a href="#" style="color:blue">
						phanvanhieu0708@gmail.com
					</a>
				</div>
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
          name: '',
          phone: '',
          email: '',
		  message:''
        },

		}
	},
	methods:{
		handleSubmit(){
			this.$store.dispatch('contact/handleProblem',this.ruleForm).then((res)=>{
				this.open()
			})
		},
			   open() {
        this.$notify.success({
          title: 'Success',
          message: 'Gửi yêu cầu thành công ',
          offset: 100
        });
      }
	},
	mounted(){

	}
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
																																																			
	
}
.hihi p{
	color: #888;
}
.content__contact{
	display: flex;
	margin: 60px 0;
}
.content__contact__left{
	position: relative;
	width: 50%;
	height: auto;
	border: 1px solid #e6e6e6;
	padding: 30px ;

	
}
.content__contact__right{
		padding: 30px ;
	width: 50%;
	height: 460px;
	 border: 1px solid #e6e6e6;
}
.send{
	font-size: 30px;
	text-align: center;
	margin: 0;

}
.content__contact__left .el-input__inner{
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
	top:34%;
	left: 40px;
	z-index: 1;
		font-size: 20px;
}
.icon__contact2{
	position: absolute;
	top:49.5%;
	left: 40px;
	z-index: 1;
	font-size: 20px;
}
</style>