// 載入sweetalert2 可以不用載入css
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
//Swal.mixin 是可以自己設定想要的樣式 不然正常是Swal而已 其他檔案在improt時 要使用 Toast.fire({ 設置的API }) 才能正常執行
export default Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 1200,
  padding: "1em",
  position: "top",
});