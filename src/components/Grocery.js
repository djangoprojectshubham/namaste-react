import { useState } from "react";
const sectionData = [
  {
    title: "About",
    isVisible: false,
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  },
  {
    title: "Teams",
    isVisible: false,
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  },
  {
    title: "Careers",
    isVisible: false,
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  },
];

const Grocery = () => {
  const [sectionArray, setSection] = useState(sectionData);
  const modifySection = (index) => {
    const sections = [...sectionArray];
    for (let i = 0; i < sections.length; i++) {
      if (i !== index) {
        sections[i].isVisible = false;
      } else {
        sections[index].isVisible = !sections[index].isVisible;
      }
    }
    setSection(sections);
  };
  const Section = ({ index, title, description, isVisible }) => {
    return (
      <div className="border border-black m-2 p-2 bg-gray-200">
        <div>
          <span className="font-bold text-xl">{title}</span>
          {isVisible ? (
            <button
              className="m-1 px-4 bg-red-600 rounded-md"
              onClick={() => modifySection(index)}
            >
              Hide
            </button>
          ) : (
            <button
              className="m-1 px-4 bg-green-600 rounded-md"
              onClick={() => modifySection(index)}
            >
              Show
            </button>
          )}
        </div>
        <br />
        {isVisible && <span>{description}</span>}
      </div>
    );
  };
  return (
    <div>
      <h1>Our Online Instamart Store!!!</h1>
      {sectionArray.map((section, index) => {
        return (
          <Section
            title={section.title}
            index={index}
            isVisible={section.isVisible}
            description={section.description}
          />
        );
      })}
    </div>
  );
};

export default Grocery;
