"use client";

import React from "react";
import { Badge, Button, Card, Form, Layout, Primitives } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
  status?: 'stable' | 'beta' | 'deprecated';
  browsers?: string[];
  a11y?: 'AA' | 'AAA';
}

function ComponentSection({ name, category, description, variants, preview, status = 'stable', browsers = ['all'], a11y = 'AA' }: ComponentSectionProps) {
  const statusConfig = {
    stable: { label: 'Stable', color: 'var(--success)', emoji: '✅' },
    beta: { label: 'Beta', color: 'var(--warning)', emoji: '🧪' },
    deprecated: { label: 'Deprecated', color: 'var(--error)', emoji: '⚠️' }
  };

  const currentStatus = statusConfig[status];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h2)', 
              fontWeight: 'var(--font-bold)', 
              marginBottom: 'var(--margin-md)',
              color: 'var(--titles)'
            }}>
              {name}
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-md)', lineHeight: 1.6 }}>
              {description}
            </p>
            
            {/* Variants */}
            {variants && variants.length > 0 && (
              <div style={{ marginBottom: 'var(--margin-lg)' }}>
                <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                  {variants.length} variant{variants.length > 1 ? 's' : ''} available
                </p>
                <div style={{ display: 'flex', gap: 'var(--gap-xs)', flexWrap: 'wrap' }}>
                  {variants.map((variant, index) => (
                    <Badge key={index} variant="default">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Status Badges */}
            <div style={{ marginBottom: 'var(--margin-lg)' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                Status
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge style={{ backgroundColor: currentStatus.color, color: '#0b0b0d' }}>
                  {currentStatus.emoji} {currentStatus.label}
                </Badge>
                
                {browsers.includes('all') ? (
                  <Badge variant="default">
                    🌐 All Browsers
                  </Badge>
                ) : (
                  <Badge variant="default">
                    🌐 {browsers.join(', ')}
                  </Badge>
                )}
                
                <Badge variant="default">
                  ♿ WCAG 2.1 {a11y}
                </Badge>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              View Full Documentation →
            </Button>
          </div>

          {/* Right: Preview */}
          <Primitives.Box style={{
            padding: 'var(--padding-xl)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{ marginBottom: 'var(--margin-lg)', fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preview</h3>
            {preview}
          </Primitives.Box>
        </div>
      </div>
    </section>
  );
}


export default function FormPage() {
  const [inputValue, setInputValue] = React.useState("");
  const [textareaValue, setTextareaValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");
  const [switchValue, setSwitchValue] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(50);
  const [dateValue, setDateValue] = React.useState<Date | undefined>();
  const [timeValue, setTimeValue] = React.useState("");
  const [colorValue, setColorValue] = React.useState("var(--primary)");

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Form Components"
        subtitle="Comprehensive form controls including inputs, selects, checkboxes, and advanced pickers. Built for accessibility and user experience."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>15</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Total Components</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>100%</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>TypeScript</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>AA</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Accessible</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>Stable</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Production Ready</p>
            </Card>
          </div>
        </div>
      </section>

      <ComponentSection
        name="Button"
        category="Form"
        description="Versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and full accessibility."
        variants={["solid", "outline", "ghost", "sm", "md", "lg", "loading", "disabled"]}
        status="stable"
        browsers={['all']}
        a11y="AA"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
              <Button variant="solid">Solid Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
              <Button variant="solid" size="sm">Small</Button>
              <Button variant="solid" size="md">Medium</Button>
              <Button variant="solid" size="lg">Large</Button>
            </div>
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap' }}>
              <Button variant="solid" disabled>Disabled</Button>
            </div>
          </div>
        }
      />

      <ComponentSection
        name="IconButton"
        category="Form"
        description="Compact button for icon-only actions. Perfect for toolbars, action menus, and space-constrained interfaces."
        variants={["primary", "secondary", "outline", "sm", "md", "lg"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center' }}>
            <Form.IconButton variant="solid" size="sm" icon="✏️" />
            <Form.IconButton variant="solid" size="md" icon="🗑️" />
            <Form.IconButton variant="solid" size="lg" icon="⚙️" />
            <Form.IconButton variant="outline" size="md" icon="❤️" />
          </div>
        }
      />

      <ComponentSection
        name="Input"
        category="Form"
        description="Text input field with label, placeholder, error states, and validation. Supports various input types."
        variants={["text", "email", "password", "number", "search", "error", "disabled"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Field label="Email Address">
              <Form.Input
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Field>
            <Form.Field label="Password">
              <Form.Input
                type="password"
                placeholder="Enter password"
              />
            </Form.Field>
            <Form.Field label="With Error" error="This field is required">
              <Form.Input
                type="text"
                placeholder="Invalid input"
              />
            </Form.Field>
          </div>
        }
      />

      <ComponentSection
        name="Textarea"
        category="Form"
        description="Multi-line text input with auto-resize option. Perfect for comments, descriptions, and long-form content."
        variants={["default", "auto-resize", "with-counter"]}
        preview={
          <Form.Field label="Description">
            <Form.Textarea
              placeholder="Enter a detailed description..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              rows={4}
            />
          </Form.Field>
        }
      />

      <ComponentSection
        name="Select"
        category="Form"
        description="Dropdown select with search and custom options. Supports single and multiple selection modes."
        variants={["default", "searchable", "multiple", "grouped"]}
        preview={
          <Form.Field label="Choose an option">
            <Form.Select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>
          </Form.Field>
        }
      />

      <ComponentSection
        name="Checkbox"
        category="Form"
        description="Checkbox input for boolean selections. Supports indeterminate state and custom labels."
        variants={["default", "indeterminate", "disabled"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Checkbox
              label="Accept terms and conditions"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
            />
            <Form.Checkbox
              label="Subscribe to newsletter"
              checked={false}
              onChange={() => {}}
            />
            <Form.Checkbox
              label="Disabled option"
              checked={false}
              disabled
              readOnly
            />
          </div>
        }
      />

      <ComponentSection
        name="Radio"
        category="Form"
        description="Radio button for single selection from multiple options. Grouped with shared name attribute."
        variants={["default", "horizontal", "vertical", "disabled"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Radio
              label="Option 1"
              name="radio-group"
              value="option1"
              checked={radioValue === "option1"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <Form.Radio
              label="Option 2"
              name="radio-group"
              value="option2"
              checked={radioValue === "option2"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <Form.Radio
              label="Option 3"
              name="radio-group"
              value="option3"
              checked={radioValue === "option3"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
          </div>
        }
      />

      <ComponentSection
        name="Switch"
        category="Form"
        description="Toggle switch for boolean settings. More visually prominent than checkbox for on/off states."
        variants={["default", "sm", "md", "lg", "disabled"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Switch
              label="Enable notifications"
              checked={switchValue}
              onChange={(e) => setSwitchValue(e.target.checked)}
            />
            <Form.Switch
              label="Dark mode"
              checked={true}
              onChange={() => {}}
            />
            <Form.Switch
              label="Disabled switch"
              checked={false}
              disabled
              readOnly
            />
          </div>
        }
      />

      <ComponentSection
        name="Field"
        category="Form"
        description="Form field wrapper with label, helper text, and error message. Provides consistent spacing and layout."
        variants={["default", "required", "with-helper", "with-error"]}
        preview={
          <Form.Field
            label="Username"
            help="Choose a unique username"
            required
          >
            <Form.Input
              type="text"
              placeholder="Enter username"
            />
          </Form.Field>
        }
      />

      <ComponentSection
        name="FileUpload"
        category="Form"
        description="File upload with drag-and-drop support. Shows file preview, progress, and validation feedback."
        variants={["single", "multiple", "with-preview", "drag-drop"]}
        preview={
          <Form.Field label="Upload files">
            <Form.FileUpload
              accept="image/*"
              maxFiles={1}
              onFiles={(files) => console.log('Files:', files)}
            />
          </Form.Field>
        }
      />

      <ComponentSection
        name="DatePicker"
        category="Form"
        description="Calendar-based date picker with keyboard navigation. Supports date ranges and custom formatting."
        variants={["single", "range", "multiple"]}
        status="beta"
        browsers={['chrome', 'firefox', 'safari']}
        a11y="AA"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
            <label className="text-small" style={{ fontWeight: 'var(--font-medium)' }}>Select date</label>
            <Form.DatePicker
              value={dateValue}
              onChange={(date) => setDateValue(date ?? undefined)}
            />
          </div>
        }
      />

      <ComponentSection
        name="TimePicker"
        category="Form"
        description="Time selection with hour and minute inputs. Supports 12/24 hour formats and step intervals."
        variants={["12-hour", "24-hour", "with-seconds"]}
        preview={
          <Form.Field label="Select time">
            <Form.TimePicker
              value={timeValue}
              onChange={(time) => setTimeValue(time)}
            />
          </Form.Field>
        }
      />

      <ComponentSection
        name="Slider"
        category="Form"
        description="Range slider for numeric input. Supports single value, range selection, and custom step intervals."
        variants={["single", "range", "with-marks", "vertical"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Field label="Volume">
              <Form.Slider
                value={sliderValue}
                onChange={(value) => setSliderValue(value)}
                min={0}
                max={100}
              />
            </Form.Field>
            <p className="text-small" style={{ color: 'var(--muted)' }}>
              Value: {sliderValue}
            </p>
          </div>
        }
      />

      <ComponentSection
        name="ColorPicker"
        category="Form"
        description="Color selection with visual picker and hex input. Supports RGB, HSL, and hex color formats."
        variants={["default", "with-presets", "with-opacity"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Form.Field label="Choose color">
              <Form.ColorPicker
                value={colorValue}
                onChange={(color) => setColorValue(color)}
              />
            </Form.Field>
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: colorValue, 
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)'
            }} />
          </div>
        }
      />

      <ComponentSection
        name="Autocomplete"
        category="Form"
        description="Search input with autocomplete suggestions. Supports async data loading and custom rendering."
        variants={["default", "async", "multi-select", "with-icons"]}
        preview={
          <Form.Field label="Search">
            <Form.Autocomplete
              placeholder="Type to search..."
              value={inputValue}
              onChange={(value) => setInputValue(value)}
              options={[
                { value: "react", label: "React" },
                { value: "vue", label: "Vue" },
                { value: "angular", label: "Angular" },
                { value: "svelte", label: "Svelte" }
              ]}
              onSelect={(option) => console.log('Selected:', option)}
            />
          </Form.Field>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Forms?"
            subtitle="Start creating accessible, validated forms with our comprehensive components"
            align="center"
          />
          <div className="section-actions">
            <Button variant="solid" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View All Components</Button>
          </div>
        </div>
      </section>
    </>
  );
}
