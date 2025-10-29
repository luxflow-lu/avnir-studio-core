"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function WritingPage() {
  return (
    <>
      <Layout.PageHeader
        title="Writing Guidelines"
        subtitle="Tone of voice, microcopy, and content principles"
      />

      <section className="section">
        <div className="container">
          <Content.Prose>
            <h2>Voice & Tone</h2>
            <p>
              MUZISYSTEM's voice is clear, confident, and helpful. We write like we're having 
              a conversation with a colleague—professional but approachable, technical but not intimidating.
            </p>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Core Principles"
            subtitle="Guidelines for all content"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>✅ Do</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li><strong>Be clear</strong> - Use simple, direct language</li>
                <li><strong>Be concise</strong> - Respect the user's time</li>
                <li><strong>Be helpful</strong> - Provide context and guidance</li>
                <li><strong>Be consistent</strong> - Use the same terms throughout</li>
                <li><strong>Be human</strong> - Write like a person, not a robot</li>
              </ul>
            </Card>
            <Card>
              <h3>❌ Don't</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li><strong>Use jargon</strong> - Avoid unnecessary technical terms</li>
                <li><strong>Be vague</strong> - Be specific about actions and outcomes</li>
                <li><strong>Be condescending</strong> - Assume users are intelligent</li>
                <li><strong>Use humor</strong> - Keep it professional</li>
                <li><strong>Overexplain</strong> - Trust users to understand basics</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Button Labels"
            subtitle="Clear, action-oriented text"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>✅ Good Examples</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li>"Save changes"</li>
                <li>"Create project"</li>
                <li>"Delete account"</li>
                <li>"Download report"</li>
                <li>"Send invitation"</li>
              </ul>
              <p style={{ marginTop: 'var(--margin-md)', color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Specific verbs that describe the action
              </p>
            </Card>
            <Card>
              <h3>❌ Avoid</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li>"OK" / "Submit"</li>
                <li>"Click here"</li>
                <li>"Yes" / "No"</li>
                <li>"Continue"</li>
                <li>"Proceed"</li>
              </ul>
              <p style={{ marginTop: 'var(--margin-md)', color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
                Generic labels that don't describe the action
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Error Messages"
            subtitle="Helpful, specific, and actionable"
            align="left"
          />
          <Content.Prose>
            <h3>Structure</h3>
            <ol>
              <li><strong>What happened</strong> - Describe the error clearly</li>
              <li><strong>Why it happened</strong> - Explain the cause (if helpful)</li>
              <li><strong>How to fix it</strong> - Provide clear next steps</li>
            </ol>

            <h3>Examples</h3>
            <div style={{ marginTop: 'var(--margin-lg)' }}>
              <Card>
                <h4 style={{ color: 'var(--success)', marginBottom: 'var(--margin-sm)' }}>✅ Good</h4>
                <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                  "Your password must be at least 8 characters and include a number."
                </p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                  Clear, specific, and tells the user exactly what to do.
                </p>
              </Card>
            </div>

            <div style={{ marginTop: 'var(--margin-md)' }}>
              <Card>
                <h4 style={{ color: 'var(--error)', marginBottom: 'var(--margin-sm)' }}>❌ Bad</h4>
                <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                  "Invalid password."
                </p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                  Vague and doesn't help the user fix the problem.
                </p>
              </Card>
            </div>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Empty States"
            subtitle="Encourage action when there's no content"
            align="left"
          />
          <Content.Prose>
            <h3>Components</h3>
            <ol>
              <li><strong>Illustration or icon</strong> - Visual representation</li>
              <li><strong>Headline</strong> - Brief, descriptive title</li>
              <li><strong>Description</strong> - Explain why it's empty and what to do</li>
              <li><strong>Call to action</strong> - Primary button to get started</li>
            </ol>

            <h3>Example</h3>
            <div style={{ marginTop: 'var(--margin-lg)' }}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: 'var(--margin-md)' }}>📁</div>
                <h4 style={{ marginBottom: 'var(--margin-sm)' }}>No projects yet</h4>
                <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-lg)' }}>
                  Create your first project to get started with MUZISYSTEM.
                </p>
                <button className="btn btn--solid">Create project</button>
              </Card>
            </div>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Success Messages"
            subtitle="Confirm actions and provide next steps"
            align="left"
          />
          <Content.Prose>
            <h3>Best Practices</h3>
            <ul>
              <li><strong>Be specific</strong> - "Project created" not "Success"</li>
              <li><strong>Use past tense</strong> - "Settings saved" not "Saving settings"</li>
              <li><strong>Provide context</strong> - What happened and what's next</li>
              <li><strong>Keep it brief</strong> - 1-2 sentences maximum</li>
            </ul>

            <h3>Examples</h3>
            <ul>
              <li>"✅ Project created successfully. You can now invite team members."</li>
              <li>"✅ Changes saved. Your profile is now public."</li>
              <li>"✅ Invitation sent to john@example.com"</li>
            </ul>
          </Content.Prose>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Terminology"
            subtitle="Consistent vocabulary across the design system"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>✅ Use</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li>Sign in / Sign out</li>
                <li>Email address</li>
                <li>Username</li>
                <li>Settings</li>
                <li>Dashboard</li>
                <li>Profile</li>
              </ul>
            </Card>
            <Card>
              <h3>❌ Avoid</h3>
              <ul style={{ lineHeight: 1.8, fontSize: 'var(--text-small)' }}>
                <li>Log in / Log out</li>
                <li>Email / E-mail</li>
                <li>User name</li>
                <li>Preferences</li>
                <li>Home</li>
                <li>Account</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Formatting"
            subtitle="Capitalization, punctuation, and style"
            align="left"
          />
          <Content.Prose>
            <h3>Capitalization</h3>
            <ul>
              <li><strong>Sentence case</strong> - For body text, descriptions, labels</li>
              <li><strong>Title case</strong> - For page titles, section headings</li>
              <li><strong>ALL CAPS</strong> - Avoid, except for acronyms (API, CSS)</li>
            </ul>

            <h3>Punctuation</h3>
            <ul>
              <li><strong>Periods</strong> - Use for complete sentences, skip for fragments</li>
              <li><strong>Exclamation marks</strong> - Use sparingly, only for genuine excitement</li>
              <li><strong>Question marks</strong> - Use for questions, not rhetorical statements</li>
            </ul>

            <h3>Numbers</h3>
            <ul>
              <li><strong>Spell out</strong> - One through nine</li>
              <li><strong>Use numerals</strong> - 10 and above</li>
              <li><strong>Exceptions</strong> - Always use numerals for measurements, percentages</li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
