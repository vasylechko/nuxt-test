<template>
  <div class="protocols">
    <ProtocolsListMobile
        v-if="isMobileBreakpoint"
        class="protocolListMobile"
        v-model="selectedProtocol"
        :list="protocolList"
    />

    <ProtocolsList v-else v-model.number="selectedProtocol" :list="protocolList"/>

    <ProtocolsLinks :links="data[selectedProtocol].services" :key="selectedProtocol"/>
  </div>
</template>

<script setup lang="ts">
import useBreakpoint from "../../services/mobile.service";
import type {IProtocolServices}  from "~/configs/data";

const props = withDefaults(defineProps<{ data?: IProtocolServices[]}>(),{
  data: () => ([])
})

const { isMobileBreakpoint } = useBreakpoint();

const selectedProtocol = ref<number>(0);

const protocolList = computed(():Record<string, string>[] => props.data.map( (item:IProtocolServices) => {
  const fileNameWithExtension:string = item.icon.split('/').pop();
  const [icon] = fileNameWithExtension?.split('.');

  return {
    title:item.title,
    icon
  }
}))
</script>

<style scoped>
.protocols{
  display: flex;
  column-gap: 1.875rem;
  margin: 0 auto;
  height: 100%;
  max-width: 87.5rem;
}

@media (max-width: 768px) {
  .protocols {
    flex-direction: column;
  }

  .protocolListMobile {
    margin-bottom: 1.5rem;
  }
}
</style>