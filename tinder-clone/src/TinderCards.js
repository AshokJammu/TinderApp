import React,{useState} from "react";
import TinderCard from "react-tinder-card"

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"steve Jobs",
            url:"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
        },
        {
            name:"Mark Jukerberg",
            url:"https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQyMDA0NDgwMzUzNzcyNjA2%2Fmark-zuckerberg_gettyimages-512304736jpg.jpg"
        },
    ]);
  return (
    <div>
      <h1>Tinder Cards</h1>

      {people.map((person) => (
        <TinderCard className="swipe" 
        key={person.name}
        preventSwipe={['up','down']}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
