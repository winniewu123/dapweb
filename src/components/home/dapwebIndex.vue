<template>
  <div>
    <dapweb-header></dapweb-header>
    <hr/>
    <div>
      这是首页，嘻嘻嘻。
    </div>
    <hr/>
    <dapweb-footer></dapweb-footer>
  </div>
</template>
<script>
import dapwebHeader from '@/components/common/dapwebHeader.vue'
import dapwebFooter from '@/components/common/dapwebFooter.vue'

export default {
  name: 'dapwebIndex',
  // dapwebHeader/dapwebFooter组件给申明到components里面然后在template里面使用
  components: { dapwebHeader, dapwebFooter }
}
</script>