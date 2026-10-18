type Name = "whatsapp" | "arrow-down" | "phone" | "mail" | "chat" | "pen" | "code" | "rocket";

export function Icon({ name, size = 20 }: { name: Name; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const };
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5.04-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.2-2.98.95.97-2.9-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 3.6c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.8.14.19 1.9 3.03 4.7 4.12 2.32.9 2.8.72 3.3.68.5-.05 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.52-.32-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.8-.72-1.35-1.62-1.5-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.5-.84-2.05-.22-.52-.45-.45-.61-.46h-.52Z" /></svg>
      );
    case "arrow-down":
      return <svg {...common} {...stroke}><path d="M12 5v14M6 13l6 6 6-6" /></svg>;
    case "phone":
      return <svg {...common} {...stroke}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>;
    case "mail":
      return <svg {...common} {...stroke}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>;
    case "chat":
      return <svg {...common} {...stroke}><path d="M4 5h16v11H9l-5 4V5Z" /></svg>;
    case "pen":
      return <svg {...common} {...stroke}><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1ZM14 7l3 3" /></svg>;
    case "code":
      return <svg {...common} {...stroke}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>;
    case "rocket":
      return <svg {...common} {...stroke}><path d="M12 15l-3-3c1-4 4-8 10-9 0 6-4 9-8 10l1 2ZM9 12l-4 1 2-3M12 15l-1 4 3-2M8 16c-2 0-3 2-3 4 2 0 4-1 4-3" /></svg>;
  }
}
