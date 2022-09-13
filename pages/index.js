
import Head from 'next/head'
import Table from "../components/Table/Table"


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Table/>
     
    </div>
  )
}

export default Home
