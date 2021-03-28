import {
    Button,
    Spin
} from 'ant-design-vue'

const compList = [Button, Spin]

export function registerAntd(app) {
    compList.forEach(comp => {
        app.component(comp.name || comp.displayName, comp)
    })
}