import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useModalStore = defineStore("modal",() => {
  const modalState = ref(false);

  function modalShow(){
    modalState.value = true;
  }

  function modalClose(){
    modalState.value = false;
  }

  //如果是開啟 就對body新增hidden 避免在開啟時旁邊有滾動軸
  watch(()=>modalState.value,(newValue)=>{
    if(newValue) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      setTimeout(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
      }, 300);
    }
  });

  return{ modalState, modalShow, modalClose };
});