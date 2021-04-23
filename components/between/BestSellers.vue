<template>
  	<div class="container">
	 	<el-tabs v-model="activeName" >
			<el-tab-pane   label="Sản Phẩm Mới Nhất" name="first">
				<div class="container main">
					<div  data-aos="fade-up" data-aos-duration="3000" v-for="item in productNew " :key="item.id" class="men_fashion">
						<nuxt-link :to="{ path: `/detail/${item.slug}`}">
							<img  :src="item.images">
						</nuxt-link>
						<div v-if="item.discount !== null "  class="discount">
							<span v-if="item.discount == null">
							</span>
							<span style="color:red;font-weight:600" v-else>
								{{item.discount}}%
								<strong class="discount1" style="color:white;font-size:0.8rem">GIẢM</strong>
							</span>
						</div>
					
						<div class="description1">
							
							<span >{{item.name}}</span><br>

						</div>
						<div class="price">
							<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
							<span  style="color: red;"  v-else>{{item.sale_price.toLocaleString('it-IT')}}đ</span>
							<span  style="color: red;"  v-if="item.sale_price !== item.price ">
								{{item.sale_price.toLocaleString('it-IT')}}đ
							</span>
						</div>
					</div>
				</div>

			</el-tab-pane>

			<el-tab-pane label="Sản Phẩm Bán Chạy Nhất" name="second">
				<div class="container main">
					<div  data-aos="fade-up" data-aos-duration="3000" v-for="item in productBestseller " :key="item.id" class="men_fashion">
						<nuxt-link :to="{ path: `/detail/${item.slug}`}">
							<img  :src="item.images">
						</nuxt-link>
						
						<div v-if="item.discount !== null "  class="discount">
							<span v-if="item.discount == null">
							</span>
							<span style="color:red;font-weight:600" v-else>
								{{item.discount}}%
								<strong class="discount1" style="color:white;font-size:0.8rem">GIẢM</strong>
							</span>
						</div>
						
						<div class="description1">
							<span >{{item.name}}</span><br>
						</div>

						<div class="price">
							<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
							<span  style="color: red;"  v-else>{{item.sale_price.toLocaleString('it-IT')}}đ</span>
							<span  style="color: red;"  v-if="item.sale_price !== item.price ">
								{{item.sale_price.toLocaleString('it-IT')}}đ
							</span>
						</div>
					</div>
				</div>
			</el-tab-pane>
 		 </el-tabs>
 	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{
			activeName: 'first'
		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('productNewBestseller/productNew').then((res) =>{
			
			})
			this.$store.dispatch('productNewBestseller/producBestseller').then((res) =>{
			
			})
			
		},
	},
	mounted(){
		this.loadData()
	
		
	},
	computed:{
		...mapState({
			productNew:state => state.productNewBestseller.productNew,
			productBestseller : state =>state.productNewBestseller.productBestseller
		})
	}
}
</script>

<style>
.main{
	
	display: flex;
 	flex-wrap: wrap;
	margin-top: 40px;
	margin-bottom: 40px;
	justify-content: center;
}
.el-tabs__nav-scroll{
	display: flex;
    justify-content: center;
    margin-top: 30px;
}
.discount1{
	position: absolute;
	top:20px;
	left: 0px;
}
.men_fashion {
	position: relative;
	background-color: white;
	width: 205px;
	margin: 10px;
	cursor: pointer;
	transition: transform linear 0.1s;
	will-change: transform;
	
}
.men_fashion:hover{
	transform: translateY(-1px);
}
.men_fashion img{
	background-color: white;
	width: 100%;
	margin: 10px;
	display: block;
	
}
.description1{
	padding: 10px 10px 0;
	word-wrap: break-word;
	height: 23px;  
	overflow: hidden;
	display: block;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp: 2;

}
.price__product{
	text-decoration-line:line-through
}
.discount{
	background-color:rgba(255,212,36,.9) ;
	text-align: center;
	width: 40px;
	height: 36px;
	position: absolute;
	right: 0;
	top:0;
}
.discount::after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -5px;
	border-width: 0 20px 6px;
	border-style:solid;
	border-color: transparent rgba(255,212,36,.9) transparent rgba(255,212,36,.9);
}
.price{
	display: flex;
}
</style>