import { Col, Row } from 'react-flexbox-grid'
import EducationNav from '../side-nav'
import Header from '../header'
import { IoArrowBackOutline } from 'react-icons/io5'
import banner from '../../assets/waec.svg'
import fifa from '../../assets/fifa.svg'
import nda from '../../assets/nda.svg'
import nabteb from '../../assets/Nabteb.svg'
import nimasa from '../../assets/nimasa.svg'
import trcn from '../../assets/Trcn.svg'
import resourceNavigation from '../../@core/navigations/resources'
import latestNewsNavigation from '../../@core/navigations/news'
import examNavigation from '../../@core/navigations/popular-exam'

const EducationLayout = () => {
  const navigationItems = resourceNavigation()
  const navigationNewsItems = latestNewsNavigation()
  const exams = examNavigation()

  return (
    <>
      <Row>
        <Col
          sm={2}
          style={{
            borderRight: '1px solid #EEEEEE',
              paddingRight: '0',
            //   minHeight: "screen"
            
          }}
        >
          <EducationNav />
        </Col>
        <Col
          sm={10}
          style={{
            padding: '0',
            height: '100vh',
          }}
        >
          <Header />
          <Row className="bg-gray-200 ml-0 gap-2">
            <Col
              md={7}
              className=" bg-white px-5 py-5 flex flex-col ml-3 gap-6"
            >
              <a href="" className="flex items-center">
                <IoArrowBackOutline />
                <h1 className="font-ubuntu text-24 font-medium l text-left">
                  Education
                </h1>
              </a>
              <div>
                <img width={700} height={500} src={banner} alt="notify" />
              </div>
              <div>
                <div className="flex flex-col items-start">
                  <h1 className="font-ubuntu text-24 font-medium l text-left mb-2">
                    Popular Examination
                  </h1>
                  <Row>
                    {exams.map((exam, index) => (
                      <Col
                        key={index}
                        sm={12}
                        style={{
                          backgroundColor: '#f5f5f5',
                          borderRadius: '10px',

                          gap: '1.2rem',
                          marginBottom: '1rem',
                        }}
                      >
                        <a
                          style={{
                            display: 'flex',
                            gap: '1.2rem',
                            padding: '1rem',
                            width: '700px',
                            marginBottom: '1rem',
                          }}
                          href={exam.link}
                        >
                          <img
                            width={36}
                            height={36}
                            src={exam.image}
                            alt={exam.exam}
                          />
                          <div>
                            <h1>{exam.exam}</h1>
                            <p>{exam.title}</p>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <div>
                <img width={700} height={500} src={fifa} alt="notify" />
              </div>
              <div>
                <h1 className="font-ubuntu text-24 font-medium l text-left mb-2">
                  Other examination
                </h1>
                <div>
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      textAlign: 'center',
                      gap: '1rem',
                    }}
                  >
                    <Col
                      sm={5.5}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#f5f5f5',
                        height: '10rem',
                        borderRadius: '10px',
                        marginBottom: '2rem',
                      }}
                    >
                      <img width={36} height={36} src={nda} alt="nda" />
                      <h1>NDA</h1>
                      <p>Nigerian Defence Academy</p>
                    </Col>
                    <Col
                      sm={5.5}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#f5f5f5',
                        height: '10rem',
                        borderRadius: '10px',
                      }}
                    >
                      <img
                        width={36}
                        height={36}
                        src={nabteb}
                        alt="user-profile-picture"
                      />
                      <h1>NABTEB</h1>
                      <p>National Business and Technical Examinations Board</p>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      textAlign: 'center',
                      gap: '1rem',
                    }}
                  >
                    <Col
                      sm={5.5}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#f5f5f5',
                        marginBottom: '2rem',

                        height: '10rem',
                        borderRadius: '10px',
                      }}
                    >
                      <img
                        width={36}
                        height={36}
                        src={nimasa}
                        alt="user-profile-picture"
                      />
                      <h1>NIMASA</h1>
                      <div>
                        Nigerian Maritime Administration and Safety Agency
                      </div>
                    </Col>
                    <Col
                      sm={5.5}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#f5f5f5',
                        height: '10rem',

                        borderRadius: '10px',
                      }}
                    >
                      <img
                        width={36}
                        height={36}
                        src={trcn}
                        alt="user-profile-picture"
                      />
                      <h1>TRCN PQE</h1>
                      <p>
                        Teachers' Registration Council of Nigeria Professional
                        Qualifying Examination
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              md={4.2}
              className="bg-white px-5 py-5 flex flex-col ml-3 mr-1"
            >
              <div className="flex flex-col">
                <h1 className="justify-center items-center font-ubuntu text-24 font-medium l mb-2">
                  Resources
                </h1>
                <Row>
                  {navigationItems.map((item, index) => (
                    <Col
                      key={index}
                      style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                        width: '450px',
                        alignItems: 'center',
                      }}
                    >
                      <a
                        style={{
                          display: 'flex',
                          gap: '1.5rem',
                          padding: '1rem',
                          alignItems: 'center',
                          height: '5rem',
                        }}
                        href={item.link}
                      >
                        <img
                          width={36}
                          height={36}
                          src={item.image}
                          alt={item.title}
                        />
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </a>
                    </Col>
                  ))}
                </Row>
              </div>
              <div className="flex flex-col items-start mt-7">
                <h1 className="font-ubuntu text-24 font-medium l text-left mb-2">
                  Latest News
                </h1>
                <Row>
                  {navigationNewsItems.map((item, index) => (
                    <Col
                      key={index}
                      style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                        width: '450px',
                        alignItems: 'center',
                      }}
                    >
                      <a
                        style={{
                          marginBottom: '1rem',
                          height: '5rem',
                          display: 'flex',
                          gap: '1.5rem',
                          padding: '1rem',
                          alignItems: 'center',
                        }}
                        href=""
                      >
                        <img
                          width={36}
                          height={36}
                          src={item.image}
                          alt={item.title}
                        />
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </a>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default EducationLayout
