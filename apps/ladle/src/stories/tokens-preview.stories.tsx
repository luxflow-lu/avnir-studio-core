export default { title: "Tokens/Preview" };

const Box = ({ name, style }: { name: string; style: React.CSSProperties }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded" style={style} />
    <code className="text-sm text-[var(--text-muted)]">{name}</code>
  </div>
);

export const Swatches = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-[var(--bg)] text-white">
    <Box name="--bg" style={{ background: "var(--bg)" }} />
    <Box name="--surface" style={{ background: "var(--surface)" }} />
    <Box name="--bg-light" style={{ background: "var(--bg-light)", color: "black" }} />
    <Box name="--brand" style={{ background: "var(--brand)" }} />
    <Box name="--brand-on" style={{ background: "var(--brand-on)" }} />
    <Box name="--text-muted" style={{ background: "var(--text-muted)" }} />
  </div>
);
