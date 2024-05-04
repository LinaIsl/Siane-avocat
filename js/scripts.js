/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

const modal = () => {
    const modal = document.getElementById("info");
    modal.innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Obtenir un devis en 48h</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
            <div class="row">
                <div class="col">
                    <label for="nom">Nom <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="nom" placeholder="Nom" required>
                </div>
                <div class="col">
                    <label for="prenom">Prénom <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="prenom" placeholder="Prénom" required>
                </div>
            </div></br>
            <div class="row">
                <div class="col">
                    <label for="email">E-mail <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                </div>
                <div class="col">
                    <label for="telephone">Téléphone</label>
                    <input type="tel" class="form-control" id="telephone" placeholder="Téléphone">
                </div>
            </div></br>
            <div class="form-group">
                <label for="information">Information <span class="text-danger">*</span></label>
                <textarea class="form-control" id="information" rows="3" required></textarea>
            </div></br>
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary float-right">Envoyer</button>
            </div>
        </form>
    </div>
</div>`

    // Utiliser Bootstrap pour ouvrir la modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}