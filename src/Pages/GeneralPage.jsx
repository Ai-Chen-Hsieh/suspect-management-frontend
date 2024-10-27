import List from "../Components/List";
import ListItem from "../Components/ListItem";
import { useSelector } from "react-redux";
import { useMemo } from "react";
const GeneralPage = () => {
  const { data } = useSelector((state) => state.crimesList);

  const list = useMemo(() => data.filter((item) => !item.priority), [data]);
  return (
    <section className="mx-auto w-full md:w-6/12">
      <h2 className="mb-4 text-center text-2xl">General list</h2>
      <List>
        {list.map((item) => (
          <ListItem key={item._id} item={item} isGeneral={true} />
        ))}
      </List>
    </section>
  );
};

export default GeneralPage;
