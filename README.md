# Equal Height Script

This JavaScript script ensures that the `.image-column` element always matches the height of the `.reference-column` element. It dynamically adjusts the height on page load and window resize.

## How It Works

- On page load, the script calculates the height of `.reference-column` and applies it to `.image-column`.
- It listens for window resize events to update the height dynamically.

## Installation

1. Include the script in your project, either inline or as an external file.
2. Ensure your HTML contains elements with the classes `.reference-column` and `.image-column`.

## Usage Example

```html
<div class="container">
    <div class="reference-column">
        <p>This is the reference content.</p>
    </div>
    <div class="image-column">
        <img src="example.jpg" alt="Example">
    </div>
</div>
