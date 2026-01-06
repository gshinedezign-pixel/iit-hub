const Catalog = () => (
  <div className="container py-5">
    <h2>Catalog</h2>
    <p>All products listed here — placeholder cards below.</p>
    <div className="row mt-4">
      {[1,2,3,4].map(i => (
        <div className="col-md-3 mb-3" key={i}>
          <div className="card h-100">
            <div style={{height:150, background:'#f8f9fa'}} />
            <div className="card-body">
              <h5 className="card-title">Product {i}</h5>
              <p className="card-text text-muted">Short description</p>
              <a className="btn btn-sm btn-primary" href="#">View</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Catalog
