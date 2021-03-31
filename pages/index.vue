<template>
  <div >
	 <!-- <div>
		 <ContentTopbar/>
	 </div> -->
	 <div>
		 <Sliders/>
		 <BestSellers/>
	 </div>
  </div>
</template>

<script>
// import ContentTopbar from '~/components/header/ContenTopbar'
import Sliders from '~/components/between/Sliders'
import BestSellers from '~/components/between/BestSellers'
export default {
	data(){
		return{

		}
	},
	components:{
		// ContentTopbar,
		Sliders,
		BestSellers
	}
}
</script>

<style>

</style>
