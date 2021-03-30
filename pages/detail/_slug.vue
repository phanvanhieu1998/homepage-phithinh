<template>
  <div class="container">
	  <div class="detail__product">
		  <!-- {{detail}} -->
		  
		   <div>
			   <img :src="detail.images">
		   </div>
		   
		   <div>
			   	<h2>{{detail.name}}</h2>
				<!-- <span v-if="discount == null">{{detail.price}}đ</span> -->
				<span  >{{detail.sale_price}}</span>
			
				<p>{{detail.description}}</p>
				 <!-- <p style="color:red">Thương Hiệu: {{detail.brand.name}}</p>  -->
				<el-form :model="dataProduct" :rules="rules" ref="dataProduct">
					<el-form-item label="Sizes" prop="value">
						<el-select   v-model="dataProduct.value" placeholder="Chọn size">
						<el-option
						v-for="item in detail.sizes"
						:key="item.id"
						:label="item"
						:value="item">
						</el-option>
					</el-select>
				</el-form-item>
			
		
					<el-form-item label="Màu Sắc" prop="value1" >
							<el-select  v-model="dataProduct.value1" placeholder="Chọn màu sắc">
							<el-option  
							v-for="item in detail.colors"
							:key="item.id"
							:label="item"
							:value="item">
							</el-option>
							</el-select>
				</el-form-item>
				
				</el-form>

				<template>
					<el-input-number   v-model="dataProduct.num "  :min="1" :max="detail.amount"></el-input-number>
					<span>Sản phẩm có sẵn {{detail.amount}}</span>
				</template><br>
					<el-button  @click="addToCart('dataProduct')" type="primary" round>Thêm vào giỏ hàng</el-button>
		   </div>
	  </div>
	  
	
  </div>
</template>

<script>
 import { mapState } from'vuex'
export default {
	data(){
		return{
		dataProduct:{
			num:1,
			value: '',
			value1:''
		},
	
			 rules: {
          value: [
            { required: true, message: 'Vui lòng chọn size', trigger: 'blur' },
			
          
          ],
          value1: [
           { required: true, message: 'Vui lòng chọn color', trigger: 'blur' },
          ],
		}
		
	}
	},
	methods:{
		loadData(){
			
			this.$store.dispatch('detail/detail',this.slug).then((res)=>{
				//  console.log(res)
			})
		},
		addToCart(formName){
		
			
			this.$refs[formName].validate((valid) => {
          if (valid) {
            	this.$store.dispatch('detail/addToCart',{
				product: this.detail,
				quantity : this.dataProduct.num,
				colors: this.dataProduct.value1,
				sizes: this.dataProduct.value
			}).then((res)=>{
				this.open()
			})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
		},
		   open() {
        this.$notify.success({
          title: 'Success',
          message: 'Thêm Sản Phẩm Thành Công',
          offset: 100
        });
      }
	 


	},

	mounted(){
		this.loadData()
	
			// console.log(this.hihi)
	},
	computed:{
		 ...mapState({
		 	detail: state => state.detail.detail
		 }),
		slug(){
			return this.$route.params.slug
		},
		
	},
}
</script>

<style>
.detail__product{
	display: flex;
}
.detail__product img{
	width: 500px;
	padding: 30px;
}
</style>