import { Code, HeartStraight } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex absolute bottom-0 align-center justify-between bg-gray-900 w-full px-8 py-4">
      <div className="flex items-center justify-center gap-4">
        <Code size={48} />
        <span className="text-2xl bold text-gray-100">
          Made with ❤️ by Mateus Holanda
        </span>
      </div>
      <a href="#" className="self-center hover:text-gray-200">
        Privacy Policies
      </a>
    </footer>
  )
}