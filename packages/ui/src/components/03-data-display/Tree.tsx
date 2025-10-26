import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

export interface TreeItemProps {
  node: TreeNode;
  level?: number;
}

export const TreeItem: React.FC<TreeItemProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-item">
      <div className="tree-item-content" style={{ "--tree-level": level } as React.CSSProperties}>
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="tree-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "−" : "+"}
          </Button>
        )}
        <span className="tree-label">{node.label}</span>
      </div>
      {hasChildren && isOpen && (
        <div className="tree-children">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TreeNode[];
}

export const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  ({ className, data, ...props }, ref) => (
    <div ref={ref} className={cx("tree", className)} {...props}>
      {data.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  )
);
Tree.displayName = "Tree";
