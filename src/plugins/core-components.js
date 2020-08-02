import TBtn from '../components/core/TBtn.vue'
import TCard from '../components/core/TCard.vue'
import TCheckbox from '../components/core/TCheckbox.vue'
import TInputText from '../components/core/TInputText.vue'
import TLoading from '../components/core/TLoading.vue'
import TModal from '../components/core/TModal.vue'
export default (app) => {
  app.component('t-btn', TBtn)
  app.component('t-card', TCard)
  app.component('t-checkbox', TCheckbox)
  app.component('t-input-text', TInputText)
  app.component('t-loading', TLoading)
  app.component('t-modal', TModal)
}