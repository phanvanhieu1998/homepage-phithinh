<template>
  
  <div >
	 
	  <div class="banner">
		  <h1>Thời Trang Nam</h1>
	
	  </div>
	  <div class="container">
		  	<div  class="men_fashion">
				  <span> VNĐ</span>
			</div>
	  </div>
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
    
	  this.$store.dispatch('productByCategory/productByCategory',this.$route.query.slug)
      },
	
	},
	 mounted(){

		this.loadData()
		
		//  	console.log('-------------');
		 console.log(this.$route.query.slug);
		//  console.log('-------------');
    },
	 computed:{
 
     

    }
	

}
</script>

<style>
.banner{
	background-image: url(http://meiboutiques.work/images/bg-02.jpg);
	height:240px;
	    background-size: cover;
    /* background-position: center center; */
  display: flex;
  align-items: center;
  justify-content: center;

}
.banner h1{
	color: white;
	font-size: 3.5rem;
	 font-family: "Playfair Display", serif;
}

</style>