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
import Grid from '@mui/material/Grid'

const EducationLayout = () => {
  const navigationItems = resourceNavigation()
  const navigationNewsItems = latestNewsNavigation()
  const exams = examNavigation()

  return (
    <>
      <Grid container direction="row">
        <Grid
          item
          sm={2}
          style={{
            borderRight: '1px solid #EEEEEE',
            paddingRight: '0',
          }}
        >
          <EducationNav />
        </Grid>
        <Grid
          item
          sm={10}
          style={{
            padding: '0',
            height: '100vh',
          }}
        >
          <Header />
          <Grid container className="bg-gray-200 ml-0 gap-1">
            <Grid
              md={7}
              direction="column"
              className="flex-col bg-white  px-5 py-5 flex flex-col ml-3 gap-6"
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
                <div className="flex-col items-start">
                  <h1 className="font-ubuntu text-24 font-medium l text-left mb-2">
                    Popular Examination
                  </h1>
                  <Grid>
                    {exams.map((exam, index) => (
                      <Grid
                        key={index}
                        sm={12}
                        style={{
                          display: 'flex',
                          backgroundColor: '#f5f5f5',
                          flexDirection: 'column',
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
                      </Grid>
                    ))}
                  </Grid>
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
                  <Grid
                    direction="row"
                    container
                    style={{
                      justifyContent: 'space-between',
                      textAlign: 'center',
                      gap: '1rem',
                    }}
                  >
                    <Grid
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
                    </Grid>
                    <Grid
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
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      textAlign: 'center',
                      gap: '1rem',
                    }}
                  >
                    <Grid
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
                    </Grid>
                    <Grid
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
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid
              container
              direction="column"
              md={4.6}
              className="bg-white px-5 py-5 flex flex-col ml-3"
            >
              <Grid item direction="column">
                <h1 className="justify-center items-center font-ubuntu text-24 font-medium l mb-2">
                  Resources
                </h1>
                <Grid container>
                  {navigationItems.map((item, index) => (
                    <Grid
                      item
                      direction="column"
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '1rem',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                        width: '450px',
                        alignItems: 'flex-start',
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
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid  item direction="column" className="flex-col items-start mt-7">
                <h1 className="font-ubuntu text-24 font-medium l text-left mb-2">
                  Latest News
                </h1>
                <Grid container>
                  {navigationNewsItems.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      direction="column"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '1rem',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                        width: '450px',
                        justifyContent:"center",
                        alignItems: 'flex-start',
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
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default EducationLayout
