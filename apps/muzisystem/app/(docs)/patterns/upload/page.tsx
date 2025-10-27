"use client";

import { Layout, Content, Card, DataDisplay, Primitives } from "@avnir/ui";

export default function UploadPatternPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Upload Patterns"
            subtitle="File upload workflows optimized for music, images, and documents with progress tracking and validation."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Overview</h2>
            <p>
              File uploads are a core feature of AVNIR products. MUZISYSTEM provides robust patterns 
              for handling various file types with progress tracking, validation, and error recovery.
            </p>
            <p>
              These patterns are optimized for large files (audio, video) and support both single 
              and batch uploads with drag-and-drop functionality.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Upload Types</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <div className="card-header">
                <svg className="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title" style={{ marginBottom: 'var(--gap-md)' }}>Audio Upload</h3>
                <p className="card-description" style={{ marginBottom: 'var(--gap-lg)' }}>
                  Optimized for music files with metadata extraction and waveform generation.
                </p>
                <Primitives.List size="sm">
                  <li>MP3, WAV, FLAC support</li>
                  <li>Metadata extraction (ID3 tags)</li>
                  <li>Waveform preview</li>
                  <li>Audio quality validation</li>
                  <li>Chunked upload for large files</li>
                </Primitives.List>
              </div>
            </Card>

            <Card>
              <div className="card-header">
                <svg className="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title" style={{ marginBottom: 'var(--gap-md)' }}>Image Upload</h3>
                <p className="card-description" style={{ marginBottom: 'var(--gap-lg)' }}>
                  Image uploads with preview, cropping, and optimization.
                </p>
                <Primitives.List size="sm">
                  <li>JPG, PNG, WebP support</li>
                  <li>Instant preview</li>
                  <li>Crop and resize</li>
                  <li>Automatic optimization</li>
                  <li>Multiple images batch</li>
                </Primitives.List>
              </div>
            </Card>

            <Card>
              <div className="card-header">
                <svg className="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title" style={{ marginBottom: 'var(--gap-md)' }}>Document Upload</h3>
                <p className="card-description" style={{ marginBottom: 'var(--gap-lg)' }}>
                  Document uploads with validation and preview.
                </p>
                <Primitives.List size="sm">
                  <li>PDF, DOC, TXT support</li>
                  <li>File size validation</li>
                  <li>Virus scanning</li>
                  <li>Preview generation</li>
                  <li>Metadata extraction</li>
                </Primitives.List>
              </div>
            </Card>

            <Card>
              <div className="card-header">
                <svg className="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title" style={{ marginBottom: 'var(--gap-md)' }}>Batch Upload</h3>
                <p className="card-description" style={{ marginBottom: 'var(--gap-lg)' }}>
                  Multiple files upload with queue management.
                </p>
                <Primitives.List size="sm">
                  <li>Drag & drop multiple files</li>
                  <li>Upload queue</li>
                  <li>Individual progress</li>
                  <li>Pause/resume support</li>
                  <li>Error recovery</li>
                </Primitives.List>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Upload States</h2>
            <p>Clear visual feedback for each upload state:</p>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>
                <DataDisplay.Badge>Idle</DataDisplay.Badge>
              </h3>
              <p>Ready to accept files with drag & drop zone. User can select files or drag them into the upload area.</p>
            </Card>

            <Card>
              <h3>
                <DataDisplay.Badge variant="warning">Validating</DataDisplay.Badge>
              </h3>
              <p>Checking file type, size, and format before starting the upload process.</p>
            </Card>

            <Card>
              <h3>
                <DataDisplay.Badge variant="warning">Uploading</DataDisplay.Badge>
              </h3>
              <p>Progress bar with percentage and estimated time. Shows upload speed and bytes transferred.</p>
            </Card>

            <Card>
              <h3>
                <DataDisplay.Badge variant="warning">Processing</DataDisplay.Badge>
              </h3>
              <p>Server-side processing such as transcoding, optimization, or metadata extraction.</p>
            </Card>

            <Card>
              <h3>
                <DataDisplay.Badge variant="success">Complete</DataDisplay.Badge>
              </h3>
              <p>Success confirmation with preview. File is ready to use and accessible in the system.</p>
            </Card>

            <Card>
              <h3>
                <DataDisplay.Badge variant="destructive">Error</DataDisplay.Badge>
              </h3>
              <p>Clear error message with retry option. Preserves user's file selection for easy retry.</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Validation Rules</h2>
            <ul>
              <li><strong>File Type</strong> - Whitelist allowed MIME types</li>
              <li><strong>File Size</strong> - Maximum size limits per file type</li>
              <li><strong>File Name</strong> - Sanitize and validate file names</li>
              <li><strong>Total Size</strong> - Limit total upload size per session</li>
              <li><strong>Virus Scan</strong> - Scan files for malware before processing</li>
              <li><strong>Content Validation</strong> - Verify file content matches extension</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Progress Tracking</h2>
            <p>Provide detailed progress information:</p>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>Upload Progress</h3>
              <p>Percentage and bytes uploaded/total</p>
              <DataDisplay.Progress value={65} showValue />
              <small>325 MB / 500 MB</small>
            </Card>

            <Card>
              <h3>Speed Indicator</h3>
              <p>Current upload speed (MB/s)</p>
              <DataDisplay.Progress value={80} showValue />
              <small>12.5 MB/s</small>
            </Card>

            <Card>
              <h3>Time Remaining</h3>
              <p>Estimated time to completion</p>
              <DataDisplay.Progress value={45} showValue />
              <small>~2 minutes remaining</small>
            </Card>

            <Card>
              <h3>Queue Position</h3>
              <p>Position in batch upload queue</p>
              <DataDisplay.Progress value={33} showValue />
              <small>File 2 of 6 in queue</small>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Error Handling</h2>
            <p>Handle common upload errors gracefully:</p>
            <ul>
              <li><strong>File Too Large</strong> - "File exceeds maximum size of X MB"</li>
              <li><strong>Invalid Type</strong> - "Only MP3, WAV, and FLAC files are supported"</li>
              <li><strong>Network Error</strong> - "Upload failed. Check your connection and try again"</li>
              <li><strong>Server Error</strong> - "Server error. Please try again later"</li>
              <li><strong>Quota Exceeded</strong> - "Storage limit reached. Upgrade to upload more"</li>
            </ul>
            <p>Always provide a retry option and preserve user's file selection.</p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Accessibility</h2>
            <ul>
              <li><strong>Keyboard Support</strong> - Full keyboard navigation and file selection</li>
              <li><strong>Screen Reader</strong> - Announce upload progress and status changes</li>
              <li><strong>Focus Management</strong> - Maintain focus during upload process</li>
              <li><strong>Alternative Input</strong> - Traditional file input as fallback</li>
              <li><strong>Error Announcement</strong> - Errors announced to assistive technology</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Implementation Guidelines</h2>
            <ul>
              <li><strong>Chunked Upload</strong> - Split large files for reliability and resume support</li>
              <li><strong>Client Validation</strong> - Validate before upload to save bandwidth</li>
              <li><strong>Server Validation</strong> - Always validate on server (never trust client)</li>
              <li><strong>Optimistic UI</strong> - Show preview immediately while uploading</li>
              <li><strong>Background Upload</strong> - Allow users to continue working during upload</li>
              <li><strong>Cleanup</strong> - Remove incomplete uploads after timeout</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
