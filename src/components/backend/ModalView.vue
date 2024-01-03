<script setup>
import { useModalStore } from "../../stores/backend/ModalStore.js";
import { vOnClickOutside } from "@vueuse/components";

const props = defineProps({
  submit: Function
});

const modal = useModalStore();
</script>

<template>
    <Teleport to="body">
    <transition name="modal" :duration="200">
      <div v-if="modal.modalState" class="modal">
        <div class="border rounded w-50 bg-white" v-on-click-outside="modal.modalClose">
          <div class="d-flex justify-content-between border-bottom p-3">
            <slot name="modal-head"></slot>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="modal.modalClose"></button>
          </div>
          <div class="border-bottom p-3">
            <slot name="modal-body"></slot>
          </div>
          <div class="p-3 text-end">
            <button class="btn btn-secondary me-2" type="button" @click="modal.modalClose">取消</button>
            <button class="btn btn-primary" type="button" @click="props.submit">確定</button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="modal.modalState" name="model-bg" :duration="{ enter: 0, leave: 200 }">
      <div class="model-bg"></div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-enter-active, .modal-leave-active {
  transition: all 0.2s ease;
}
.modal-enter-from, .modal-leave-to {
  transform: translateY(75%);
}
.model-bg{
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>