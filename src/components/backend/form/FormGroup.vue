<script setup>
import { ref } from "vue";

const props = defineProps({
  formSchema: null,
  pageDate:null
});

const pageDate = ref(props.pageDate)
const fieldFocus = ref({});

function updateFocus(fieldName, focus) {
  fieldFocus.value[fieldName] = focus;
}
</script>

<template>
  <div class="row">
    <template v-for="(item, index) in props.formSchema" :key="index">
      <div
        :class="{
          'col-6': ['category', 'price', 'origin_price', 'unit'].includes(
            item.name
          ),
        }"
      >
        <VField
          v-if="item.as === 'input'"
          v-slot="{ field, errorMessage }"
          :name="item.name"
          :rules="item.rules"
          v-model="pageDate[item.name]"
        >
          <div
            class="form-group"
            :class="{ focus: fieldFocus[item.name], error: errorMessage }"
          >
            <label :for="item.name">{{ item.label }}</label>
            <input
              v-bind="field"
              :type="item.type"
              :id="item.name"
              :placeholder="item.placeholder"
              @focus="updateFocus(item.name, true)"
              @blur="updateFocus(item.name, false)"
            />
          </div>
          <p class="text-danger">{{ errorMessage }}</p>
        </VField>
        <div
          v-else-if="item.as === 'select'"
          class="form-group mb-3"
          :class="{ focus: fieldFocus[item.name] }"
        >
          <label :for="item.name">{{ item.label }}</label>
          <VField :as="item.as" :name="item.name" :value="item.value"
          v-model="pageDate[item.name]">
            <option
              v-for="(option, optionIndex) in item.options"
              :key="optionIndex"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </VField>
        </div>
        <div v-else-if="item.as === 'checkbox'">
          <VField
            :type="item.type"
            v-slot="{ field }"
            :name="item.name"
          >
            <label :for="item.name">
              <input
                v-bind="field"
                :type="item.type"
                :id="item.name"
                :name="item.name"
                :value="pageDate[item.name] ? true : false"
              />
              {{ item.label }}
            </label>
          </VField>
        </div>
        <VField
          v-slot="{ field }"
          :name="item.name"
          v-else-if="item.as === 'textarea'"
          v-model="pageDate[item.name]"
        >
        <div class="form-group mb-3">
          <label :for="item.name">{{ item.label }}</label>
          <textarea :id="item.name" :name="item.name" :rows="item.name === 'imageUrl' ? 4 : 2 " v-bind="field"></textarea>
        </div>
        <img v-if="item.name === 'imageUrl'" :src="pageDate[item.name]" :alt="pageDate.title" class="mb-3">
        </VField>
      </div>
    </template>
  </div>
</template>

<style scoped>
.form-group {
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  background-color: white;
  padding: 5px;
}
.form-group.error {
  background-color: rgb(236, 202, 202);
}
.form-group.error {
  border-color: red;
}
.form-group.focus {
  border-color: blue;
  background-color: white;
}
.form-group label {
  display: block;
}
.form-group input {
  border: none;
  display: block;
  width: 100%;
  background-color: transparent;
}

.form-group select {
  border: none;
  display: block;
  width: 100%;
}
.form-group input:focus-visible,
.form-group select:focus-visible {
  outline: none;
}
input::placeholder {
  font-size: 14px;
}
textarea{
  width: 100%;
  border: none;
}
label{
  color: rgba(0, 0, 0, 0.6);
}
img{
  max-width: 100%;
}
</style>
