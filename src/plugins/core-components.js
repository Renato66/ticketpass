import TCard from '../components/core/TCard.vue'
import TInputText from '../components/core/TInputText.vue'
export default (app) => {
  app.component('t-input-text', TInputText)
  app.component('t-card', TCard)
}