# Card Component - Usage Guide

## Import

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@avnir/ui";
```

## Basic Usage

### Simple Card
```tsx
<Card>
  <h3>150+</h3>
  <p>Components</p>
</Card>
```

### Structured Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Variants

### Elevated (with shadow + hover lift)
```tsx
<Card variant="elevated">
  <CardContent>Elevated card with shadow</CardContent>
</Card>
```

### Outline (thick border)
```tsx
<Card variant="outline">
  <CardContent>Card with thick border</CardContent>
</Card>
```

### Ghost (transparent)
```tsx
<Card variant="ghost">
  <CardContent>Transparent card</CardContent>
</Card>
```

## Sizes

### Small
```tsx
<Card size="sm">
  <CardContent>Small card with reduced padding</CardContent>
</Card>
```

### Large
```tsx
<Card size="lg">
  <CardContent>Large card with increased padding</CardContent>
</Card>
```

## Interactive

### Clickable Card
```tsx
<Card interactive onClick={() => console.log('clicked')}>
  <CardContent>Click me!</CardContent>
</Card>
```

## Combined Props

```tsx
<Card variant="elevated" size="lg" interactive>
  <CardHeader>
    <CardTitle>Interactive Elevated Card</CardTitle>
    <CardDescription>Large size with hover effects</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card combines multiple props for a rich experience</p>
  </CardContent>
  <CardFooter>
    <Button variant="solid">Learn More</Button>
  </CardFooter>
</Card>
```

## Real-World Examples

### Stats Card
```tsx
<Card variant="elevated" interactive>
  <CardContent>
    <h3>150+</h3>
    <p>Components</p>
  </CardContent>
</Card>
```

### Feature Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>🎯 Consistency</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Unified visual language and interaction patterns</p>
  </CardContent>
</Card>
```

### Product Card
```tsx
<Card variant="elevated" interactive>
  <CardHeader>
    <CardTitle>Premium Plan</CardTitle>
    <CardDescription>For growing teams</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="price">$99/month</div>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>Advanced analytics</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button variant="solid" className="w-full">Get Started</Button>
  </CardFooter>
</Card>
```

## Props Reference

### Card Props
- `variant?: "default" | "elevated" | "outline" | "ghost"` - Visual style
- `size?: "sm" | "md" | "lg"` - Padding size
- `interactive?: boolean` - Adds hover effects and cursor pointer
- `className?: string` - Additional CSS classes
- All standard HTML div attributes

### Sub-components
- `CardHeader` - Container for title and description
- `CardTitle` - Heading (h3) with card-title styles
- `CardDescription` - Paragraph with muted color
- `CardContent` - Main content area
- `CardFooter` - Footer with actions/buttons

All sub-components accept `className` and standard HTML attributes.
