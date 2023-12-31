import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <Div>
      {/* hero section starts here */}
      <div className="section-1">
        <div className="heading">
          <Navbar />
          <br /> <br />
          <div className="logo-container">
            <img src="logo2.png" alt="" className="logo1" />

            <h3 className="pop">
              About Us <hr />
            </h3>

            <img src="logo1.png" alt="" className="logo2" />
          </div>
        </div>
      </div>
      {/* hero section ends here */}

      <div className="history">
        <h1>History</h1>

        <p>
          Dele Preparatory School was founded on the 5th of March 1983 in
          Wellington, Freetown, by Mrs Eudora Francess Browne. The school
          started with one pupil and that number grew to 9 pupils by the end of
          the school year. Predominantly the school started at pillar street but
          as the number of pupils increased the school relocated to Philip
          street. In …….. the school obtained its registration from the Ministry
          of Education and sat to its 1st NPSE. The school has been producing
          remarkable results since it’s started. In …… the school relocated to a
          bigger location where its secondary school - Dele Peddle International
          High School started. In …… the school sent their 1st BECE pupils and
          was amongst the 1st ten schools in the country. We have also been
          recorded as one of the top schools within 100% passes since we started
          taking the WASSCE in ……The school is a co-educational primary and
          secondary school that accommodates the educational needs of children
          from the ages of 2years (daycare) to the completion of secondary
          school (sss3). All instructions are in English. The school year is
          divided into 3 terms (September- December, January- April, May -July)
        </p>
      </div>
      <div className="clip">
        <div className="vision">
          <h1>
            Vision <br />
          </h1>

          <p>
            Dele Preparatory School and Dele Peddle International School is
            committed to providing every scholar with a positive and inclusive
            learning environment that promotes G.O.L.D. through data-driven
            instruction, trauma informed teaching practices & high expectations.
          </p>
        </div>
      </div>

      <div className="mission">
        <h1>
          Mission <br />
        </h1>
        <p>
          A positive learning environment that creates confident and emotionally
          intelligent scholars who own their learning, solve problems, and
          communicate their thoughts and solutions effectively.
        </p>
      </div>

      <div className="clip-2">
        <div className="mottos">
          <h1 className="mottoss">Mottos</h1>

          <p>
            Primary - Never despair <br /> Secondary - Summoning the human
            spirit to its best self
          </p>
        </div>
      </div>

      <div className="extra">
        <h1>
          Extra Curricular <br /> Activities
        </h1>
        <div className="text">
          <p>
            We believe that a well-rounded learning program is best for our
            future leaders. Hence, added to our academic courses, we offer
            learning through: <br /> <br /> Music Department (including our own
            school band) <br /> <br /> Drama club <br /> Athletics <br /> <br />{" "}
            Literary and Debating Society <br /> <br /> Educational excursions
            within and outside Sierra Leone
          </p>
        </div>
      </div>

      <Footer />
    </Div>
  );
};

export default About;

const Div = styled.div`
  .section-1 {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 100%
      ),
      url("Main.png"), lightgray 0px -369.456px / 100% 205.861% no-repeat;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .heading {
    width: 100%;
    height: 500px;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
  }
  .logo-container img {
    width: 120px;
    height: 120px;
  }

  .logo-container h1 {
    color: #70ff00;
    text-align: center;
    font-family: "Fuzzy Bubbles", cursive;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
  }

  .history {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 227px;
    margin-left: 140px;
    text-align: left;
  }

  .history h1 {
    color: #800020;
    font: 700 50px/97.5px "Fuzzy Bubbles", sans-serif;
  }

  .history p {
    display: flex;
    max-width: 570px;
    padding: 38.91px 0px 39.9px 0px;
    align-items: center;
    align-content: center;
    flex-shrink: 0;
    flex-wrap: wrap;
    color: #000615;
    font: 400 20px/28.8px "Baloo Bhai 2", sans-serif;
  }

  .vision {
    margin-top: 120px;
    height: 320px;
    display: flex;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 230px;
    clip-path: polygon(0 0, 100% 6%, 100% 91%, 0 98%);
    width: 100%;
  }

  //   .clip{
  // background: rgb(0,0,0);
  //  background: linear-gradient(90deg, rgba(0,0,0,1) 2%, rgba(255,255,255,1) 6%);
  //   }

  .vision p {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    max-width: 400px;
  }

  .vision h1 {
    color: #faff00;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
  }

  .mission {
    margin-top: 30px;
    height: 100px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: start;
    gap: 227px;
  }

  .mission p {
    color: #000;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    max-width: 400px;
  }

  .mission h1 {
    color: #800020;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    // margin-right:100px;
  }

  .mottoss {
    color: #faff00;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    // border:1px solid blue;
    margin-right: 190px;
    text-align: left;
    max-width: 400px;
  }

  .mottos {
    margin-top: 120px;
    height: 320px;
    display: flex;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 80px;
    clip-path: polygon(0 14%, 100% 10%, 100% 100%, 0 87%);
  }

  .mottos p {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    max-width: 400px;
  }

  .extra {
    display: flex;
    max-width: 100%;
    padding: 100px 300px;
    justify-content: center;
    align-items: cener;
    gap: 200px;
  }

  .pop {
    color: #800020;
    text-align: center;
    font: 700 65px/97.5px "Fuzzy Bubbles", sans-serif;
    text-transform: uppercase;
    position: relative;

    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    color: #000615;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;

    max-width: 570px;
    height: 575.94px;
    flex-shrink: 0;
  }

  .third {
    color: #000615;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  .extra h1 {
    color: #800020;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    margin-left: 100px;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    .logo-container {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .logo1 {
      position: absolute;
      top: 50px;
      left: 40px;
      width: 120px;
      height: 120px;
    }
    .logo2 {
      position: absolute;
      top: 50px;
      right: 40px;
      width: 120px;
      height: 120px;
    }

    .pop {
      position: absolute;
      top: 150px;
      font-size: 45px;
    }

    .history {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      overflow: hidden;
      margin: 0;
    }
    .history p {
      padding: 10px;
      font-size: 18px;
    }

    .vision {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 0;
    }

    .vision h1 {
      font-size: 20px;
    }
    .vision p {
      font-size: 18px;
      text-align: center;
    }

    .mottos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
    }

    .mottoss {
      font-size: 20px;
      margin: 0;
    }
    .mottos p {
      font-size: 18px;
      text-align: center;
    }

    .mission {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
    }

    .mission h1 {
      font-size: 20px;
      margin-top: 80px;
    }
    .mission p {
      font-size: 18px;
    }

    .extra {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 0px;
      margin-bottom: 10px;
      height: 800px;
      margin-top: 0px;
    }

    .text {
      color: #000615;
      font-family: "Baloo Bhai 2", cursive;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      text-align: center;
    }

    .third {
      color: #000615;
      font-family: "Baloo Bhai 2", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      justify-content: center;
      margin: 0 auto;
    }
    .extra h1 {
      color: #800020;
      font-family: "Fuzzy Bubbles", cursive;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      text-align: center;
      margin: 0;
    }
  }
`;
