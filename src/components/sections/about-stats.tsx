export default function AboutStats() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-primary">20+</span>
        <span className="text-sm text-muted-foreground">Years Experience</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-primary">200+</span>
        <span className="text-sm text-muted-foreground">Locations</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-primary">300+</span>
        <span className="text-sm text-muted-foreground">ATMs Installed</span>
      </div>
    </div>
  );
}
