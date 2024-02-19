<script setup>
import { ref } from "vue";

const props = defineProps({
  formSchema: null,
});

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
          <VField :as="item.as" :name="item.name" :value="item.value">
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
            :value="true"
            :unchecked-value="false"
          >
            <label :for="item.name">
              <input
                v-bind="field"
                :type="item.type"
                :id="item.name"
                :value="true"
              />
              {{ item.label }}
            </label>
          </VField>
        </div>
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
</style>
