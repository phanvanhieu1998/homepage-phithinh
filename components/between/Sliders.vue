<template>
 	<div class="carousel">
		<el-carousel height="800px" >
			<el-carousel-item  v-for="(item, index) in  listSliders" :key="item.id">
				<div class="container">
					<div class="slider" v-if="index==0">
						<div class=" slider__content ">
							<h2 class="ml9">
								<span class="text-wrapper ">
									<span style="color:white" class="letters">THỜI TRANG NỮ 2021</span>
								</span>
							</h2>
							<p data-aos="fade-up"  data-aos-duration="3000">CÓ THIẾT KẾ MỚI </p>
							<el-button data-aos="zoom-in"  data-aos-duration="3000" style="margin-top:20px" type="primary" >Mua Ngay</el-button>
							
						</div>
					</div>

					<div class="slider" v-if="index==1">
						<div  class="slider__content">
							<span data-aos-duration="3000" style="margin-left:10px">Cá Tính, Trẻ Trung 2021</span>
							<el-button data-aos="fade-down"  data-aos-duration="3000" style="margin-top:20px" type="primary" round>Mua Ngay</el-button>
						</div>
					</div>
				</div>

			   <el-image 
					style="width: 100%; height: 100%"
					:src="item.images" 
					>
					
				</el-image>
				
			</el-carousel-item> 
 		</el-carousel>
		 <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> 
  	</div>
  
</template>

<script>

import {mapState} from 'vuex'
export default {
	data(){
		return{
		
			
		}
	},
	methods:{
			loadData(){
			this.$store.dispatch('sliders/listSliders')
			
		}
	},
	computed:{
		...mapState({
			listSliders:state => state.sliders.listSliders
		}),

	
	},
	mounted(){
			this.loadData()

 	setInterval(() => {
	 var textWrapper = document.querySelector('.ml9 .letters');
		if(textWrapper !== null){
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
			
		anime.timeline({loop: true})
		.add({
			targets: '.ml9 .letter',
			scale: [0, 1],
			duration: 1500,
			elasticity: 600,
			delay: (el, i) => 45 * (i+1)
		}).add({
			targets: '.ml9',
			opacity: 0,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 1000
		});
	 }
	},2000);
		

		
	
	}
}
</script>

<style>
.slider{
	position: relative;
}
.carousel{
	height: 800px;
}
 .slider__content{
	position: absolute;
	margin-top: 25%;
	right: 0;
	z-index: 1;
	width: 500px;
} 
.slider__content p{
	color: white;
	font-size: 20px;
	margin: 0;
}
.ml9 {
  position: relative;
  font-weight: 200;
  font-size: 3em;
  margin: 0;
}

.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml9 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
  font-size: 40px;
 
}
.slider__content .el-button--primary{
	background-color: black ;
	border: 2px solid white;
}
</style>