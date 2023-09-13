<script>
export default {
  components:{},
};
</script>

<template>
  <div class="content">
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 py-5">
        <h1>收藏</h1>
        <div class="table-responsive-lg mt-5">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col" class="text-center">品名</th>
                <th scope="col" class="text-center">分類</th>
                <th scope="col" class="text-center">價格</th>
                <th scope="col" class="text-center">購買</th>
                <th scope="col" class="text-center">取消</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle text-center">
                  <strong>小六鍋貼</strong>
                </td>
                <td class="align-middle text-center">文華高中站</td>
                <td class="align-middle text-center">90</td>
                <td class="align-middle text-center">
                  <div>
                    <button type="button" class="btn">
                      <font-awesome-icon icon="cart-shopping" />
                    </button>
                  </div>
                </td>
                <td class="align-middle text-center">
                  <button type="button" class="btn">X</button>
                </td>
              </tr>
              <tr>
                <td class="align-middle text-center">
                  <strong>檸檬撞芭樂</strong>
                </td>
                <td class="align-middle text-center">大慶站</td>
                <td class="align-middle text-center">80</td>
                <td class="align-middle text-center">
                  <div>
                    <button type="button" class="btn">
                      <font-awesome-icon icon="cart-shopping" />
                    </button>
                  </div>
                </td>
                <td class="align-middle text-center">
                  <button type="button" class="btn">X</button>
                </td>
              </tr>
              <tr>
                <td class="align-middle text-center">
                  <strong>來一客牛排</strong>
                </td>
                <td class="align-middle text-center">大慶站</td>
                <td class="align-middle text-center">130</td>
                <td class="align-middle text-center">
                  <div>
                    <button type="button" class="btn">
                      <font-awesome-icon icon="cart-shopping" />
                    </button>
                  </div>
                </td>
                <td class="align-middle text-center">
                  <button type="button" class="btn">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
