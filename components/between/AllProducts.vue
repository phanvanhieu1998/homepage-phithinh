<template>
  <div>
	  dfdfd
  </div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('product/listProduct').then((res) =>{
				console.log(res)
			})
		},
	},
	mounted(){
		this.loadData()
		console.log('ditconmemay11')
	}
}
</script>

<style>

</style>