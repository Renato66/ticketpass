
const config = {
  // alias: {
  //   alias: '/alias/aliased',
  //   '/@alias/': require('path').resolve(__dirname, 'alias/aliased-dir')
  // },
  rollupInputOptions: {
    external: ['https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate']
  }
}

export default config