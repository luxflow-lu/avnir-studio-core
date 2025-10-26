import * as React from "react";
import { cx } from "../../utils/cx";

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

export const Markdown = React.forwardRef<HTMLDivElement, MarkdownProps>(
  ({ className, children, ...props }, ref) => {
    // Simple markdown parser for basic formatting
    const parseMarkdown = (text: string) => {
      let html = text;
      
      // Headers
      html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
      html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
      html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
      
      // Bold
      html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
      
      // Italic
      html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
      
      // Code inline
      html = html.replace(/`(.*?)`/gim, '<code>$1</code>');
      
      // Links
      html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
      
      // Line breaks
      html = html.replace(/\n/gim, '<br />');
      
      return html;
    };

    return (
      <div
        ref={ref}
        className={cx("markdown", className)}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(children) }}
        {...props}
      />
    );
  }
);
Markdown.displayName = "Markdown";
