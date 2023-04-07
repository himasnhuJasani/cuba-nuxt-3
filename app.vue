<template>
  <NuxtLayout>
    <Head>
      <Title>Cuba</Title>
    </Head>
   
    <NuxtPage />
    </NuxtLayout>
</template>
<script>

import {
    useProductStore
} from '~/store/product'
export default {
    
    mounted() {
        
        let localStorageProducts = JSON.parse(localStorage.getItem('product'))
        if (localStorageProducts ?.length) {
            useProductStore().setInitialCart(localStorageProducts)
        }
        window.addEventListener('beforeunload', (event) => {
            localStorage.setItem('product', JSON.stringify(useProductStore().cart))


        });

    },
}
</script>

