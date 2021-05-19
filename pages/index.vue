<template>
  <div>
    <!-- <div>
		 <ContentTopbar/>
	 </div> -->
    <div>
      <Sliders />
      <div class="container">
        <el-row style="margin-top:50px" :gutter="30">
          <el-col :span="8">
            <div class="banner_sale">
              <img src="~/static/images/banner1.jpg" />
            </div>
          </el-col>

          <el-col :span="8">
            <div class="banner_sale">
              <img src="~/static/images/banner2.jpg" />
            </div>
          </el-col>

          <el-col :span="8">
            <div class="banner_sale">
              <img src="~/static/images/banner1.jpg" />
            </div>
          </el-col>
        </el-row>
      </div>
      <BestSellers />
      <div
        class="banner-test"
        style="display:flex; align-items:center;justify-content: center;flex-direction: column; "
      >
        <div class="all__product__hot__trend1">
          <span>Lời chứng thực</span>
        </div>
        <h5 style="color:white">Khách hàng nói gì</h5>
        <div class="decorative">
          <p class="icon-left"></p>

          <p class="icon-center"></p>

          <p class="icon-right"></p>
        </div>

        <div class="height_slick">
          <div class="container slick1">
            <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
              <div v-for="(item, index) in comments" :key="index">
                <el-card class="box-card ">
                  <div class="box-card-content">
                    <!-- <img :src="require(`~/static/images/${item.image}`)"> -->
                    <div class="info_comment">
                      <img src="~/static/images/hieu.jpg" />
                    </div>

                    <div class="info_client">
                      <h4>{{ item.name }}</h4>
                      <span>{{ item.hihi }}</span>
                    </div>
                  </div>
                  <div>
                    <p>{{ item.title }}</p>
                  </div>
                </el-card>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <AllProducts />
    </div>

    <!-- <div class="zalo-chat-widget" data-oaid="1834753581738813657" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="350" data-height="420"></div>
	<script  src="https://sp.zalo.me/plugins/sdk.js"></script> -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import ContentTopbar from '~/components/header/ContenTopbar'
import Sliders from "~/components/between/Sliders";
import BestSellers from "~/components/between/BestSellers";
import AllProducts from "~/components/between/AllProducts";
export default {
  data() {
    return {
      comments: [
        {
          title:
            "Giá cả rất hợp lý, kiểu dáng sản phẩm phong phú phù hợp với nhiều lứa tuổi, chất lương tốt , thương hiệu uy tín nhất việt nam :)) ",
          name: "Hiệu",
          hihi: "CEO ThemeFTC"
        },
        {
          title:
            "Giá cả rất hợp lý, kiểu dáng sản phẩm phong phú phù hợp với nhiều lứa tuổi, chất lương tốt , thương hiệu uy tín nhất việt nam :)) ",
          name: "Hiệu",
          hihi: "CEO ThemeFTC"
        },
        {
          title:
            "Giá cả rất hợp lý, kiểu dáng sản phẩm phong phú phù hợp với nhiều lứa tuổi, chất lương tốt , thương hiệu uy tín nhất việt nam :)) ",
          name: "Hiệu",
          hihi: "CEO ThemeFTC"
        },
        {
          title:
            "Giá cả rất hợp lý, kiểu dáng sản phẩm phong phú phù hợp với nhiều lứa tuổi, chất lương tốt , thương hiệu uy tín nhất việt nam :)) ",
          name: "Hiệu",
          hihi: "CEO ThemeFTC"
        },
        {
          title:
            "Giá cả rất hợp lý, kiểu dáng sản phẩm phong phú phù hợp với nhiều lứa tuổi, chất lương tốt , thương hiệu uy tín nhất việt nam :)) ",
          name: "Hiệu",
          hihi: "CEO ThemeFTC"
        }
      ],
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },

  components: {
    VueSlickCarousel,
    Sliders,
    BestSellers,
    AllProducts
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.banner-test {
  position: relative;
  background-image: url(https://demo.themeftc.com/osapa//wp-content/uploads/2017/11/banner-tes.jpg?id=2138) !important;
  width: 100%;
  height: 613px;
}

.banner_sale img {
  width: 100%;
}
.banner-test h5 {
  margin: 0;
  font-size: 30px;
}
.banner-test .all__product__hot__trend {
  margin: 20px 46% 20px;
}
.box-card {
  padding: 0;
  margin: 1px 13px 30px;
  width: 350px;
  height: 250px;
}
.slick1 .slick-prev::before {
  position: absolute;

  color: black;
  font-family: unset;
  background-color: white;
  font-size: 25px;
  margin-left: -20px;
  top: -15px;
  padding: 5px;
}
.box-card:hover .slick-prev::before {
  display: block;

  cursor: pointer;
}
.height__slick {
  position: relative;
}
.slick1 .slick-next::before {
  color: black;
  font-family: unset;
  background-color: white;
  font-size: 25px;
  position: absolute;
  top: -15px;
  margin-left: -15px;
  padding: 5px;
}

/* .slick-prev:before {
    
} */
/* .slick-slide {
	width: 300px;
} */
.box-card-content {
  display: flex;
}
.info_comment img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.info_client h4 {
  margin: 10px 0 10px 0;
}
.info_client {
  padding-left: 30px;
}
.info_client span {
  margin-top: 5px;
  font-size: 13px;
  color: #333;
  font-family: Verdana;
}
.slick-prev,
.slick-next {
  z-index: 1;
}

.info_client h5 {
  position: relative;
  left: 30%;
}
.all__product__hot__trend1 {
  display: flex;
  justify-content: center;
  background-color: white;
  text-align: center;
  width: 130px;
  height: 34px;
  position: absolute;
  align-items: center;
  top: 60px;
}
.all__product__hot__trend1::before {
  content: "";
  position: absolute;
  left: -12px;

  border-width: 17px 0px 17px 12px;
  border-style: solid;
  border-color: white transparent white transparent;
}

.all__product__hot__trend1::after {
  content: "";
  position: absolute;
  right: -12px;

  border-width: 17px 12px 17px 0;
  border-style: solid;
  border-color: white transparent white transparent;
}
@media (max-width: 1024px) {
  .height_slick {
    max-width: 900px;
  }
  .box-card {
    padding: 0;
    margin: 1px 13px 30px;
    width: 275px;
    height: 218px;
  }
  th.is-leaf {
    text-align: center;
  }
  .el-table td {
    text-align: center;
  }
}
</style>
