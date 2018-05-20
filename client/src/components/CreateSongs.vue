<template>
    <v-container fluid>
      <div class="elevation-2">
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title>Create Song</v-toolbar-title>
      </v-toolbar>
        <v-form lazy-validation class="pt-4 pr-2 pl-2 pb-4">
          <v-layout>
            <v-flex lg5 pr-3 pl-3>
              <v-text-field pb-3
                v-model="title"
                label="Song name"
                :rules="textRulles"
                box
                required
              ></v-text-field>

              <v-text-field
                v-model="artist"
                label="Artist name"
                :rules="textRulles"
                box
                required
              ></v-text-field>

              <v-select
                :items="genres"
                v-model="genre"
                :rules="[v => !!v || 'Genre is required']"
                label="Song genre"
                box
                single-line
              ></v-select>

              <v-text-field
                v-model="album"
                label="Album"
                :rules="textRulles"
                box
                required
              ></v-text-field>

              <v-text-field
                v-model="albumImageUrl"
                label="Album Image"
                box
              ></v-text-field>
            </v-flex>
            <v-flex lg-7 pr-3 pl-3>
              <v-text-field
                v-model="youtubeId"
                label="YouTube ID"
                :rules="textRulles"
                box
                required
              ></v-text-field>

              <v-text-field
                v-model="lyrics"
                label="Lyrics"
                multi-line
                box
              ></v-text-field>

              <v-text-field
                v-model="tab"
                label="Tab"
                multi-line
                box
              ></v-text-field>
            </v-flex>
          </v-layout>

          <div class="error">{{errors}}</div>
          <div class="text-center">
            <v-btn color="primary"
              :disabled="!formIsValid"
              @click="saveSong"
            >Save song</v-btn>
            </div>
        </v-form>
      </div>
    </v-container>
</template>

<script>
import SongServise from '../servises/SongsServise'

export default {
  name: 'Songs-create',
  data () {
    return {
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImageUrl: '',
      youtubeId: '',
      lyrics: '',
      tab: '',

      genres: ['rock', 'pop', 'jaz', 'electro'],
      errors: null,
      textRulles: [
        v => !!v || 'This field is required',
        v => v.length > 4 || 'Minimum 4 chars'
      ]
    }
  },
  methods: {
    async saveSong () {
      try {
        await SongServise.create({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeId: this.youtubeId,
          lyrics: this.lyrics,
          tab: this.tab
        })
        this.$router.push({
          name: 'Songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    formIsValid () {
      return this.title &&
      this.artist &&
      this.genre &&
      this.album &&
      this.albumImageUrl &&
      this.youtubeId
      // this.lyrics &&
      // this.tab
    }
  }
}
</script>

<style>
</style>
