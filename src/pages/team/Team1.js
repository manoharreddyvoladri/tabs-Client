import "./team.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
const Team = () => {

  return (
    <div>
      <Navbar />
      <Header type="team" />
    
            <section class="section-team" id="team">
        <div class="container">
          <span class="subheading">Our team</span>
          <h2 class="heading-secondary heading-team">
            Meet Our Development Team
          </h2>

          <div class="team-container">
            <div class="team">
              <figure class="team-img">
              </figure>
              <div class="team-content">
                <h3 class="team-name">Manohar</h3>
                <span class="team-position">21BRS1177</span>
                <span class="team-activities">Frontend & Backend</span>
              </div>
            </div>
            <div class="team">
              <figure class="team-img">
              </figure>
              <div class="team-content">
                <h3 class="team-name">NagaVishnesh</h3>
                <span class="team-position">21BRS1312</span>
                <span class="team-activities">Frontend & Backend</span>
              </div>
            </div>
            <div class="team">
              <figure class="team-img">
            
              </figure>
              <div class="team-content">
                <h3 class="team-name">SivaNagaRaju</h3>
                <span class="team-position">21BRS1389</span>
                <span class="team-activities">Backend</span>
              </div>
            </div>
            <div class="team">
              <figure class="team-img">
        
              </figure>
              <div class="team-content">
                <h3 class="team-name">Kaushal</h3>
                <span class="team-position">21BPS1438</span>
                <span class="team-activities">Backend</span>
              </div>
            </div>

            <div class="team">
              <figure class="team-img">
              </figure>
              <div class="team-content">
                <h3 class="team-name">Komal G</h3>
                <span class="team-position">21BRS1280</span>
                <span class="team-activities">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 </div>
  );
};

export default Team;
