import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(100);

  // console.log(counter, "counter");
  // ASSESSMENT => create a counter app that increments by 20 and decrements by 3.
  // Handle the edge case where a value goes below 0 and a value goes above 100

  // SOLUTION
  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => {
            if (prev + 20 >= 100) {
              return 100;
            }
            return prev + 20;
          });
        }}
      >
        Increase counter
      </button>
      <button
        onClick={() => {
          setCounter((prev) => {
            if (prev - 3 <= 0) return 0;
            return prev - 3;
          });
        }}
      >
        Decrease counter
      </button>
      <div>{counter}</div>
    </div>
  );
}

export default App;

type DataType = {
  name: string;
  age: number;
  track: "mobile" | "web";
  country: string;
};
const data: Array<DataType> = [
  {
    age: 10,
    country: "Nigeria",
    name: "Ezekiel",
    track: "mobile",
  },
  {
    age: 100,
    country: "Canada",
    name: "Samuel",
    track: "web",
  },
  {
    age: 40,
    country: "London",
    name: "Aishatu",
    track: "web",
  },
  {
    age: 12,
    country: "Afghanistan",
    name: "Farouk",
    track: "mobile",
  },
];

const GreetingsApp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      {data.map((item, index) => {
        return <Greetings key={index} studentInfo={item} />;
      })}
    </div>
  );
};

type Props = {
  studentInfo: DataType;
};

const Greetings = (props: Props) => {
  // console.log(props, "props");
  const { age, country, name, track } = props.studentInfo; // one way
  return (
    <div>
      <p>
        Hello there, my name is: {name} and i am {age} years old. I am in the{" "}
        {track} track and i am a citizen of {country}. Nice to meet you
      </p>
    </div>
  );
};

export { GreetingsApp };

// ASSESSMENT => create a counter app that increments by 20 and decrements by 3.
// Handle the edge case where a value goes below 0 and a value goes above 100.
// Now, The score should be displayed via a child component and not directly from the parent component

const Assessment = () => {
  const [counter, setCounter] = useState<number>(100);
  return (
    <div>
      <AssessmentDisplay counter={counter} setCounter={setCounter} />
    </div>
  );
};

export { Assessment };

type DisplayType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const AssessmentDisplay = ({ counter, setCounter }: DisplayType) => {
  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => {
            if (prev + 20 >= 100) {
              return 100;
            }
            return prev + 20;
          });
        }}
      >
        Child Increase counter
      </button>
      <button
        onClick={() => {
          setCounter((prev) => {
            if (prev - 3 <= 0) return 0;
            return prev - 3;
          });
        }}
      >
        Child Decrease counter
      </button>
      Child: {counter}
    </div>
  );
};

type StoreType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export const FakeStoreApiParentComponent = () => {
  const [store, setStore] = useState<Array<StoreType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Array<StoreType> = await res.json();
        setStore(data);
      } catch (error) {
        console.log(error, "Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, []);

  return <FakeStoreApiChildComponent isLoading={isLoading} store={store} />;
};

type ChildProps = {
  isLoading: boolean;
  store: Array<StoreType>;
};

const componentFnc = (store: StoreType[]) => {
  return store.map((item, index) => <Render key={index} item={item} />);
};

const FakeStoreApiChildComponent = ({ isLoading, store }: ChildProps) => {
  if (isLoading) return <p>Loading...</p>;

  const component = store.map((item, index) => {
    return <Render key={index} item={item} />;
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {component}
      {componentFnc(store)}
    </div>
  );
};

const Render = ({ item }: { item: StoreType }) => {
  return (
    <div key={item.id} style={{ border: "1px solid black" }}>
      <p>Title: {item.title}</p>
      <p>Price: {item.price}</p>
      <img src={item.image} alt={item.title} width={200} />
      <p>Category: {item.category}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};
