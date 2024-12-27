# Tailwind CSS Custom Color Issue

This repository demonstrates a common issue encountered when working with custom colors in Tailwind CSS. The problem is that the custom color defined in the `tailwind.config.js` file is not being applied to the HTML element.

## Problem

The custom color `custom-color` is defined in `tailwind.config.js`, but the `bg-custom-color` class does not apply the expected color in the HTML.

## Solution

The solution involves ensuring that the `content` property in your `tailwind.config.js` correctly includes all the files that use Tailwind CSS classes.  Failure to include the correct file paths in this array is the most common reason for custom colors and other styles not being applied.