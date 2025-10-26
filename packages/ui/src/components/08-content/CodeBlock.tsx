import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, code, language, showLineNumbers = false, copyable = true, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split("\n");

    return (
      <div className={cx("code-block", className)}>
        {(language || copyable) && (
          <div className="code-block-header">
            {language && <span className="code-block-language">{language}</span>}
            {copyable && (
              <Button variant="ghost" size="sm" onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            )}
          </div>
        )}
        <pre ref={ref} className="code-block-pre" {...props}>
          <code className="code-block-code">
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div key={i} className="code-block-line">
                  <span className="code-block-line-number">{i + 1}</span>
                  <span className="code-block-line-content">{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    );
  }
);
CodeBlock.displayName = "CodeBlock";
