<template>
  <div>
	  <Header/>
     <Nuxt /> 
	 <Footer/>
  </div>
</template>

<script>
import Header from '~/components/header/ContenTopbar'
import Footer from '~/components/footer'
export default {
	data() {
		return{

		}
	},

	components:{
		Header,
		Footer
	}
}
</script>
<style>
body{
	box-sizing: border-box;
	font-family:  Verdana;
	
}
</style>
