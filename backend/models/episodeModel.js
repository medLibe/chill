const connection = require('../database/connection')

const createEpisode = (series_id, episode_title, season_number, episode_number, release_date, callback) => {
    const query = 'INSERT INTO episodes (series_id, episode_title, season_number, episode_number, release_date) VALUES (?,?,?,?,?)'
    connection.query(query, [series_id, episode_title, season_number, episode_number, release_date], callback)
}

const getAllEpisodes = (callback) => {
    const query = `
        SELECT episodes.id, episodes.series_id, episodes.episode_title, episodes.season_number, episodes.episode_number, episodes.release_date, series.title AS series_title
        FROM episodes
        INNER JOIN series ON episodes.series_id = series.id`
    connection.query(query, callback)
}

const getEpisodeById = (id, callback) => {
    const query = `
    SELECT episodes.id, episodes.series_id, episodes.episode_title, episodes.season_number, episodes.episode_number, episodes.release_date, series.title AS series_title
    FROM episodes
    INNER JOIN series ON episodes.series_id = series.id
    WHERE episodes.id = ?`
    connection.query(query, [id], callback)
}

const updateEpisode = (id, updateData, callback) => {
    let query = 'UPDATE episodes SET '
    const queryValues = []

    Object.keys(updateData).forEach((key, index) => {
        query += `${key} = ?`
        queryValues.push(updateData[key])
        if (index < Object.keys(updateData).length - 1) {
            query += ', '
        }
    })

    query += ' WHERE id = ?'
    queryValues.push(id)

    connection.query(query, queryValues, callback)
}

const deleteEpisode = (id, callback) => {
    const query = 'DELETE FROM episodes WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createEpisode,
    getAllEpisodes,
    getEpisodeById,
    updateEpisode,
    deleteEpisode
}