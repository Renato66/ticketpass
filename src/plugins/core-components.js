import TBtn from '../components/core/TBtn.vue'
import TCard from '../components/core/TCard.vue'
import TInputText from '../components/core/TInputText.vue'
import TLoading from '../components/core/TLoading.vue'
export default (app) => {
  app.component('t-btn', TBtn)
  app.component('t-card', TCard)
  app.component('t-input-text', TInputText)
  app.component('t-loading', TLoading)
}