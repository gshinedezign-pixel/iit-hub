const Home = () => (
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-md-7">
        <h1>Welcome to IIT Hub</h1>
        <p className="lead">Connecting students with programs, resources and opportunities to build future innovators.</p>
        <a href="/programs" className="btn btn-primary">Explore Programs</a>
      </div>
      <div className="col-md-5 d-none d-md-block">
        <div style={{height:200, background:'#eef2ff', borderRadius:8}} />
      </div>
    </div>
  </div>
)

export default Home
