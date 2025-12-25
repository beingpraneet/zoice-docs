# Image Usage Guide

## Recommended: Use Frame Component

For consistent image framing across all documentation pages, wrap your images in Mintlify's `<Frame>` component:

```mdx
<Frame>
  ![Image Description](../images/your-image.png)
</Frame>
```

This ensures:

- **Consistent styling**: All framed images have the same appearance
- **Fixed max width**: 800px maximum width for uniformity
- **Responsive**: Automatically scales on smaller screens
- **Professional look**: Rounded corners, borders, and subtle shadows
- **Dark mode support**: Adapts to light/dark themes automatically

## Examples

### Single Image

```mdx
<Frame>
  ![Zoice Login Page](../images/login-page.png)
</Frame>
```

### Multiple Images

```mdx
<Frame>
  ![Step 1 Screenshot](../images/step-1.png)
</Frame>

<Frame>
  ![Step 2 Screenshot](../images/step-2.png)
</Frame>
```

## Alternative: Plain Markdown

You can also use plain markdown syntax, and the custom CSS will apply styling:

```markdown
![Image Description](../images/your-image.png)
```

However, using `<Frame>` is recommended for the most consistent results.

## Notes

- All framed images will have the same maximum width (800px) for consistency
- Images smaller than 800px will display at their natural size
- On mobile devices, images will scale to fit the screen width
- Always include descriptive alt text for accessibility
