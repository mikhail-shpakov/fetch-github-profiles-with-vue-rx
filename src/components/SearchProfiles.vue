<template lang="pug">
v-container.mb-10
  v-row.text-center
    v-col.mb-4
      h1.display-2.font-weight-bold.mb-3.mt-12
        | Поиск по профилям Github
      p.subheading.font-weight-regular
        | Простой пример использования Vue Rx
        |  при ассинхронной работе с API на примере Github API
  v-text-field.mb-12(
    v-model="profileName"
    color="black"
    label="Профиль Github"
    prepend-icon="mdi-magnify"
  )

  v-img.ma-auto(
    v-if="profileName === ''"
    alt="profiles"
    width="360"
    height="350"
    :src="require('@/assets/profiles.svg')"
  )

  .text-center.pt-12(v-else-if="isLoading")
    v-progress-circular(
      :size="70"
      :width="7"
      color="#4d3b3b"
      indeterminate
    )

  template(v-else-if="result && result.length !== 0")
    v-row
      v-col(
        v-for="(user, index) in result"
        :key="index"
        md="4"
      )
        user-card(
          :user="user"
        )

  .text-center(v-else-if="result && result.length === 0")
    v-img.ma-auto(
      alt="empty"
      width="360"
      height="350"
      :src="require('@/assets/empty.svg')"
    )
    .mt-10 Пользователи с таким именем не найдены
</template>

<script>
import UserCard from './UserCard'
import { EMPTY } from 'rxjs'
import {
  pluck,
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  filter
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const url = 'https://api.github.com/search/users?q='

export default {
  name: 'SearchProfiles',
  components: {
    UserCard
  },
  data () {
    return {
      profileName: '',
      isLoading: false
    }
  },
  subscriptions () {
    return {
      result: this.$watchAsObservable('profileName')
        .pipe(
          pluck('newValue'),
          filter(v => v.trim()),
          tap(() => { this.isLoading = true }),
          debounceTime(1000),
          distinctUntilChanged(),
          tap(() => { this.isLoading = true }),
          switchMap(v => ajax.getJSON(url + v).pipe(
            catchError(() => EMPTY)
          )),
          tap(() => { this.isLoading = false }),
          map(response => response.items)
        )
    }
  }
}
</script>

<style scoped>
div.mb-10 {
  max-width: 960px;
}
</style>
