"use client";

import { Card, Content, Layout } from "@avnir/ui";

export default function LicensesPage() {
  return (
    <>
      <Layout.PageHeader
        title="Open Source Licenses"
        subtitle="Third-party libraries and their licenses"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Content.Prose>
            <h2>MUZISYSTEM License</h2>
            <p>
              MUZISYSTEM is released under the MIT License, allowing you to use, modify, 
              and distribute the design system freely in personal and commercial projects.
            </p>
          </Content.Prose>

          <Card style={{ marginTop: 'var(--margin-lg)' }}>
            <h3>MIT License</h3>
            <pre style={{ 
              backgroundColor: 'var(--surface)', 
              padding: 'var(--padding-md)', 
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-small)',
              overflow: 'auto',
              lineHeight: 1.6
            }}>
{`Copyright (c) 2025 AVNIR Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Layout.SectionHeader
            title="Third-Party Dependencies"
            subtitle="Open source libraries used in MUZISYSTEM"
            align="left"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)' }}>
            <Card>
              <h3>React</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                A JavaScript library for building user interfaces
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> MIT<br />
                <strong>Copyright:</strong> Meta Platforms, Inc.<br />
                <strong>Website:</strong> <a href="https://react.dev" target="_blank" rel="noopener">react.dev</a>
              </p>
            </Card>

            <Card>
              <h3>Next.js</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                The React Framework for Production
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> MIT<br />
                <strong>Copyright:</strong> Vercel, Inc.<br />
                <strong>Website:</strong> <a href="https://nextjs.org" target="_blank" rel="noopener">nextjs.org</a>
              </p>
            </Card>

            <Card>
              <h3>TypeScript</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                TypeScript is a strongly typed programming language that builds on JavaScript
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> Apache 2.0<br />
                <strong>Copyright:</strong> Microsoft Corporation<br />
                <strong>Website:</strong> <a href="https://www.typescriptlang.org" target="_blank" rel="noopener">typescriptlang.org</a>
              </p>
            </Card>

            <Card>
              <h3>Tailwind CSS</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                A utility-first CSS framework
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> MIT<br />
                <strong>Copyright:</strong> Tailwind Labs Inc.<br />
                <strong>Website:</strong> <a href="https://tailwindcss.com" target="_blank" rel="noopener">tailwindcss.com</a>
              </p>
            </Card>

            <Card>
              <h3>class-variance-authority</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                CSS-in-TS variants API that focuses on developer experience
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> Apache 2.0<br />
                <strong>Copyright:</strong> Joe Bell<br />
                <strong>Website:</strong> <a href="https://cva.style" target="_blank" rel="noopener">cva.style</a>
              </p>
            </Card>

            <Card>
              <h3>clsx</h3>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
                A tiny utility for constructing className strings conditionally
              </p>
              <p style={{ fontSize: 'var(--text-small)' }}>
                <strong>License:</strong> MIT<br />
                <strong>Copyright:</strong> Luke Edwards<br />
                <strong>Website:</strong> <a href="https://github.com/lukeed/clsx" target="_blank" rel="noopener">github.com/lukeed/clsx</a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Content.Prose>
            <h2>Attribution Requirements</h2>
            <p>
              While MUZISYSTEM is MIT licensed and doesn't require attribution, we appreciate 
              it when you:
            </p>
            <ul>
              <li>Keep the copyright notice in source code</li>
              <li>Mention MUZISYSTEM in your project documentation</li>
              <li>Link back to our website or repository</li>
            </ul>

            <h3>Suggested Attribution</h3>
            <p>
              "Built with MUZISYSTEM by AVNIR Studio"
            </p>

            <h2>Trademark Notice</h2>
            <p>
              The AVNIR Studio name and logo are trademarks of AVNIR Studio. Use of these 
              trademarks requires prior written permission. The MIT License does not grant 
              permission to use our trademarks.
            </p>

            <h2>Questions</h2>
            <p>
              For licensing questions or permission requests, contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> legal@avnir.studio</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/avnir-studio" target="_blank" rel="noopener">github.com/avnir-studio</a></li>
            </ul>
          </Content.Prose>
        </div>
      </section>
    </>
  );
}
