import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>

        </ul>

        <ul className="fList">
          <li className="fListItem"> Taxi </li>
          <li className="fListItem">Flights</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
<div>
  {/* Other JSX code */}
  <p>&copy; 2023 Team 344. All rights reserved.</p>
</div>

    </div>
  );
};

export default Footer;
