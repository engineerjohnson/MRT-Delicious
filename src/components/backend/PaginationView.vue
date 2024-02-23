<script setup>
const props = defineProps({
  onSubmit: Function,
  pagination:Object
});
function submitPage(page) {
  props.onSubmit(page);
}
</script>
<template>
  <nav aria-label="Page navigation example" v-if="props.pagination">
    <ul class="pagination justify-content-center mt-4">
      <li class="page-item">
        <button type="button" class="page-link" href="#" @click="submitPage(1)">
          <svg
            class="text-info"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            style="fill: #0d6efd"
          >
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
            />
          </svg>
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          href="#"
          @click="submitPage(props.pagination.current_page - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            style="fill: #0d6efd"
          >
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
      </li>
      <template v-for="item in props.pagination.total_pages" :key="item">
        <template
          v-if="
            item > props.pagination.current_page - 3 &&
            item < props.pagination.current_page + 3
          "
        >
          <li class="page-item">
            <button
              class="page-link"
              :class="{
                disabled: item == props.pagination.current_page,
              }"
              @click="submitPage(item)"
              href="#"
              :disabled="item == props.pagination.current_page"
            >
              {{ item }}
            </button>
          </li>
        </template>
      </template>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          href="#"
          @click="submitPage(props.pagination.current_page + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            style="fill: #0d6efd"
          >
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
          </svg>
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          href="#"
          @click="submitPage(props.pagination.total_pages)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            style="fill: #0d6efd"
          >
            <path
              d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
