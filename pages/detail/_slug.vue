<template>
  <div>
	
			<div  v-for="(item, index) in detail" :key="index" class="men_fashion">
			 
				
			 <img :src="item.images">
			 <span>{{item.name}}</span><br>
			  <span>{{item.price}} VNĐ</span>  
		 </div>  
  </div>
</template>

<script>
 import { mapState } from'vuex'
export default {
	data(){
		return{
			hihi:{}
		}
	},


	methods:{
		loadData(){
			
			this.$store.dispatch('detail/detail',this.slug).then((res)=>{
				//  console.log(res)
			})
		},


	},

	mounted(){
		this.loadData()
			this.hihi = Object.assign(this.hihi, this.detail);
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

</style>