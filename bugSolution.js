```javascript
//Ensure your content array includes all relevant files.
module.exports = {
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    // Add any other directories containing files using Tailwind classes
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
<!--Your HTML remains unchanged-->
<div class="bg-custom-color">
  <!-- Your content -->
</div>
```