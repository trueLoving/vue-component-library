# Badge
### Install

```js
import Vue from 'vue'
import { Badge } from '@varlet-vue2/ui'

Vue.use(Badge)
```

### Badge Type

Set the badge type through the `type` attribute.

```html
<var-badge />
<var-badge type="primary" />
<var-badge type="info" />
<var-badge type="success" />
<var-badge type="warning" />
<var-badge type="danger" />
```

### Dot Badge

Set the badge as a dot through the `dot` attribute.

```html
<var-badge type="danger" dot />
```
### Customize Badge Content

Set the content of the badge through the `value` attribute.

```html
<var-badge type="danger" value="badge" />
<var-badge type="danger" value="hot" />
<var-badge type="danger" value="66" />
```
### Maximum

Control the range of badge display values through `value` and `max-value` (effective when both `value` and `max-value` exist).

```html
<var-badge type="danger" :value="value" :max-value="maxValue" />
<var-badge type="danger" :value="value1" :max-value="maxValue" />
```

```js
import { ref } from 'vue'

export default {
  data: ()=> ({
    value: 88,
    value1: 188,
    maxValue: 99
  }),
}
```
### Different Positioning Badges

Set the position of the badge through the `position` property.

```html
<var-badge type="danger" position="right-top">
  <var-chip plain :round="false" color="#009688">The Upper Right</var-chip>
</var-badge>
<var-badge type="danger" position="right-bottom">
  <var-chip plain :round="false" color="#009688">The Lower Right</var-chip>
</var-badge>
<var-badge type="danger" position="left-top">
  <var-chip plain :round="false" color="#009688">The Upper Left</var-chip>
</var-badge>
<var-badge type="danger" position="left-bottom">
  <var-chip plain :round="false" color="#009688">The Lower Left</var-chip>
</var-badge>
```

### Whether To Display The Badge

Set whether the badge is displayed through the `hidden` attribute.

```html
<var-button @click="handleChange">Click To Change The State</var-button>
<var-badge type="danger" position="right-top" :hidden="hidden">
  <var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

```js
export default {
  data: ()=> ({
    hidden: false
  }),
  methods:{
    handleChange(){
      this.hidden = !this.hidden
    }
  },
}
```

### Custom Badge Colors

Set the color of the badge through the `color` property.

```html
<var-badge color="#6200ea" position="right-top">
  <var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

### Custom Badge Icon

Set Badge Icon through `icon` property.

```html
<var-badge color="#6200ea" position="right-top" icon="notebook">
  <var-chip plain :round="false" color="#009688">Badge</var-chip>
</var-badge>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Badge type. Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `dot` | Whether the badge is a dot | _boolean_ | `false`|
| `value` |The value shown in the badge (takes effect when `dot` is `false`) | _string \| number_ | `0`|
| `max-value`|The maximum value shown in the logo, when `value` is greater than `max-value`, displays `max-value+` (effective when both `value` and `max-value` exist)| _number_| `-` |
| `position` |Define the position of the logo on other labels when there are other labels in the logo tag. Optional values are `right-top` `top-bottom` `left-top` `left-bottom`| _string_ | `right-top` |
| `color` | Custom badge colors | _string_ | `-` |
| `icon` |  Customize the content of the icon in the logo (priority is higher than `value`) | _string_ | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` |  Badge content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--badge-content-padding` | `2px 6px` |
| `--badge-default-color` | `#e0e0e0` |
| `--badge-primary-color` | `var(--color-primary)`|
| `--badge-danger-color` |  `var(--color-danger)`|
| `--badge-success-color` | `var(--color-success)`|
| `--badge-warning-color` |  `var(--color-warning)`|
| `--badge-info-color` | `var(--color-info)`|