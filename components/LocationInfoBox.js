import moment from 'moment'

export default function LocationInfoBox({ info }) {
  return (
    <div className="location-info">
      <h2>Forest Fire Location Info</h2>
      <ul>
        <li>
          Date: <strong>{moment(info.date).format("MMMM Do YYYY")}</strong>
        </li>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <li>
          SOURCE: <a href={info.url}>{info.source}</a>
        </li>
      </ul>
    </div>
  );
}
