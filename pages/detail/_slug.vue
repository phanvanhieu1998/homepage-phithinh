<template>
  <div class="container">
    <el-breadcrumb
      style="padding-top:30px"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>

      <el-breadcrumb-item>Chi tiết sản phẩm</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="detail" v-loading="loading">
      <div style="margin-right:50px">
        <div class="slick2">
          <VueSlickCarousel
            v-if="detail.images"
            ref="c2"
            :asNavFor="$refs.c1"
            :slidesToShow="5"
            :focusOnSelect="true"
          >
            <div v-for="(item, index) in detail.images" :key="index">
              <div class="detail__product">
                <img :src="item" />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div style="margin-right:50px">
        <div class="slick">
          <VueSlickCarousel
            v-if="detail.images"
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true"
          >
            <div v-for="(item, index) in detail.images" :key="index">
              <div class="detail__product1">
                <img :src="item" />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div style="margin-left:50px">
        <div>
          <p>{{ detail.name }}</p>

          <span v-if="detail.sale_price"
            >{{ detail.sale_price.toLocaleString("it-IT") }}đ</span
          >

          <el-form :model="dataProduct" :rules="rules" ref="dataProduct">
            <div class="detail__size">
              <el-form-item class="lable" label="Sizes" prop="value">
                <el-select v-model="dataProduct.value" placeholder="Chọn size">
                  <el-option
                    v-for="item in detail.sizes"
                    :key="item.id"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-form-item label="Màu Sắc" prop="value1">
              <el-select
                v-model="dataProduct.value1"
                placeholder="Chọn màu sắc"
              >
                <el-option
                  v-for="item in detail.colors"
                  :key="item.id"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <template>
            <el-input-number
              v-model="dataProduct.num"
              :min="1"
              :max="detail.amount"
            ></el-input-number>
            <span style="padding-left:30px"
              >Sản phẩm có sẵn {{ detail.amount }}</span
            > </template
          ><br />
          <el-button
            style="margin-top:30px"
            @click="addToCart('dataProduct')"
            type="primary"
            >Thêm vào giỏ hàng</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import ContentTopbar from '~/components/header/ContenTopbar'

export default {
  data() {
    return {
      dataProduct: {
        num: 1,
        value: "",
        value1: ""
      },
      loading: false,
      rules: {
        value: [
          { required: true, message: "Vui lòng chọn size", trigger: "blur" }
        ],
        value1: [
          { required: true, message: "Vui lòng chọn color", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$store.dispatch("detail/detail", this.sluggg).then(res => {
        //  console.log(res)
        this.loading = false;
      });
    },
    addToCart(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          delete this.detail.category;
          delete this.detail.summary;
          delete this.detail.description;
          delete this.detail.brand;
          delete this.detail.supplier;
          delete this.detail.meta_title;
          delete this.detail.meta_description;
          delete this.detail.colors;
          delete this.detail.sizes;

          this.$store
            .dispatch("detail/addToCart", {
              product: this.detail,
              quantity: this.dataProduct.num,
              colors: this.dataProduct.value1,
              sizes: this.dataProduct.value
            })
            .then(res => {
              this.open();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    open() {
      this.$notify.success({
        title: "Success",
        message: "Thêm Sản Phẩm Thành Công",
        offset: 100
      });
    }
  },

  mounted() {
    this.loadData();

    // console.log(this.hihi)
  },
  computed: {
    ...mapState({
      detail: state => state.detail.detail
    }),

    sluggg() {
      return this.$route.params.slug;
    }
  },
  components: {
    VueSlickCarousel
  }
};
</script>

<style>
.detail__product {
  display: flex;
  width: 100px;
}
.detail__product img {
  width: 100px;
}
.detail__product1 {
  width: 350px;
}
.detail__product1 img {
  width: 500px;
}
.alick2 {
  margin-left: 10px;
}
.slick-slide {
  width: 100px;
}
.slick2 .slick-slide {
  width: 100px !important;
}
.slick .slick-slider {
  width: 500px !important;
}
.detail {
  display: flex;
  padding-top: 40px;
}
.slick2 .slick-track {
  display: flex;
  flex-direction: column;
}
.detail__size .el-form-item__label {
  padding-right: 34px;
}
.slick .slick-next:before {
  color: black;
  font-family: unset;
  background-color: white;
  font-size: 25px;
  margin-left: -66px;

  padding: 5px;
}
.slick .slick-prev::before {
  color: black;
  font-family: unset;
  background-color: white;
  font-size: 25px;
  margin-left: 25px;

  padding: 5px;
}
</style>
