import { useParams } from 'react-router-dom'

const PengajuanDetail = () => {
  const { id } = useParams()
  return (
    <div>
      {`id: ${id}`}
    </div>
  )
}

export default PengajuanDetail
