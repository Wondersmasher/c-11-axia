import { useState, type Dispatch, type SetStateAction } from "react";
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

const GreetingsApp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <Greetings
        studentInfo={{
          age: 10,
          country: "Nigeria",
          name: "Ezekiel",
          track: "mobile",
        }}
      />
      <Greetings
        studentInfo={{
          age: 100,
          country: "Canada",
          name: "Samuel",
          track: "web",
        }}
      />
      <Greetings
        studentInfo={{
          age: 40,
          country: "London",
          name: "Aishatu",
          track: "web",
        }}
      />
      <Greetings
        studentInfo={{
          age: 12,
          country: "Afghanistan",
          name: "Farouk",
          track: "mobile",
        }}
      />
    </div>
  );
};

type Props = {
  studentInfo: {
    name: string;
    age: number;
    track: "mobile" | "web";
    country: string;
  };
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
