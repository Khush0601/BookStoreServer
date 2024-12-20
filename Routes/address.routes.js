const addressController=require("../Controllers/address.controller")
module.exports=(app)=>{
    app.post('/thirdProject/api/v1/user/addAddress',addressController.addAddress)
    app.get('/thirdProject/api/v1/user/:userId/getAllAddresses',addressController.getAllAddressesOfUserId)
    app.patch('/thirdProject/api/v1/user/setDefaultAddress',addressController.setDefaultAddress)
    app.patch('/thirdProject/api/v1/user/updateAddress',addressController.updateAddress)
    app.get('/thirdProject/api/v1/user/:userId/getDefaultAddresses',addressController.getDefaultAddress)
}