<template>
  <div class="container">
 
    <el-table :data="cart" style="width: 100%">
      <el-table-column label="Sản Phẩm" width="180px">
        <template slot-scope="scope" v-if="cart">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.product.images[0]"
          >
          </el-image>
        </template>
      </el-table-column>

      <el-table-column label="Tên Sản phẩm" width="180px">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.product.name }}</span>
          <span style="margin-left: 10px">
            Giá:{{
              scope.row.product.sale_price.toLocaleString("it-IT")
            }}đ</span
          >
        </template>
      </el-table-column>

      <el-table-column label="Số Lượng" width="200px">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.quantity"
            :min="1"
            :max="detail.amount"
          ></el-input-number>
        </template>
      </el-table-column>

      <el-table-column label="Size" width="180px">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sizes }}</span>
        </template>
      </el-table-column>
	  
      <el-table-column label="Màu Sắc" width="180px">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.colors }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Trạng Thái" width="180px">
        <template slot-scope="scope">
          <el-popconfirm
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            icon="el-icon-info"
            icon-color="red"
            title=" xóa sản phẩm này?"
            @confirm="clearProduct(scope.row)"
          >
            <el-button slot="reference" size="mini" type="danger"
              ><i class="el-icon-delete"></i> Xóa
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="productPayment">
      <strong style="margin-right: 20px"
        >Tổng tiền hàng {{ cartTotalPrice.toLocaleString("it-IT") }}đ</strong
      >
      <el-button type="success">Thanh Toán</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      numberProduct: [],
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.detail.cart,
      detail: (state) => state.detail.detail,
      message: (state) => state.detail.haha,
    }),

    ...mapGetters({
      cartTotalPrice: "detail/cartTotalPrice",
    }),
  },
  methods: {
    clearProduct(row) {
      this.$store.dispatch("detail/deleteProduct", row).then((res) => {
        this.numberProduct = this.cart;
      });
    },
    number(row) {
      let quantity = {
        id: row.product.id,
        quantity: row.quantity,
        sizes: row.sizes,
        colors: row.colors,
      };

      this.$store.commit("detail/SET_QUANTITY", quantity);
    },

    local() {
      let cart = localStorage.getItem("cart");
      if (cart !== undefined && cart !== null) {
        this.$store.commit(
          "detail/SET_CART_FROM_LOCAL",
          JSON.parse(localStorage.getItem("cart"))
        );
      }
    },
  },

  mounted() {
    this.numberProduct = this.cart;
    this.local();
  },
};
</script>

<style>
.productPayment {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 0;
}
th.is-leaf {
  text-align: center;
}
.el-table td {
  text-align: center;
}
</style>





