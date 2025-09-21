import "../../css/Navbar/Options.css";

export default function Options({ optionData, changeActiveMenu, isVisible }) {
  return (
    <>
      <div
        className={`options-main ${
          isVisible ? "visible" : null
        } bg-dark text-white w-100`}
        onMouseLeave={() => {
          changeActiveMenu(null);
        }}
      >
        <div className="container options-container py-3">
          <div className="row">
            {optionData.map(({ columnTitle, columnData }, idx) => {
              return (
                <div className="col-3" key={idx}>
                  <h5>{columnTitle}</h5>
                  <ul className="list-unstyled mt-3 fs-6">
                    {columnData.map((e, i) => {
                      return (
                        <li role="button" key={i}>
                          {e}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
