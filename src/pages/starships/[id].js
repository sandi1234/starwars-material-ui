import axios from 'axios'
import Starship from '../../components/Starships/Starship'

const StarshipData = ({ data }) => {
  return (
    <div>
      <Starship data={data} />
    </div>
  )
}

export default StarshipData

export async function getServerSideProps(context) {
  const { id } = context.query

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/starships/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data },
  }
}
