import {
  Anchor,
  Boxes,
  Container,
  Globe,
  Package,
  Plane,
  Route,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

const items = [
  { icon: Ship, side: "start", top: "6%", inset: "3%", size: 34, duration: 15, delay: 0 },
  { icon: Package, side: "end", top: "13%", inset: "6%", size: 26, duration: 12, delay: 1.5 },
  { icon: Truck, side: "start", top: "24%", inset: "8%", size: 30, duration: 17, delay: 3 },
  { icon: Globe, side: "end", top: "30%", inset: "2%", size: 40, duration: 20, delay: 0.8 },
  { icon: Container, side: "start", top: "42%", inset: "2%", size: 28, duration: 14, delay: 2.2 },
  { icon: Plane, side: "end", top: "48%", inset: "7%", size: 30, duration: 16, delay: 4 },
  { icon: Warehouse, side: "start", top: "58%", inset: "6%", size: 30, duration: 18, delay: 1 },
  { icon: Anchor, side: "end", top: "63%", inset: "3%", size: 26, duration: 13, delay: 2.6 },
  { icon: Boxes, side: "start", top: "74%", inset: "4%", size: 32, duration: 19, delay: 3.4 },
  { icon: Route, side: "end", top: "80%", inset: "5%", size: 28, duration: 15, delay: 0.4 },
  { icon: Ship, side: "start", top: "90%", inset: "7%", size: 24, duration: 21, delay: 2 },
  { icon: Package, side: "end", top: "94%", inset: "2%", size: 22, duration: 12, delay: 3.8 },
];

export function SideDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden xl:block"
      aria-hidden
    >
      {items.map((item, i) => (
        <item.icon
          key={i}
          strokeWidth={1.25}
          className="ambient-icon absolute text-foreground/[0.07]"
          style={{
            top: item.top,
            [item.side === "start" ? "insetInlineStart" : "insetInlineEnd"]: item.inset,
            width: item.size,
            height: item.size,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
