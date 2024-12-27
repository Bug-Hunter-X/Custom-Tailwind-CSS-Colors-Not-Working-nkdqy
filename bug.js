```javascript
//In your custom Tailwind CSS configuration file (e.g., tailwind.config.js or tailwind.config.cjs)
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      }
    }
  },
  plugins: [],
}
```

```html
<!--In your HTML file -->
<div class="bg-custom-color">
  <!-- Your content -->
</div>
```