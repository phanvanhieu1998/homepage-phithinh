<template>
  <div class="container">
	  <el-table
    :data="cart"
    style="width: 100%">
    <el-table-column
	label="Sản Phẩm"
     >
      <template slot-scope="scope">
      
        <el-image
      style="width: 100px; height: 100px"
      :src="scope.row.product.images">
      </el-image>
		
      </template>
    </el-table-column>
    <el-table-column
		label="Gía"
     >
      <template slot-scope="scope">
		  <span style="margin-left: 10px">{{ scope.row.product.sale_price.toLocaleString('it-IT')}}đ</span>
      </template>
    </el-table-column>
	    <el-table-column
		label="Số Lượng"
     >
      <template slot-scope="scope">
		   <el-input-number v-model="scope.row.quantity" :min="1" :max="10"></el-input-number>
      </template>
    </el-table-column>

	    <el-table-column
		label="Size"
     >
      <template slot-scope="scope">
		   
		   <span style="margin-left: 10px">{{ scope.row.sizes }}</span>
      </template>
    </el-table-column>

	    <el-table-column
		label="Màu Sắc"
     >
      <template slot-scope="scope">
		   <span style="margin-left: 10px">{{ scope.row.colors }}</span>
      </template>
    </el-table-column>

    <el-table-column>	
      <template slot-scope="scope">
    
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>

  </el-table>
	<div class="productPayment">
		<strong style="margin-right:20px">Tổng tiền hàng ( sản phẩm ){{cartTotalPrice.toLocaleString('it-IT')}}đ</strong>
		<el-button type="success">Thanh Toán</el-button>
	</div>
	  
  </div>

</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default {
	data(){
		return{
		
		}
	},
	computed:{
		...mapState({
			cart:state => state.detail.cart
		}),
		   ...mapGetters({
		
		cartTotalPrice:'detail/cartTotalPrice',
	
	  })
	},
	methods:{

	},
	mounted(){

	}

}
</script>

<style>
.productPayment{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 30px 0;
}
</style>