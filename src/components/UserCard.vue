<template lang="pug">
v-card.ma-4(
  max-width="340px"
)
  v-img.white--text.align-end(
    :alt="`profile_avatar_${user.login}`"
    :src="user.avatar_url"
    gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
  )
    v-card-title(v-text='user.login')
  v-card-subtitle ID {{ user.id }}
  v-card-actions
    v-btn(
      :href="user.html_url"
      target="_blank"
      rel="noopener"
      text
    ) Открыть профиль
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
