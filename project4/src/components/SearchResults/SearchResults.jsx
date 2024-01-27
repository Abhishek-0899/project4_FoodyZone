import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";
const SearchResults = ({data}) => {
  return (
    <FoodCardsContainer>
    <Container>
    <FoodCards>
            
            {
                data?.map(({name,image,text,price})=>(<FoodCard key={name}>

                    <div className="food_image">
                        <img src={BASE_URL + image}/>
                    </div>
                    <div className="food_info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    <Button>${price.toFixed(2)}</Button>
                    </div>
                </FoodCard>))
            }
        </FoodCards>
    </Container>
      </FoodCardsContainer>
  );
}

// const temp = ()=>[
//   {
//       "name": "Boilded Egg",
//       "price": 10,
//       "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//       "image": "/images/egg.png",
//       "type": "breakfast"
//   },
// ];

export default SearchResults;

const FoodCardsContainer = styled.section`
  /* height: calc(100vh - 210px); */
  min-height: calc(100vh - 210px);
  background-image: url("Images/bg.png");
  /* filter: brightness(60%); */
`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;
`;
const FoodCard = styled.div`

width: 340px;
height: 167px;
flex-shrink: 0;
border-radius: 19.447px;
border: 0.659px solid #98F9FF;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

display: flex;
padding: 8px;
.food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
    button{
        font-size: 12px;
    }
}
`;





// ctrl+space to import any component