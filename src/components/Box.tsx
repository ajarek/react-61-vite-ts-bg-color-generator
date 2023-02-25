type Props = {
  bg: string
  hex: string
  color: string
}
const Box = ({ bg, hex, color }: Props) => {
  return (
    <div
      className='box'
      style={{ background: bg, color: color }}
    >
      <p>{bg}</p>
      <p>{hex}</p>
    </div>
  )
}

export default Box
