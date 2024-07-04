<template>
  <div class="protocol-list">
    <div class="protocol-list__items">
        <div
            v-for="(item,index) in list"
            class="protocol-list__item"
            :class="index === modelValue ? 'protocol-list__item__active':''"
            :key="index"
            @click="onClickProtocol(index)"
        >
          <NuxtIcon class="protocol-list__icon" :name="item.icon" filled />

          <div class="protocol-list__text">
            {{item.title}}
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ list?:Record<string, string>[], modelValue:number }>(),{
  list: () => ([]),
  modelValue: 0
})

const emit = defineEmits<{
"update:modelValue": [index: number]
}>()

function onClickProtocol(index:number):void {
  emit("update:modelValue", index)
}
</script>

<style scoped lang="scss">
.protocol-list {
  padding: 2rem;
  max-height: 37.5rem;
  max-width: 27.875rem;
  width: 100%;
  border-radius: 1.75rem;
  background-color: white;
  box-sizing: border-box;
  flex: none;

  &__icon {
    font-size: 1.75rem;
    margin-right: 1.5rem;
  }

  &__items{
    height: 100%;
    overflow: auto;
    padding-right: 1.875rem;
    box-sizing: border-box;
  }

  &__item {
    display: flex;
    max-width: 22rem;
    flex: auto;
    margin-bottom: 1rem;
    padding: 1.5rem;
    align-items: center;
    border-radius: 1.5rem;

    &:hover {
      background-color: #0094FF12;
      cursor: pointer;
    }

    &__active {
      background-color: #0094FF12;
    }
  }

  &__text {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
  }
}

::-webkit-scrollbar {
  width: 0.375rem;
  height: 0.75rem;
}
::-webkit-scrollbar-thumb {
  background: #F3F5F8;
  border-radius: 1.875rem;
  height: 1.25rem;
}


@media (max-width: 1200px) {
  .protocol-list {
    padding: 1.5rem;
    max-width: max-content;

    &__item {
      padding: 1rem;
    }

    &__text {
      font-size: 1rem;
    }
  }
}

@media (max-width: 992px) {
  .protocol-list {
    &__items {
      padding-right: 0.75rem;
    }

    &__icon {
      margin-right: 1rem;
    }


    &__text {
      font-size: 0.875rem;
    }
  }
}


@media (max-width: 768px) {
  .protocol-list {
    padding: 1rem;

    &__item {
      padding: 0.75rem;
    }
  }
}

@media (max-width: 620px) {
  .protocol-list {
    &__item {
      margin-bottom: 0.75rem;
    }

    &__text {
      font-size: 0.75rem;
    }
  }
}
</style>