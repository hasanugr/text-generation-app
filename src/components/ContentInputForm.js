import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getParagraphsAsync } from "../services/services";

function ContentInputForm() {
  const dispatch = useDispatch();

  const [paragraphCount, setParagraphCount] = useState("4");
  const [includeHtml, setIncludeHtml] = useState("text");

  useEffect(() => {
    dispatch(getParagraphsAsync({ paragraphCount, includeHtml }));
  }, [dispatch, paragraphCount, includeHtml]);

  return (
    <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="">Paragraphs</label>
        <div className="number">
          <input
            type="number"
            max="20"
            min="1"
            value={paragraphCount}
            onChange={(e) => {
              setParagraphCount(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Include HTML</label>
        <div className="select">
          <select
            className="form-control"
            defaultValue={includeHtml}
            onChange={(e) => {
              setIncludeHtml(e.target.value);
            }}
          >
            <option value="html">Yes</option>
            <option value="text">No</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default ContentInputForm;
