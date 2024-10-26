import Container from "./Container";
import Card from "./Card";
import { useSelector } from "react-redux";

const MainContent = () => {
  const { classifiedData, isLoading } = useSelector(
    (state) => state.crimesList,
  );

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <main className="max-w-11/12 mx-auto my-6 flex flex-wrap justify-between">
      <Container title={"Wanted"} count={classifiedData.wanted.length}>
        {classifiedData.wanted.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container
        title={"High Risk Individual"}
        count={classifiedData.highRisk.length}
      >
        {classifiedData.highRisk.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container
        title={"High Risk Individual"}
        count={classifiedData.custody.length}
      >
        {classifiedData.custody.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
      <Container title={"Arrested"} count={classifiedData.arrested.length}>
        {classifiedData.arrested.map((content) => (
          <Card key={content._id} person={content}></Card>
        ))}
      </Container>
    </main>
  );
};

export default MainContent;
