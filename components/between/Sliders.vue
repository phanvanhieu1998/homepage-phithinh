<template>
  <div class="container">
	  		
		<el-carousel :interval="2000" arrow="always" height="500px">
			 <el-carousel-item  v-for="(item, index) in  listSliders" :key="item.id">
				 <div class="slider" v-if="index==0">
					<div class="slider__content">
						 <h2  data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000">Chào Hè 2021</h2>
					 	<span>Bán lẻ giảm tới 70% tại cửa hàng hoặc trực tuyến </span>
					</div>
				 </div>

				  <div class="slider" v-if="index==1">
					<div class="slider__content">
						<h2>sdfjasdfkas</h2>
					 	<span>kaka</span>
					</div>
				 </div>

				  <div class="slider" v-if="index==2">
					<div class="slider__content">
						 <h3>sdfsdf</h3>
					 	<span>kaka</span>
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

		sliderWithText(){
			this.$store
		}
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

.slider__content:before, .slider__content:after {
    content: '';
    display: inline-block;
    height: 1px;
    width: 185px;
    background-color: #444;
}
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