import { Button, Card, Input, Layout, Form } from "@avnir/ui";

export default function FormComponentsPage() {
  return (
    <>
      <Layout.PageHeader
        title="Form Components"
        subtitle="Input fields, buttons, selectors, and form controls"
      />

      <section className="section">
        <div className="container">
          
          <Layout.SectionHeader 
            title="Button"
            subtitle="Interactive buttons with multiple variants"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h4>Variants</h4>
              <div className="component-preview">
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </Card>
            <Card>
              <h4>Sizes</h4>
              <div className="component-preview">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </Card>
          </div>

          <Layout.SectionHeader 
            title="Input"
            subtitle="Text input fields with validation states"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h4>Basic Input</h4>
              <Input placeholder="Enter text..." />
            </Card>
            <Card>
              <h4>With Label</h4>
              <Form.Field label="Email">
                <Input type="email" placeholder="email@example.com" />
              </Form.Field>
            </Card>
          </div>

        </div>
      </section>
    </>
  );
}
