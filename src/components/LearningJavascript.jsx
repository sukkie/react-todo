const Person = {
  name: "Oyle",
  address: { line1: "tokyo", line2: "shinjuku" },
  profiles: ["facebook", "twitter", "linkedin"],
  printProfiles: () => {
    Person.profiles.map((profile) => console.log(profile));
  },
};

// function printProfile() {
//   console.log(Person.profile[0]);
// }

export default function LearningJavascript() {
  return (
    <>
      <div>{Person.name}</div>
      <div>{Person.address.line1}</div>
      <div>{Person.address.line2}</div>
      <div>{Person.profiles[0]}</div>
      <div>{Person.printProfiles()}</div>
    </>
  );
}
