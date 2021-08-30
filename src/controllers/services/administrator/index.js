const add_admin = require('./registration/add_admin')
const get_all_accounts = require('./accounts/get_all_accounts')
const delete_account = require('./accounts/delete_account')
const update_account = require('./accounts/update_account')
const login_admin = require('./login/login_admin')

module.exports = {
    add_admin,
    get_all_accounts,
    delete_account,
    update_account,
    login_admin
}