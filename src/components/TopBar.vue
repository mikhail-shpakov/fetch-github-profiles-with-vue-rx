<template lang="pug">
v-app-bar(
  color="white"
  app
)
  .d-flex.align-center
    a(
      target="_blank"
      href="https://shpakov.dev"
      rel="noopener"
    )
      v-img.shrink.mr-2(
        alt="Logo"
        width="80"
        :src="require('@/assets/logo.svg')"
      )
  v-spacer
  v-btn(
    href="https://github.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx"
    target="_blank"
    rel="noopener"
    text
  )
    span.mr-2 Репозиторий
    v-icon mdi-github
</template>

<script>
export default {
  name: 'TopBar'
}
</script>
