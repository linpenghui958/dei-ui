import Vue from "vue";
import App from "./App.vue";
import Button from './button/button'
import Icon from './base/icon'
import ButtonGroup from './button/button-group'
import Input from './base/input'
import Col from './grid/col'
import Row from './grid/row'
import Layout from './layout/layout'
import Content from './layout/content'
import Header from './layout/header'
import Footer from './layout/footer'
import Sider from './layout/sider'
import Toast from './toast/toast'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsBody from './tabs/tabs-body'
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Cascader from './cascader/cascader'
import CascaderItem from './cascader/cascader-item'
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-col', Col)
Vue.component('d-layout', Layout)
Vue.component('d-content', Content)
Vue.component('d-header', Header)
Vue.component('d-footer', Footer)
Vue.component('d-sider', Sider)
Vue.component('d-row', Row)
Vue.component('d-toast', Toast)
Vue.use(plugin)
Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)
Vue.component('d-popover', Popover)
Vue.component('d-collapse', Collapse)
Vue.component('d-collapse-item', CollapseItem)
Vue.component('d-cascader', Cascader)
Vue.component('d-cascader-item', CascaderItem)
Vue.component('d-slides', Slides)
Vue.component('d-slides-item', SlidesItem)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
