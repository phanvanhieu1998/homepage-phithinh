<template>
  <div class="container">
    <el-card class="box-card hieu">
      <el-row>
        <el-col :span="24">
          <div>
            <h2>ĐẶT HÀNG THÀNH CÔNG</h2>
            <p>
              - Sản phẩm của Quý khách sẽ được chuyển đến địa chỉ có trong phần
              Thông tin khách hàng của chúng tôi sau thời gian 2 đến 3 ngày,
              tính từ thời điểm này.
            </p>
            <p>
              - Nhân viên bán hàng sẽ liên hệ với Quý khách qua số điện thoại để
              xác nhận trước khi giao hàng 24 tiếng.
            </p>
            <p>
              - Địa chỉ: Tổ 2, phường Tân Thịnh, TP Thái Nguyên.
            </p>
            <b>
              Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng Phí Thịnh Shop!
            </b>
            <div style="margin-top:20px">
              <b>
                Mọi thắc mắc liên hệ:
                <span style="color:#007bff">0378888918</span>
              </b>
            </div>
            <el-button @click="home" style="margin-top:20px" type="primary"
              >Trang Chủ</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.hieu {
  width: 500px;
  height: 400px;
}
</style>
