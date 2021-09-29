import { useSelector } from "react-redux";
import { selectParagraphs, selectStatus } from "../redux/paragraphsSlice";
import Loading from "./Loading";
import Error from "./Error";
import ContentParagraphList from "./ContentParagraphList";
import ContentInputForm from "./ContentInputForm";

function Content() {
  const status = useSelector(selectStatus);
  const paragraphsArray = useSelector(selectParagraphs);
  const error = useSelector((state) => state.paragraphs.error);

  return (
    <div className="content">
      <ContentInputForm />

      <p className="output jumbotron mt-4" style={{ textAlign: "left" }}>
        {status === "failed" && <Error message={error} />}
        {status === "loading" && <Loading />}
        {status === "succeeded" && (
          <ContentParagraphList paragraphsArray={paragraphsArray} />
        )}
      </p>
    </div>
  );
}

export default Content;
