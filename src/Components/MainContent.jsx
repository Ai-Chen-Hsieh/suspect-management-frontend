import Container from "./Container";
import Card from "./Card";
import { useSelector } from "react-redux";
import { classifiedDataSelector } from "../store/crime/crimeSelector";
const MainContent = () => {
  const { isLoading } = useSelector((state) => state.crimesList);
  const classifiedCrimes = useSelector(classifiedDataSelector);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <main className="max-w-11/12 mx-auto my-6 flex flex-wrap justify-between">
      <Container title={"Wanted"} count={classifiedCrimes.wanted.length}>
        {classifiedCrimes.wanted.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container
        title={"High Risk Individual"}
        count={classifiedCrimes.highRisk.length}
      >
        {classifiedCrimes.highRisk.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container
        title={"High Risk Individual"}
        count={classifiedCrimes.custody.length}
      >
        {classifiedCrimes.custody.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container title={"Arrested"} count={classifiedCrimes.arrested.length}>
        {classifiedCrimes.arrested.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
    </main>
  );
};

export default MainContent;
