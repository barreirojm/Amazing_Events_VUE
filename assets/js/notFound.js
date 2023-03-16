function notFound(id_etiqueta) {
    let container = document.querySelector(id_etiqueta)
    container.innerHTML = `
    <div id="notFoundStyle">
    <div class="container-card d-flex justify-content-center">
                    <div class="card mb-3 mt-5 " style="max-width: 1440px;">
                        <div class="row no-gutters align-items-center">
                            <div class="col-md-6">
                                <img src=".//assets/images/notFound.jpg" class="card-img img-fit-detail" alt="...">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h4 class="card-title">Event not found!</h4>
                                    <h5 class="card-text">We are sorry.</h5>
                                    <button onclick="window.location.reload();" class="btn btn-primary">Try again!</button>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>    

`
}