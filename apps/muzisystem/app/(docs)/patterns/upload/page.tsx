"use client";

import { Layout, Content, Card } from "@avnir/ui";

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
              <h3>🎵 Audio Upload</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Optimized for music files with metadata extraction and waveform generation.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>MP3, WAV, FLAC support</li>
                <li>Metadata extraction (ID3 tags)</li>
                <li>Waveform preview</li>
                <li>Audio quality validation</li>
                <li>Chunked upload for large files</li>
              </ul>
            </Card>

            <Card>
              <h3>🖼️ Image Upload</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Image uploads with preview, cropping, and optimization.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>JPG, PNG, WebP support</li>
                <li>Instant preview</li>
                <li>Crop and resize</li>
                <li>Automatic optimization</li>
                <li>Multiple images batch</li>
              </ul>
            </Card>

            <Card>
              <h3>📄 Document Upload</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Document uploads with validation and preview.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>PDF, DOC, TXT support</li>
                <li>File size validation</li>
                <li>Virus scanning</li>
                <li>Preview generation</li>
                <li>Metadata extraction</li>
              </ul>
            </Card>

            <Card>
              <h3>📦 Batch Upload</h3>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 'var(--gap-md)' }}>
                Multiple files upload with queue management.
              </p>
              <ul style={{ fontSize: 'var(--text-small)' }}>
                <li>Drag & drop multiple files</li>
                <li>Upload queue</li>
                <li>Individual progress</li>
                <li>Pause/resume support</li>
                <li>Error recovery</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Upload States</h2>
            <p>Clear visual feedback for each upload state:</p>
            <ul>
              <li><strong>Idle</strong> - Ready to accept files with drag & drop zone</li>
              <li><strong>Validating</strong> - Checking file type, size, and format</li>
              <li><strong>Uploading</strong> - Progress bar with percentage and estimated time</li>
              <li><strong>Processing</strong> - Server-side processing (transcoding, optimization)</li>
              <li><strong>Complete</strong> - Success confirmation with preview</li>
              <li><strong>Error</strong> - Clear error message with retry option</li>
            </ul>
          </Content.Prose>
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
            <ul>
              <li><strong>Upload Progress</strong> - Percentage and bytes uploaded/total</li>
              <li><strong>Speed Indicator</strong> - Current upload speed (MB/s)</li>
              <li><strong>Time Remaining</strong> - Estimated time to completion</li>
              <li><strong>Queue Position</strong> - Position in batch upload queue</li>
              <li><strong>Pause/Resume</strong> - Allow users to control upload flow</li>
            </ul>
          </Content.Prose>
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
