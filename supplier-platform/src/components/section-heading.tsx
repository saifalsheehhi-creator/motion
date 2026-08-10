import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  tab: string;
  title: string;
  note?: string;
}

export function SectionHeading({ tab, title, note }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-8">
      <div>
        <div className="font-mono text-xs tracking-wide text-primary">{tab}</div>
        <h2 className="mt-1 text-2xl sm:text-3xl">{title}</h2>
      </div>
      {note ? (
        <p className="max-w-[34ch] pb-1 text-sm text-muted-foreground">{note}</p>
      ) : null}
    </Reveal>
  );
}
