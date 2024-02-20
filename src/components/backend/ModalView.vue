<script setup>
import { useModalStore } from "../../stores/backend/ModalStore.js";
import { vOnClickOutside } from "@vueuse/components";
import { watch } from "vue";

const props = defineProps({
  show: Boolean,
  submit: Function,
  modalName: String,
});

const emit = defineEmits(["update:show"]);

function close() {
  emit("update:show", false);
}

const modal = useModalStore();

watch(
  () => modal.modalState,
  (value) => {
    if (value) {
      // show = true, 把顯示modal設置為當前的modal
      modal.currentName = props.modalName;
      console.log(modal.currentName);
    } else {
      //  show = false, 並且沒有其他要顯示的modal，把顯示modal設置為null
      if (modal.currentName === props.modalName) {
        modal.currentName = null;
      }
    }
  }
);

function handleSubmit(data) {
  console.log(data);
  const arr = Object.keys(data);
  if (arr.length === 0) {
    //判斷物件裡面有沒有值 沒有就直接執行submit 例:刪除modal
    props.submit();
  } else {
    props.submit(data);
  }
}
</script>

<template>
  <Teleport to="body">
    <transition name="modal" :duration="200">
      <div v-if="props.show" class="modal">
        <div class="border rounded w-50 bg-white modalOverflow" v-on-click-outside="close">
          <div class="d-flex justify-content-between border-bottom p-3">
            <slot name="modal-head"></slot>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="border-bottom px-3">
            <VForm @submit="handleSubmit" class="mt-3">
              <slot name="modal-body"></slot>
              <div class="p-3 text-end">
                <button
                  class="btn btn-secondary me-2"
                  type="button"
                  @click="close"
                >
                  取消
                </button>
                <button class="btn btn-primary" type="submit">確定</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </transition>
    <transition
      v-if="props.show"
      name="model-bg"
      :duration="{ enter: 0, leave: 200 }"
    >
      <div class="model-bg"></div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  transform: translateY(75%);
}
.model-bg {
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.modalOverflow{
  overflow-y: auto;
}
</style>
