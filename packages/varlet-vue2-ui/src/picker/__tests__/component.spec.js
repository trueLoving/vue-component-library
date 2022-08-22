import Picker from '..'
import VarPicker from '../Picker'
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import { delay, mockTranslate, trigger } from '../../utils/jest'
import example from '../example'

test('test picker component plugin', () => {
  Vue.use(Picker.Component)
  expect(Vue.component(Picker.Component.name)).toBeTruthy()
})

test('test picker example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

const columns = [['A', 'B', 'C']]

const triggerDrag = async (element, x, y) => {
  await trigger(element, 'touchstart', 0, 0)
  await trigger(element, 'touchmove', x / 4, y / 4)
  await trigger(element, 'touchmove', x / 3, y / 3)
  await trigger(element, 'touchmove', x / 2, y / 2)
  await trigger(element, 'touchmove', x, y)
  await delay(300)
  await trigger(element, 'touchend', x, y)
}

test('test scroll up & onConfirm', async () => {
  const { mockRestore } = mockTranslate()
  const onConfirm = jest.fn()

  const wrapper = mount(VarPicker, {
    propsData: {
      columns,
    },
    listeners: {
      confirm: onConfirm,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  const { element } = wrapper.find('.var-picker__column')

  await triggerDrag(element, 0, -600)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).lastCalledWith(['C'], [2])

  mockRestore()
  wrapper.destroy()
})

test('test scroll down & onCancel', async () => {
  const { mockRestore } = mockTranslate()
  const onCancel = jest.fn()

  const wrapper = mount(VarPicker, {
    propsData: {
      columns,
    },
    listeners: {
      cancel: onCancel,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  const { element } = wrapper.find('.var-picker__column')

  await triggerDrag(element, 0, 600)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-picker__cancel-button').trigger('click')
  expect(onCancel).lastCalledWith(['A'], [0])

  mockRestore()
  wrapper.destroy()
})

test('test confirm & cancel method', async () => {
  const { mockRestore } = mockTranslate()
  const onCancel = jest.fn()
  const onConfirm = jest.fn()

  const wrapper = mount(VarPicker, {
    propsData: {
      columns,
    },
    listeners: {
      confirm: onConfirm,
      cancel: onCancel,
    },
  })

  wrapper.vm.confirm()
  wrapper.vm.cancel()

  expect(onCancel).lastCalledWith(['A'], [0])
  expect(onConfirm).lastCalledWith(['A'], [0])

  mockRestore()
  wrapper.destroy()
})

test('test cascade mode', async () => {
  const { mockRestore } = mockTranslate()
  const onConfirm = jest.fn()

  const wrapper = mount(VarPicker, {
    propsData: {
      cascade: true,
      columns: [
        {
          text: '成都市',
          children: [
            {
              text: '温江区',
            },
            {
              text: '金牛区',
            },
          ],
        },
        {
          text: '无锡市',
          children: [
            {
              text: '新吴区',
            },
            {
              text: '惠山区',
            },
          ],
        },
      ],
    },
    listeners: {
      confirm: onConfirm,
    },
  })

  let columns = wrapper.findAll('.var-picker__column')
  expect(wrapper.html()).toMatchSnapshot()
  expect(columns.length).toBe(2)

  const confirmButton = wrapper.find('.var-picker__confirm-button')

  await triggerDrag(columns.at(0).element, 0, -44)
  await confirmButton.trigger('click')
  expect(onConfirm).lastCalledWith(['无锡市', '新吴区'], [1, 0])

  // find elements again for rebuild children
  columns = wrapper.findAll('.var-picker__column')
  await triggerDrag(columns.at(1).element, 0, -44)
  await confirmButton.trigger('click')
  expect(onConfirm).lastCalledWith(['无锡市', '惠山区'], [1, 1])

  mockRestore()
  wrapper.destroy()
})

test('test picker component textFormatter', async () => {
  const textFormatter = jest.fn().mockReturnValue('text')
  const columns = [['A']]

  const wrapper = mount(VarPicker, {
    propsData: {
      columns,
      textFormatter,
    },
  })

  const pickerText = wrapper.find('.var-picker__text')

  expect(pickerText.text()).toBe('text')

  wrapper.destroy()
})
