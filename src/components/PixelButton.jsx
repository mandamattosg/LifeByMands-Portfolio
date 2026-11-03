// Botão cinza estilo sistema antigo ("Ok", "Yes", "Run", "Cancel").
export default function PixelButton({ children, ...props }) {
  return (
    <button type="button" className="pixel-button" {...props}>
      <span>{children}</span>
    </button>
  )
}
