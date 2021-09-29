import React from "react";

function ContentParagraphList({ paragraphsArray }) {
  return (
    <>
      {paragraphsArray.map(
        (paragraph, index) =>
          paragraph && (
            <span key={index}>
              {paragraph}
              <br />
            </span>
          )
      )}
    </>
  );
}

export default ContentParagraphList;
