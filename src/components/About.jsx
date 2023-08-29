import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <Div>
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" />

            <h1>
              About Us <hr />
            </h1>

            <img src="logo2.png" alt="" />
          </div>
        </div>
      </div>

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

      <div className="vision">
        <h1>
          Vision <br />
          StateMent
        </h1>

        <p>
          Dele Preparatory School and Dele Peddle International School is
          committed to providing every scholar with a positive and inclusive
          learning environment that promotes G.O.L.D. through data-driven
          instruction, trauma informed teaching practices & high expectations.
        </p>
      </div>

      <div className="mission">
        <h1>
          Mission <br /> Statement
        </h1>
        <p>
          A positive learning environment that creates confident, emotionally
          intelligent scholars who own their learning, solve problems and can
          communicate their thoughts and solutions effectively.{" "}
        </p>
      </div>

      <div className="vision">
        <h1>Motto</h1>

        <p>
          Primary - Never despair <br /> Secondary - Summoning the human spirit
          to its best self
        </p>
      </div>

      <div className="extra">
        <h1>
          Extra Curricular <br /> Activities
        </h1>
        <div className="text">
          <p>
            Scholars will build confidence by using their voice to share and
            build on each other’s ideas during class discussion using relevant
            data and/or text references as supporting evidence. (NEPF: 2.3, 3.1,
            3.2)
          </p>

          <p>
            {" "}
            Teachers will leverage questioning and discussion techniques to
            promote equity of student voice during classroom discussions and
            will use formative data captured to inform student feedback that
            will extend student learning and mastery of standards. (NEPF: 3.1,
            5.1)
          </p>

          <p className="third">
            What is the G.O.L.D standard for professional responsibilities? What
            is the GOLD level standard for each NEPF indicator?
          </p>

          <p>
            Example: GOLD practice: For 5.3: Rapid White Board Exchange <br />{" "}
            Purpose: is to take the guesswork out of instructional practices.
            Here are <br />
            the practices I want to see. <br />
            School-wide GOLD <br />
            Instructional GOLD <br />
            Department GOLD <br />
            Simple is not trivial. Simple scales <br />
            Intentional success
          </p>
        </div>
      </div>

      <Footer />
    </Div>
  );
};

export default About;

const Div = styled.div`
.section{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 4.35%, rgba(255, 255, 255, 0.60) 10.00%, rgba(0, 0, 0, 0.00) 48.69%), linear-gradient(184deg, #01263D 0%, rgba(0, 0, 0, 0.00) 40.00%),  url('Main.png');
  height:500px;
background-size:cover;
  background-repeat:no-repeat;
}

.head{
  background: linear-gradient(180deg, #01263D 10.00%, rgba(0, 0, 0, 0.00) 100%);#
  width:100%;
  height:500px;
}


.sec{
  display:flex;
  justify-content:center;
  gap:50px;
  align-items:center;
}
.sec img{
  width:120px;
  height:120px;
}

.sec h1{

color: #70FF00;
text-align: center;
font-family: 'Fuzzy Bubbles', cursive;
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
    gap: 318px;
  }

  .history h1 {
    color: #800020;
    font: 700 65px/97.5px "Fuzzy Bubbles", sans-serif;
 
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
    gap: 227px;
  }

  .vision p {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    max-width: 612px;
  }

  .vision h1 {
    color: #faff00;
   font-family: 'Fuzzy Bubbles', sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
  }

  .mission {
    margin-top: 120px;
    height: 420px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 227px;
  }

  .mission p {
    color: #000;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    max-width: 570px;
  }

  .mission h1 {
    color: #800020;
  font-family: 'Fuzzy Bubbles', sans-serif;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
  }

  .extra {
    display: flex;
    max-width: 1920px;
    padding: 100px 390px;
    justify-content: center;
    align-items: cener;
    gap: 100px;
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
  font-family: 'Fuzzy Bubbles', sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    .sec img{
      display:none;

    }

    .history {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      overflow: hidden;
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
            margin-top:0;
    }

    .vision h1 {
      font-size: 20px;
    }
    .vision p {
      font-size: 18px;
      text-align: center;
    }

    .mission {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
            margin-top:0;
         
    }

    .mission h1 {
      font-size: 20px;
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
      padding: 0;
      margin-bottom: 10px;
      height:1200px;
      margin-top:0;
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
      font-family: "Baloo Bhai 2", cursive;ai 2;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      justify-content: center;
      margin: 0 auto;
    }
    .extra h1 {
      color: #800020;
      font-family: 'Fuzzy Bubbles', cursive;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      text-align: center;
      margin-top:0;
    }
  }
`;
