import Theme from 'vitepress/theme'
import './custom.css'
import Playground from '../components/Playgorund.vue'

export default {
  ...Theme,

  enhanceApp({ app, router, siteData }) {
    app.component('playground', Playground)
    // `siteData`` is a `ref`` of current site-level metadata. <- this is really siteDataByRoute
  }
}
