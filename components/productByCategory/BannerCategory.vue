<template>
  <div>
	  	 <div v-if="valueSlug == 'thoi-trang-nam'" class="hi" >
		 	<h1>Thời Trang Nam</h1>
	 </div>

	  <div v-if="valueSlug == 'thoi-trang-nu'" class="hi" >
		 	<h1>Thời Trang Nữ</h1>
	 </div>
  </div>
</template>

<script>
export default {

	data(){
		return{

		}
	},
	props:['valueSlug'],
}
</script>

<style>
.hi{
 background-image: url(http://meiboutiques.work/images/bg-02.jpg);
 height: 240px;
 display: flex;
 justify-content: center;
 align-items: center;
}
.hi h1{
	color: white;
	font-size: 3.5rem;
}
</style>