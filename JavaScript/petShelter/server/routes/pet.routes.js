const ProductController = require("../controllers/pet.controller.js");

module.exports = (app) => {
    app.post("/api/pets/new", ProductController.createPet);
    app.get("/api/pets", ProductController.getAllPets);
    app.get("/api/pets/:id", ProductController.getOnePet)
    app.put("/api/pets/:id/edit", ProductController.updatePet);
    app.delete("/api/pets/:id", ProductController.deletePet);
}