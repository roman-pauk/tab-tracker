<template>
    <v-container>
        <v-layout flex justify-center>
      <v-flex lg8 md10>
        <div class="elevation-2">
        <v-toolbar color="cyan" dark flat>
          <v-toolbar-title>Songs</v-toolbar-title>
          <v-spacer />
          <v-btn icon :to="{name: 'Songs-create'}">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="pt-2 pr-2 pl-2 pb-1">
          <template v-if="songs.length">
            <div v-for="song in songs" :key="song.id" class="song mt-3 mb-3 pt-2 pb-2 pl-2 pr-2 cyan lighten-3">
              <v-tooltip bottom>
                <img slot="activator" :src="song.albumImageUrl" class="song__img" :alt="song.album">
                <span>{{song.album}}</span>
              </v-tooltip>
              <div class="song__about">
                <span class="song__title">{{song.title}}</span>
                <span class="song__artist">{{song.artist}}</span>
              </div>
              <v-spacer />
              <v-btn icon dark outline :to="{name: 'Single-song', params: { songId: song.id }}">
                <v-icon dark>forward</v-icon>
              </v-btn>
            </div>
          </template>
          <template v-else>
            <div>No songs here</div>
          </template>
        </div>

        </div>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import SongsServise from '../servises/SongsServise'

export default {
  name: 'Songs',
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    const songs = await SongsServise.index()
    this.songs = songs.data
  }
}
</script>

<style>
  .song{
    display: flex;
    align-items: center;
  }
  .song__img{
    width: 60px;
    height: auto;
  }
  .song__title{
    display: block;
    font-weight: 500;
    font-size: 20px;
  }
  .song__about{
    margin-left: 20px;
    color: #37474F;
  }
  .song__artist{
    font-size: 12px;
    font-weight: 300;
  }
</style>
