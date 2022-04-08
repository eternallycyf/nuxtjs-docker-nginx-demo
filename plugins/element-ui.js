// 全局引入
// import Vue from 'vue'
// import Element from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// Vue.use(Element, { locale })


// 按需引入
import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Card,
  Row,
  Col,
  Switch,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  DatePicker,
  Checkbox,
  Radio,
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(Radio)

Vue.prototype.$message = Message


