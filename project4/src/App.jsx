import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  //network database using hooks

  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const [filterdata, setfilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  //useeffect is a callback
  useEffect(() => {
    const fetchfoodData = async () => {
      setloading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setloading(false);
        // console.log(json)
        setdata(json);
        setfilterData(json);
      } catch (error) {
        setError("unable to fetch the data");
      }
    };
    fetchfoodData();
  }, []);

  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setfilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setfilterData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="Images/logo.png" alt="" />
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="search here" />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value)=>
          <Button
          isSelected={selectedBtn===value.type}
          key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
          )}
          
          {/* <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>
      <SearchResults data={filterdata} />
    </>
    //use react fragment
  );
};

export default App;

export const Container = styled.div`
  /* background-color: #0D0D0D; */
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 15px;
      text-align: center;
      padding: 0 10px; // 0-top bottom and 10px- left and right
    }
  }


 @media (0 <width<600px){
  flex-direction: column;
  height: 120px;
 }
`;



const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background:${({isSelected}) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({isSelected}) => (isSelected ? "white" : "#ff4343")};

  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
