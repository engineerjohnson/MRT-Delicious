<script setup>
import axios from "axios";
import Toast from "./utils/Toast.js";
import { useRouter } from "vue-router";

  const router = useRouter();

  function signIn(value){
    axios.post(`${import.meta.env.VITE_APP_API}/v2/admin/signin`,value)
    .then((res) => {
      const{ token,expired } = res.data;
      document.cookie = `${import.meta.env.VITE_APP_PATH}=${token};expires=${new Date(expired)}; path=/`;
      Toast.fire({
        title : `${res.data.message}`,
        icon : "success",
      });
      router.push("/admin/products");
    })
    .catch((err) => {
      Toast.fire({
        title : `${err.data.message}`,
        icon : "success",
      });
    });
  }
</script>

<template>
  <div class="container h-100vh text-center mt-5">
    <div class="w-50 m-auto">
      <h1>登入</h1>
      <VForm class="form-signin" v-slot="{ errors }" @submit="signIn">
        <div class="form-floating mb-3">
          <VField :class="{ 'is-invalid': errors['email'] }" rules="required|email" label="信箱" name="username" type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></VField>
          <label for="floatingInput">請填寫email</label>
          <ErrorMessage name="email" class="invalid-feedback mt-3" />
        </div>
        <div class="form-floating mb-3">
          <VField :class="{ 'is-invalid': errors['password'] }" rules="required" label="密碼" name="password" type="password" class="form-control" id="floatingPassword" placeholder="password"></VField>
          <label for="floatingPassword">請填寫密碼</label>
          <ErrorMessage name="password" class="invalid-feedback" />
        </div>
        <button type="submit" class="btn btn-lg btn-primary w-100 mt-3" >登入</button>
      </VForm>
    </div>
  </div>
</template>

<style scoped>
  .h-100vh{
    height: 100vh;
  }

</style>