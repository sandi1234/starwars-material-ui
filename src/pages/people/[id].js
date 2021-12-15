import Person from '../../components/People/Person'

const PersonData = ({ data, prevPage }) => {
  console.log(prevPage)
  return (
    <div>
      <Person data={data} />
    </div>
  )
}

export default PersonData

export async function getServerSideProps(context) {
  const prevPage = context.req.headers.referer
  const { id } = context.query

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/people/${id}`)
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
    props: { data, prevPage },
  }
}
