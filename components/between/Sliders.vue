<template>
  <div class="container">
	  		
		<el-carousel :interval="3000" arrow="always" height="500px">
			 <el-carousel-item  v-for="(item, index) in  listSliders" :key="item.id">
				 <div class="slider" v-if="index==0">
					<div class="slider__content">
						 <h2  data-aos="fade-down"  data-aos-duration="3000" data-aos-easing="linear">Chào Hè 2021</h2>
					 	<p data-aos="fade-up"  data-aos-duration="3000">Bán lẻ giảm tới 70% tại cửa hàng hoặc trực tuyến </p>
						  <el-button data-aos="zoom-in"  data-aos-duration="3000" style="margin-top:40px" type="primary" round>Mua Ngay</el-button>
					</div>
				 </div>

				  <div class="slider" v-if="index==1">
					<div class="slider__content">
						<span data-aos="fade-up"  data-aos-duration="3000" style="margin-left:10px">Cá Tính, Trẻ Trung 2021</span>
					 	<h2>Chào Hè 2021</h2>
						  <el-button data-aos="fade-down"  data-aos-duration="3000" style="margin-top:40px" type="primary" round>Mua Ngay</el-button>
					</div>
				 </div>

			   <el-image 
					style="width: 100%; height: 100%"
					:src="item.images" 
					>
					
					</el-image>
				
			</el-carousel-item> 
 		</el-carousel>

	
		
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
		
		
		
	}
}
</script>

<style>
.slider{
	position: relative;
	display: flex;
	top:50%;
	align-items: center;
}
.slider__content{
	position: absolute;
	padding-left: 80px;
	z-index: 1;
	width: 500px;
	height: 130px;


}

/* .slider__content:before, .slider__content:after {
    content: '';
    display: inline-block;
    height: 1px;
    width: 185px;
    background-color: #444;
} */
h2{
	    font-family: "Playfair Display", serif;
    font-size: 4rem;
    font-weight: 700;
	margin:   10px 0;
}
span{
	 font-family: "Playfair Display", serif;
	 font-size: 20px;

	
}
</style>