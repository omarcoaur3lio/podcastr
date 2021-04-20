
export default function Home(props) {
  return (
    <div>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

// Chamada a API usando o conceito de SSG
export async function getStaticProps() {
    const response = await fetch("http://localhost:3333/episodes");
    const data = await response.json();

    return {
      props: {
        episodes:  data,
      },
      revalidate: 60 * 60 * 8, // intervalo para que uma nova requisição seja feita (nesse caso 8h)
    }
}