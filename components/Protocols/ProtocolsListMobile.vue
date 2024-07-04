<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="custom-select__container"  @click="open = !open">
      <NuxtIcon class="custom-select__container-icon" :name="selected.icon" filled />

      <div class="custom-select__container-text" :class="{ open: open }">
        {{ selected.title }}
      </div>

      <NuxtIcon class="custom-select__container-arrow" name="arrowDown" filled />
    </div>

    <div class="custom-select__items" :class="{ selectHide: !open }">
      <div
          v-for="(option, index) of list"
          class="custom-select__item"
          :key="index"
          @click="onClickItem(option, index)"
      >
        <NuxtIcon class="custom-select__item-icon" :name="option.icon" filled/>

        <div class="custom-select__item-text">
          {{ option.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ list?:Record<string, string>[], modelValue:number,tabindex:number }>(),{
  list: () => ([]),
  modelValue: 0,
  tabindex: 0
})

const emit = defineEmits<{
  "update:modelValue": [index: number]
}>()

const selected = ref<Record<string, string>>(props.list[props.modelValue] )

const open = ref<boolean>(false);

function onClickItem(option:Record<string, string>, index:number):void {
  selected.value = option;
  open.value = false;

  emit("update:modelValue", index);
}
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  line-height: 3rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #FEFEFE;
  border-radius: 1.5rem;

  &__item-icon,
  &__container {
    display: flex;
    align-items: center;
  }

  &__container-icon {
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }

  &__container-arrow{
    margin-left: auto;
  }


  &__items {
    color: #131727;
    border-radius: 1.5rem;
    overflow: hidden;
    position: absolute;
    background-color: white;
    padding: 1.375rem 1.5rem;
    top: 6.25rem;
    left: 0;
    right: 0;
    width: inherit;
    z-index: 1;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  &__item {
    display: flex;
    align-items: center;
    color: #131727;
    cursor: pointer;
    user-select: none;
  }

  &__container-text {
    color: #131727;
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }
}

.selectHide {
  display: none;
}
</style>
