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