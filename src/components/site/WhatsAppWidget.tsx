import { useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import logo from "@/assets/logo.png";

const WA_HREF = "https://wa.me/27726904123?text=" + encodeURIComponent("Hello, I'd like a garden quote from Eden Gardens.");
const DISMISS_KEY = "eg-whatsapp-bubble-dismissed";
const SHOW_DELAY_MS = 2000;

export function WhatsAppGlyph({ size = 30 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.696 4.611 1.899 6.484L4 29l7.699-1.859A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.567 1.103 1.124-4.446-.232-.365A9.7 9.7 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.935 24.75 16.004 24.75Z" />
      <path d="M21.61 17.48c-.305-.153-1.804-.89-2.084-.992-.28-.102-.484-.153-.687.153-.203.305-.789.991-.967 1.195-.178.203-.356.229-.66.076-.305-.153-1.29-.475-2.457-1.516-.908-.81-1.522-1.812-1.7-2.117-.178-.305-.019-.47.134-.622.137-.137.305-.356.458-.534.153-.178.203-.305.305-.508.102-.203.05-.381-.025-.534-.076-.153-.687-1.657-.942-2.268-.248-.596-.5-.515-.687-.524l-.585-.01c-.203 0-.534.076-.814.381-.28.305-1.068 1.043-1.068 2.545s1.093 2.953 1.245 3.157c.153.203 2.15 3.283 5.207 4.604.727.314 1.294.501 1.737.641.73.232 1.393.199 1.918.121.585-.087 1.804-.738 2.059-1.451.254-.712.254-1.323.178-1.451-.076-.127-.28-.203-.585-.356Z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const closeBubble = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp chat"
          className="whatsapp-bubble w-[300px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <div className="flex items-center gap-3 bg-[var(--whatsapp-dark)] px-4 py-3">
            <img
              src={logo}
              alt="Eden Gardens"
              className="h-10 w-10 rounded-full border-2 border-white/40 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">Eden Gardens</p>
              <p className="text-xs text-white/75">Typically replies within an hour</p>
            </div>
            <button
              type="button"
              onClick={closeBubble}
              aria-label="Close"
              className="shrink-0 rounded-full p-1 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="bg-[#ECE5DD] px-4 py-4">
            <div className="relative max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-[#111b21] shadow">
              Hello 👋
              <br />
              Thank you for contacting Eden Gardens!
              <br />
              How can we help you?
            </div>
          </div>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[var(--whatsapp)] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--whatsapp)]/90"
          >
            Send a message
            <Send size={16} aria-hidden="true" />
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="whatsapp-btn bg-[var(--whatsapp)] text-white"
      >
        {open ? <X size={26} /> : <WhatsAppGlyph size={30} />}
      </button>
    </div>
  );
}
