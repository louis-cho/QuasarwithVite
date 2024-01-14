<script>
import { useQuasar, QSpinnerGears, QSpinnerFacebook  } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      showLoading () {
        $q.loading.show()

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 2000)
      },

      customizedShowLoading () {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'yellow',
          spinnerSize: 140,
          backgroundColor: 'green',
          message: 'Some important process is in progress. Hang on...',
          messageColor: 'black'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      },

      showAndChangeLoading () {
        $q.loading.show({
          message: 'First message. Gonna change it in 3 seconds...'
        })

        timer = setTimeout(() => {
          $q.loading.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            messageColor: 'black',
            backgroundColor: 'yellow',
            message: 'Updated message'
          })

          timer = setTimeout(() => {
            $q.loading.hide()
            timer = void 0
          }, 2000)
        }, 2000)
      }
    }
  }
}
</script>

<template>
  
  <div class="q-pa-md">
    <q-btn color="purple" @click="showLoading" label="기본 로딩 보여주기" />
  </div>
 <div class="q-pa-md">
    <q-btn color="red" @click="customizedShowLoading" label="커스터마이즈 로딩 보여주기" />
  </div>
  <div class="q-pa-md">
    <q-btn color="primary" @click="showAndChangeLoading" label="로딩 후 변화 보여주기" />
  </div>
</template>

<style scoped>
</style>
