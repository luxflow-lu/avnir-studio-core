import { Button } from "@avnir/ui";

export default { title: "Primitives/Button" };

export const Solid = () => (
  <div className="flex gap-3">
    <Button size="sm">sm</Button>
    <Button size="md">md</Button>
    <Button size="lg">lg</Button>
  </div>
);

export const Outline = () => (
  <div className="flex gap-3">
    <Button variant="outline" size="sm">sm</Button>
    <Button variant="outline" size="md">md</Button>
    <Button variant="outline" size="lg">lg</Button>
  </div>
);

export const Ghost = () => (
  <div className="flex gap-3">
    <Button variant="ghost" size="sm">sm</Button>
    <Button variant="ghost" size="md">md</Button>
    <Button variant="ghost" size="lg">lg</Button>
  </div>
);
