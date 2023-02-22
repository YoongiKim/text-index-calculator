<template>
  <v-app>
    <v-app-bar
      app
      color="grey-darken-3"
      dark
    >
      <v-toolbar-title>Text index counter</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                Length: {{text.length}}
              </v-card-title>
              <v-card-title>
                Selection (start <= n < end)
                <br/>
                {{selection.start}}:{{selection.end}}
                <br/>
                <br/>
                Span length: {{selection.end - selection.start}}
              </v-card-title>
              <v-card-text>
                <v-textarea
                  v-model="text"
                  label="Text"
                  outlined
                  dense
                  rows="30"
                  @mousedown="handleMouseDown"
                  @mouseup="handleMouseUp"
                  @mousemove="handleMouseMove"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- copyright Yoongi Kim (yoongi@bhsn.ai)-->
      <v-footer
        color="grey-darken-3"
        dark
        app
      >
        <a href="https://github.com/YoongiKim/text-index-counter" style="color: white;">GitHub</a>
        <v-spacer/>
        <span class="white--text text-right">&copy; Made by <a href="https://www.yoongi.kim" style="color: white;">Yoongi Kim</a> (yoongi@yoongi.kim)</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    text: '| Name   | Math Grade | Science Grade | English Grade |\n' +
        '| ------ | ---------- | ------------- | ------------- |\n' +
        '| Alice  | 90         | 85            | 92            |\n' +
        '| Bob    | 80         | 92            | 88            |\n' +
        '| Carol  | 95         | 96            | 90            |\n' +
        '| David  | 87         | 89            | 92            |\n' +
        '| Emily  | 92         | 90            | 95            |',
    selection: {start: 0, end: 0},
    isMouseDown: false,
  }),
  methods: {
    handleMouseDown() {
      this.isMouseDown = true;
    },
    handleMouseUp() {
      this.isMouseDown = false;
    },
    handleMouseMove(event) {
      if (this.isMouseDown) {
        const { selectionStart, selectionEnd } = event.target;
        this.selection = { start: selectionStart, end: selectionEnd };
      }
    },
  },
};
</script>
<style>
textarea {
  font-family: monospace;
  white-space: pre;
}
</style>