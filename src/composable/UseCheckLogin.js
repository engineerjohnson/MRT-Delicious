import axios from "axios";
import Toast from "../utils/Toast.js";
import { useRouter } from "vue-router";

export function UseCheckLogin(){

  const router = useRouter();
  console.log(router)
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)deliciousfood\s*=\s*([^;]*).*$)|^.*$/,"$1",);//取得cookie的deliciousfood值
    axios.defaults.headers.common.Authorization = token;
  // this.$http 通常是一個指向 HTTP 請求，如 Axios。
  // defaults.headers.common 是 HTTP 請求庫的一種方式来設置全局的請求頭。
  // common 是一個常見的請求頭配置，適用于所有請求。
  // Authorization 是請求頭的名稱，通常用於傳遞身份驗證信息。

  function checkLogin(){
    axios.post(`${import.meta.env.VITE_APP_API}/v2/api/user/check`)
    .then(() => {
    })
    .catch((err) => {
      Toast.fire({
        title : `${err.response.data.message}`,
        icon : "error",
      });
      router.push("/login");
    });
  }
  return { checkLogin };

}