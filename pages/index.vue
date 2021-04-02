<template>
  <div >
	 <!-- <div>
		 <ContentTopbar/>
	 </div> -->
	 <div>
		 <Sliders/>
		 <BestSellers/>
		 <AllProducts/>
	 </div>
  </div>
</template>

<script>
// import ContentTopbar from '~/components/header/ContenTopbar'
import Sliders from '~/components/between/Sliders'
import BestSellers from '~/components/between/BestSellers'
import AllProducts from '~/components/between/AllProducts'
export default {
	data(){
		return{
				
		}
	},
	components:{
		// ContentTopbar,
		Sliders,
		BestSellers,
		AllProducts
	}
}
</script>

<style>

</style>
