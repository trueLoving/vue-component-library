# Progress

### Intro

Display the current progress of an operation flow.

### Install

```js
import Vue from 'vue'
import { Progress } from '@varlet-vue2/ui'

Vue.use(Progress)
```

### Basic Usage

Set the current progress through the `value` attribute.

```html
<var-progress :value="20" :track="false" />
<var-progress :value="value" :track="false" />
<var-progress :value="100" :track="false" />
```

### Show Label

The label is displayed through the `label` attribute. The label is the percentage of progress by default. You can use the slot to insert custom content.

```html
<var-progress label :value="30" />
<var-progress label :value="value" />
<var-progress label :value="100">success</var-progress>
```

### Custom Style

Set the line width, progress bar color, track color and ripple loading effect through the attributes of `line-width`, `color`, `track-color` and `ripple`.

```html
<var-progress :value="30" line-width="8" color="#ff9f00" />
<var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
<var-progress :value="80" ripple line-width="8" color="#ff9f00" track-color="#f5cb90" />
```

### Progress circle

```html
<var-progress mode="circle" :value="30" line-width="5" :size="56" />
<var-progress mode="circle" label :value="value" line-width="5" :size="56" />
<var-progress mode="circle" label :value="100" line-width="5" :size="56" />
```

### Hide Track

Use `track` prop to hide track.

```html
<var-progress mode="circle" :value="50" :size="56" :track="false" />
```
## API

### Props

| prop | Description      | Type     | Default  |
| --------- | ---------------- | -------- | -------- |
| `mode` | Mode of Progress. Optional value is `linear, circle` | _string_ | `linear` |
| `value` | Completion value   | _string \| number_ |  `0`  |
| `line-width` | Width of the progress bar  | _string \| number_ | `4` |
| `color` | Color of the progress bar  | _string_  | `#005CAF` |
| `track-color`  | Color of the progress track | _string_   | `#d8d8d8` |
| `label` | Whether the label is visible or not | _boolean_ | `false` |
| `track` | Whether the progress track is visible or not | _boolean_ | `true` |
| `ripple` | Loading style for progress (only supports linear progress) | _boolean_ | `false` |
| `size` | Size of progress (only supports circle progress) | _string \| number_ | `40` |
| `rotate` | Origin of progress (only supports circle progress) | _number_ | `0` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom label | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--progress-font-size` | `var(--font-size-sm)` |
| `--progress-ripple-color` | `#fff` |
| `--progress-track-color` | `#d8d8d8` |
| `--progress-background` | `var(--color-primary)` |