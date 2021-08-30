const get_all_records = require('./get_records')
const get_by_location = require('./get_records_by_location')
const delete_records_by_location = require('./delete_records_by_location')
const add_records_by_location = require('./add_records_by_location')
const update_records_by_location = require('./update_records_by_location')

module.exports = {
    get_all_records,
    get_by_location,
    delete_records_by_location,
    add_records_by_location,
    update_records_by_location
}