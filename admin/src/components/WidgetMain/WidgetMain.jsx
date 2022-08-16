import "./WidgetMain.css";

export default function WidgetMain() {
  const Button = ({ type }) => {
    return <button className={"WidgetMainButton " + type}>{type}</button>;
  };
  return (
    <div className="WidgetMain">
      <h3 className="WidgetMainTitle">Movies</h3>
      <table className="WidgetMainTable">
        <tbody>
          <tr className="WidgetMainTr">
            <th className="WidgetMainTh">MovieTitle</th>
            <th className="WidgetMainTh">Date</th>
            <th className="WidgetMainTh">Type</th>
            <th className="WidgetMainTh">Genre</th>
          </tr>
          <tr className="WidgetMainTr">
            <td className="WidgetMainUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="WidgetMainImg"
              />
              <span className="WidgetMainName">Tom &amp; jerry</span>
            </td>
            <td className="WidgetMainDate">2 Jun 2022</td>
            <td className="WidgetMainAmount">Series</td>
            <td className="WidgetMainStatus">
              Cartoon
            </td>
          </tr>
          <tr className="WidgetMainTr">
            <td className="WidgetMainUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="WidgetMainImg"
              />
              <span className="WidgetMainName">Tom &amp; jerry</span>
            </td>
            <td className="WidgetMainDate">2 Jun 2022</td>
            <td className="WidgetMainAmount">Series</td>
            <td className="WidgetMainStatus">
            Cartoon
            </td>
          </tr>
          <tr className="WidgetMainTr">
            <td className="WidgetMainUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="WidgetMainImg"
              />
              <span className="WidgetMainName">Tom &amp; jerry</span>
            </td>
            <td className="WidgetMainDate">2 Jun 2022</td>
            <td className="WidgetMainAmount">Series</td>
            <td className="WidgetMainStatus">
            Cartoon
            </td>
          </tr>
          <tr className="WidgetMainTr">
            <td className="WidgetMainUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="WidgetMainImg"
              />
              <span className="WidgetMainName">Tom &amp; jerry</span>
            </td>
            <td className="WidgetMainDate">2 Jun 2022</td>
            <td className="WidgetMainAmount">Series</td>
            <td className="WidgetMainStatus">
                 Cartoon
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
