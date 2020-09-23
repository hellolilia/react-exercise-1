import React from 'react';
import './Education.scss';

function Education() {
  return (
    <div className="education">
      <h3>EDUCATION</h3>
      <ul>
        <li>
          <h4 className="years">1994</h4>
          <div className="events">
            <h4>I was born in Katowice</h4>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit. Sapiente,
              exercitationem, totam, dolores iste dolore est aut modi.
            </p>
          </div>
        </li>
        <li>
          <h4 className="years">2005</h4>
          <div className="events">
            <h4>Secondary school specializing in artstic</h4>
            <p>
              Eos, explicabo,nam, tenetur et ab eius deserunt aspematur ipsum
              ducimus quibusdam quis voluptatibus.
            </p>
          </div>
        </li>
        <li>
          <h4 className="years">2009</h4>
          <div className="events">
            <h4>First level graduation in Graphic Design</h4>
            <p>
              Aspematur, mollitia, quos maxime eius susciplt sed beatae
              ducimusquaerat quibusdam perferendis? lusto, quibusdam asperiores
              unde repellat.
            </p>
          </div>
        </li>
        <li>
          <h4 className="years">2012</h4>
          <div className="events">
            <h4>Second level graduation in Graphic Design</h4>
            <p>Ducimus, aliquam tempore autem itaque at accusantium!</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
