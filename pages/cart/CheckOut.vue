<template>
  <div>
    <el-card class="box-card98" v-if="cart && cartTotalPrice">
      <div class="checkout">
        <p>Thông Tin Nhận Hàng</p>
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
          placeholder="Nhập họ tên của bạn"
        >
        </el-input>

        <div class="icon__checkout">
          <i class="el-icon-user"></i>
        </div>

        <el-input
          type="number"
          v-model="ruleForm.phone"
          autocomplete="off"
          placeholder="Nhập số điện thoại của bạn"
        >
        </el-input>

        <div class="icon__checkout1">
          <i class="el-icon-phone-outline"></i>
        </div>

        <el-input
          type="email"
          v-model="ruleForm.email"
          placeholder="Nhập địa chỉ email của bạn"
        >
        </el-input>

        <div class="icon__checkout2">
          <i class="el-icon-edit-outline"></i>
        </div>

        <el-input
          type="text"
          v-model="ruleForm.address"
          placeholder="Nhập địa chỉ của bạn"
        >
        </el-input>

        <div class="icon__checkout3">
          <i class="el-icon-location"></i>
        </div>

        <el-input
          type="text"
          v-model="ruleForm.total"
          placeholder="Tổng giá trị đơn hàng"
        >
        </el-input>

        <div class="icon__checkout3">
          <i class="el-icon-location"></i>
        </div>

        <el-input
          type="textarea"
          v-model="ruleForm.message"
          :rows="4"
          placeholder="Ghi chú (nếu có)"
        >
        </el-input>

        <el-button style="margin: 20px 0" @click="checkout" type="primary"
          >Đặt Hàng</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        details: [],
        total: ""
      }
    };
  },
  mounted() {
    // this.ruleForm.details = this.cart
    console.log("---------------");
    this.cart.forEach(element => {
      this.ruleForm.details.push({
        product_id: element.product.id,
        quantity: element.quantity,
        size: element.sizes,
        color: element.colors
      });
    });
    console.log(this.ruleForm.details);
    this.ruleForm.total = this.cartTotalPrice;
  },
  methods: {
    checkout() {
      // this.ruleForm.phone = parseInt(this.ruleForm.phone)
      this.$store.dispatch("checkout/checkout", this.ruleForm).then(res => {
        this.$store.commit("detail/SET_DELETE_CHECKOUT");
        this.open1();
        this.$router.push("./Complate");
      });
    },
    open1() {
      this.$message({
        message: "Đặt hàng thành công",
        type: "success"
      });
    }
  },
  computed: {
    ...mapState({
      cart: state => state.detail.cart
    }),
    ...mapGetters({
      cartTotalPrice: "detail/cartTotalPrice"
    })
  }
};
</script>

<style>
.checkout {
  margin: 0 auto;
  position: relative;
  width: 50%;
  height: auto;
  border: 1px solid #e6e6e6;
  padding: 30px;
}
.checkout p {
  text-align: center;

  font-size: 20px;
}
.checkout .el-input__inner {
  margin: 20px 0;
  padding: 0 40px;
}
.icon__checkout {
  position: absolute;
  top: 17.5%;
  left: 40px;
  font-size: 20px;
}
.icon__checkout1 {
  position: absolute;
  top: 28.5%;
  left: 40px;
  font-size: 20px;
}
.icon__checkout2 {
  position: absolute;
  top: 40.5%;
  left: 40px;
  font-size: 20px;
}
.icon__checkout3 {
  position: absolute;
  top: 52%;
  left: 40px;
  font-size: 20px;
}
</style>
