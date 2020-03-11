<template lang="pug">
v-app
  top-bar
  v-content
    search-profiles
</template>

<script>
import SearchProfiles from './components/SearchProfiles'
import TopBar from './components/TopBar'

export default {
  name: 'App',
  components: {
    TopBar,
    SearchProfiles
  }
}
</script>
