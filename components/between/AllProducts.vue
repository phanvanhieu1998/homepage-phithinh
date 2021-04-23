<template>
  	<div class="container">
		  <!-- <p v-text="'haha'"></p>
		  <p v-html="'<h1>sdfsdfsd</h1>'"></p> -->
	  	<div class="allProduct">
			<div class="all__product__hot__trend">
				<span>Hot Trend</span>
			</div>
			
			<div style="margin-top:20px">
				<h5 style="font-size:30px">Tất cả sản phẩm</h5>
			</div>
		</div>

		<div class="show__pagination" >
			<span style="margin-left:14px;line-height: 32px;">
				hiển thị {{(totalData == 0) ? 0 : ((limit * (page - 1)) + 1)}} - {{ (limit * page) > totalData ? totalData : (limit * page) }}  của {{totalData}} sản phẩm
			</span>
			
			<el-pagination  
				background  layout="prev, next" @current-change="set_page" :page-size="limit" :total="totalData">
			</el-pagination>   

		</div>
	
	 	<div class="container main">
			<div  data-aos="zoom-in" data-aos-duration="3000" v-for="item in listProduct " :key="item.id" class="men_fashion">
				
				<nuxt-link :to="{ path: `/detail/${item.slug}`}">
				<img  :src="item.images"></nuxt-link>
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

				<div class="hicc">
					<el-rate
						v-model="value"
						:texts="['oops','disappointed', 'normal', 'good', 'great']"
						show-text>
					</el-rate>
				</div>
	
			</div>
		</div>

		 <el-pagination :hide-on-single-page="true"  class="pagination"  :current-page="page"
			
			background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
		</el-pagination>   
	
  </div>
  
</template>


<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{
	value: null,
			loading:false
		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('product/listProduct').then((res) =>{
			
			})
		},
		set_page(page){
        	this.$store.commit('product/SET_PAGE',page)
         	this.loadData()
    }
	},
	mounted(){
		this.loadData()

	},
	computed:{
		...mapState({
			listProduct:state => state.product.listProduct,
			totalData : state => state.product.totalData,
          	page: state =>state.product.page,
          	limit : state =>state.product.limit,
		}),
	
	
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
.show__pagination{
	display: flex;
	justify-content: center;
}
.men_fashion {

	position: relative;
	background-color: white;

	
	
	width: 250px;
	
	margin: 17px;
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
	margin: 0;
	display: block;
	height: 350px;
	
}
.pagination{
	text-align: center;
	padding-bottom: 40px;
}
.description1{
	text-align: center;
	padding: 10px 10px 0;
	word-wrap: break-word;
	 height: 23px;  
	 overflow: hidden;
	 display: block;
	 display: -webkit-box;
	 -webkit-box-orient:vertical;
	 -webkit-line-clamp: 2;
	 display: flex;
	 justify-content: center;

	
}
.description1 span{
	text-align: center;
}
.price__product{
	
	text-decoration-line:line-through;
	margin-right:10px;
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
	justify-content: center;


}
.allProduct{
	position: relative;
	display: flex;
	margin-top: 50px;
	justify-content: center;

	
}
.all__product__hot__trend{
	display: flex;
	justify-content: center;
		background-color:red ;
		text-align: center;
		width: 120px;
		height: 34px;
		 position: absolute;
		align-items: center;
		top:0; 
	
}
.all__product__hot__trend::before{
	content: '';
	 position: absolute;
	left: -12px;

	border-width: 17px 0px 17px 12px;
	border-style:solid;
	border-color: red transparent red transparent;
}

.all__product__hot__trend::after{
	content: '';
	 position: absolute;
	right: -12px;

	border-width: 17px 12px 17px 0;
	border-style:solid;
	border-color: red transparent red transparent;
}
</style>