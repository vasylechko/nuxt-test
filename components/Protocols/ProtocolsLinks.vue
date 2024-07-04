<template>
  <div class="protocol-links">
    <div class="protocol-links__tabs">
      <div
          v-for="(link, name, index) in links"
          class="protocol-links__tab "
          :class="selectedProtocol === name ? 'protocol-links__tab__active' : ''"
          :key="index"
          @click="onClickLink(name)"
      >
        <NuxtIcon class="protocol-links__tab-icon" :name="name" />

        <div class="protocol-links__tab-text">{{ name }}</div>
      </div>
    </div>

    <div class="protocol-links__items">
        <NuxtLink
            v-for="(link,index) in links[selectedProtocol]"
            class="protocol-links__item"
            :to="link.link"
            target="_blank"
            :key="index"
        >
          <NuxtIcon class="protocol-links__item-icon"  :name="selectedIcon(link.icon)" filled />

          <div class="protocol-links__item-text">{{ link.name }}</div>

          <NuxtIcon class="protocol-links__item-arrow" name="outWard" filled/>
        </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IProtocolService, TypeService} from "~/configs/data";

withDefaults(defineProps<{ links?:Partial<Record<TypeService, IProtocolService[]>>}>(),{
  links: () => ({}),
})


const selectedProtocol = ref<string>("bridges")

function selectedIcon(selectedIcon:string): string {
  let fileNameWithExtension:string|undefined = selectedIcon.split('/').pop();
  let [icon] = fileNameWithExtension?.split('.');

  return icon
}

function onClickLink(name:string):void {
  selectedProtocol.value = name;
}
</script>

<style scoped lang="scss">
.protocol-links {
  padding: 2rem;
  border-radius: 1.75rem;
  background-color: white;
  width: 100%;

  &__tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px  solid #F3F5F8;
  }

  &__tab {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 0;
    border-right: 1.75rem;
    border-radius: 1.5rem;
    cursor: pointer;

    &__active {
      background-color: #0094FF12;
    }

    &:hover {
      background-color: #0094FF12;
    }
  }

  &__tab-icon {
    font-size: 0.875rem;
    margin-right: 1rem;
  }

  &__tab-text {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
    text-transform: capitalize;
  }

  &__items {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);
    padding-top: 2rem;
    padding-right: 2.625rem;
    overflow: auto;
  }

  &__item {
    text-decoration: none;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    border-radius: 1.5rem;
    border: 1px solid #F3F5F8;
    cursor: pointer;
  }

  &__item-arrow {
    font-size: 0.875rem;
  }

  &__item-icon {
    margin-right: 1.25rem;
    font-size: 1.75rem;
  }

  &__item-text {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.625rem;
    color: #131727;
  }

  &__item-icon {
    margin-right: 0.75rem;
  }

  &__item-arrow {
    margin-left: auto;
    font-size: 0.75rem;
  }
}

@media (max-width: 1200px) {
  .protocol-links{
    padding: 1.5rem;

    &__item-text,
    &__tab-text{
      font-size: 1rem;
    }

    &__item {
      padding: 1rem;
    }
  }
}

@media (max-width: 992px) {
  .protocol-links {
    &__tab {
      padding: 0.375rem;
    }

    &__item-icon,
    &__tab-icon {
      margin-right: 0.5rem;
    }

    &__item-text,
    &__tab-text{
      font-size: 0.875rem;
    }

    &__item-icon {
      font-size: 1rem;
    }
  }

}
@media (max-width: 768px) {
  .protocol-links {
    width: auto;

    &__tabs {
      overflow: auto;
      padding-bottom: 2rem;

      &::-webkit-scrollbar { display: none; }
    }

    &__tab {
      padding: 0.5rem 1.25rem;
    }

    &__item-text,
    &__tab-text{
      font-size: 1.125rem;
    }

    &__tab-text {
      font-weight: 500;
      line-height: 2rem;
    }

    &__item {
      padding: 1.25rem 1.5rem;
    }

    &__tab-icon {
      margin-right: 0.75rem;
    }

    &__item-icon {
      margin-right: 1.25rem;
      font-size: 1.5rem;
    }

  }
}

@media (max-width: 620px) {
  .protocol-links {
    &__items {
      grid-template-columns: 1fr;
      grid-template-rows: max-content;
      padding-right: 1.625rem;
      height: 18.75rem;
    }

    &__item {
      height:max-content ;
    }

    ::-webkit-scrollbar {
      padding-top: 1.25rem;
      width: 0.375rem;
      height: 0.75rem;
    }
    ::-webkit-scrollbar-thumb {
      background: #F3F5F8;
      border-radius: 1.875rem;
      height: 1.25rem;
    }
  }
}
</style>